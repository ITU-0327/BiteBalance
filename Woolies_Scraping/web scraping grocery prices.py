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
        WebDriverWait(driver, 10).until(
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


if __name__ == '__main__':
    prod_details = fetch_first_product_details('coke')
    print(prod_details)
