import azure.functions as func
import logging
import json

from .openai_service import generate_openai_response, process_image
from .utils import get_secret, isEnglish
from .language_service import detect_language, translate_text
# from .recipe_service import get_recipe_suggestions
# from .shopping_list_generator import generate_shopping_list
from ..Woolies_Scraping.web_scraping_grocery_prices import fetch_first_product_details, get_structured_message

ENGLISH = 'en'

# Default message to use as a prompt for the OpenAI API, tailored for the Food Planner chatbot.
default_message = """Imagine you are a smart chatbot integrated with a Food Planner application. 
Your main goal is to assist users in eating cheaply and healthily. When users send a picture of their fridge, you will analyze the contents and suggest recipes based on the available ingredients. 
Additionally, you will generate a shopping list from Woolworths for missing ingredients required for a week's meals, focusing on convenience and well-being. 
Your responses should be practical, clear, and promote healthy eating habits while considering cost-effectiveness."""

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    openai_api_key = get_secret('openai-api-key')

    try:
        req_body = req.get_json()
        user_input = req_body.get('query')
        chat_history = req_body.get('chatHistory', [])
        image_content = req_body.get('image')
    except ValueError:
        user_input = req.params.get('query')
        chat_history = []
        image_content = None

    input_language = None

    if user_input:
        # Determine the language of the user input.
        input_language = detect_language(user_input)
        if not isEnglish(input_language):
            user_input = translate_text(user_input, from_lang=input_language)  # Translate to English

        # Generate a shopping list if the user requests it.
        if 'shopping list' in user_input.lower():
            shopping_list_message = get_structured_message('suggested_shopping_list')
            response_text = generate_openai_response(user_input, openai_api_key, default_message+shopping_list_message)
            
            # Parse the JSON response
            parsed_response = json.loads(response_text)
            inner_text = parsed_response["text"]

            # Access the "shopping_list" key directly
            # recipe_suggestion = inner_text["response_text"]
            shopping_list = inner_text["shopping_list"]

            # print(recipe_suggestion)
            #   With bacon and eggs, you can make a delicious Bacon and Egg Breakfast Burrito. 
            #   You can add tortillas, avocado, and salsa to your shopping list.
            # print(shopping_list)
            #   ['tortillas', 'avocado', 'salsa']

            shopping_list_links = []
            for shopping_item in shopping_list:
                link = f"https://www.woolworths.com.au/shop/search/products?searchTerm={shopping_item.replace(' ', '%20')}"
                shopping_list_links.append({'item': shopping_item, 'url': link})
            
            return func.HttpResponse(json.dumps({'shopping_list_links': shopping_list_links}), status_code=200, mimetype="application/json")

        else:
            instructions = "\n\nRespond without using 'bot:' or any other prefixes before the responses."
            
            chat_history_formatted = '\n'.join([f"{m['sender']}: {m['text']}" for m in chat_history])
            prompt = f"{chat_history_formatted}\n\n{user_input}{instructions}"

            response_text = generate_openai_response(prompt, openai_api_key, default_message)

    elif image_content:
        # Process the image to determine available food items.
        # TODO: Implement process_image function
        response_text = process_image(image_content, openai_api_key)
        if response_text is None:
            return func.HttpResponse("Failed to process image.", status_code=500)

    else:
        return func.HttpResponse("Please provide a query or an image.", status_code=400)

    # Translate the response back to the user's language if necessary.
    if input_language and input_language != ENGLISH:
        response_text = translate_text(response_text, from_lang=ENGLISH, to_lang=input_language)

    # Return the response to the user
    response_data = {"text": response_text}
    return func.HttpResponse(json.dumps(response_data), status_code=200, mimetype="application/json")
