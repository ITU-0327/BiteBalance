import requests
import json
 
from chatbot_function.utils import get_secret


EDAMAM_APP_ID = get_secret('edamam-api-app-id')
EDAMAM_APP_KEY = get_secret('edamam-api-app-key')



def fetch_recipes(query: str, 
                  filter_diet: list = None, 
                  filter_health: list = None, 
                  filter_meal: list = None,
                  filter_dish: list = None) -> list[dict]:
    """Returns recipes that matches the search query and filters

    Args:
        query: Search query
        filter_diet, filter_health, filter_meal, filter_dish: Filter criteria, must match recipe_filters.py

    Returns:
        list[dict]: A list of recipes, each recipe contains it's image_url, title, health labels, total cooking time,  
    """

    # The API endpoint
    url = "https://api.edamam.com/api/recipes/v2"

    payload = {'type':'public',
           'q': query,
           'app_id':EDAMAM_APP_ID,
           'app_key':EDAMAM_APP_KEY,
           'diet':filter_diet,
           'health':filter_health,
           'meal':filter_meal,
           'dishType':filter_dish}
    
    # A get request to the API
    response = requests.get(url, params=payload).json()

    recipes = []
    try:
        response["hits"]
    except KeyError:
        return [] # no recipe found

    for hit in response["hits"]:
        r = hit['recipe']
        recipe = {
            'recipe_img_url': r['images']['REGULAR']['url'],
            'recipe_title': r['label'],
            'recipe_url': r['shareAs'],
            'recipe_health_labels': r['healthLabels'], # list
            'recipe_total_time': r['totalTime'],
            'recipe_ingredient_lines': r['ingredientLines'], # list
            'recipe_calories': r['calories'],
            'recipe_totalNutrients': r['totalNutrients']}
        recipes.append(recipe)
    return recipes

if __name__ == '__main__':
    recipes = fetch_recipes('chicken, tomato, bacon',[],['gluten-free'],['Breakfast','Dinner'],[])

    for i in recipes:
        print(i['recipe_title'])