from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def fetch_first_product_details(search_term: str) -> dict[int, str, str]:
    driver = webdriver.Edge()
    url = f'https://www.woolworths.com.au/shop/search/products?searchTerm={search_term}'
    driver.get(url)

    product_info = {}
    try:
        # Wait for the 'wc-product-tile' elements to be loaded on the page.
        WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.TAG_NAME, "wc-product-tile"))
        )

        # Execute JavaScript to extract product title, cost, and URL
        product_details_script = """
            const productTile = document.querySelector('wc-product-tile');
            const shadowRoot = productTile.shadowRoot;

            // Extract product title
            const titleElement = shadowRoot.querySelector('.title a');
            const title = titleElement ? titleElement.textContent.trim() : '';

            // Extract product cost
            const costElement = shadowRoot.querySelector('.product-tile-price .primary');
            const costText = costElement ? costElement.textContent.trim() : '';
            let cost = costText.startsWith('$') ? parseFloat(costText.substring(1)) : 0;

            // Extract product URL
            const linkElement = shadowRoot.querySelector('a');
            let url = linkElement ? linkElement.getAttribute('href') : '';
            url = url ? `https://www.woolworths.com.au${url}` : '';
        
            return {title, cost, url};
        """
        product_info = driver.execute_script(product_details_script)

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()

    return product_info


def get_structured_message(response_type):
    json_schema = {
        "suggested_shopping_list": {
            "text":{
                "response_text": "string (recipe suggestions)",
                "shopping_list": "array of strings (3-10 grocery items). A sample response would be: '{shopping_list: [tomato,minced meat,potato]'}",
            }
        },

        "suggested_recipes": {
            "recipes": "array of strings (2-5 recipes). For example: ['recipe1', 'recipe2', ...]"
        }
    }

    return f"""Please respond with your {response_type} directly in a valid JSON format 
    (without using Markdown code blocks or any other formatting).
    The JSON schema should include: {json_schema[response_type]}"""
