from openai import OpenAI
import requests
import logging


def generate_openai_response(prompt_text: str, openai_api_key: str, system_message: str, model: str = 'gpt-3.5-turbo') -> str:
    """
    Args:
        prompt_text (str): The user's input text to which the model should respond.
        openai_api_key (str): The API key for authenticating requests to OpenAI.
        system_message (str): A system-level message that provides context for the conversation.
                              This is used to prime the model for generating responses in a specific context.
        model (str): The name of the model to use for generating responses.

    Returns:
        str or None: The generated response from the model, or None if an error occurs during the API call.

    Raises:
        Prints an error message to the console if the OpenAI API call fails.
    """
    
    client = OpenAI(api_key=openai_api_key)

    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": prompt_text},
            ],
            temperature=0.7,
            max_tokens=256,
            # top_p=1,  # Uncomment this to test different parameters
            # frequency_penalty=0,
            # presence_penalty=0
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return None


def process_image(base64_image: str, api_key: str):
    headers = {
      "Content-Type": "application/json",
      "Authorization": f"Bearer {api_key}"
    }
    
    payload = {
      "model": "gpt-4-vision-preview",
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "What’s in this image?"
            },
            {
              "type": "image_url",
              "image_url": {
                "url": f"data:image/jpeg;base64,{base64_image}"
              }
            }
          ]
        }
      ],
      "max_tokens": 300
    }
    
    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    result = response.json()
    print(result)
    if response.status_code == 200:
        return result.get('choices')[0].get('message').get('content')
    else:
        logging.error(f"Failed to process image: {response.text}")
        return None