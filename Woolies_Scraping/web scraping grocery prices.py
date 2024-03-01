from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def fetch_first_product_link(url):
    # options = Options()
    # options.add_argument("--headless")
 
    # driver = webdriver.Edge(options=options)
    driver = webdriver.Edge()
    driver.get(url)

    first_product_link = None
    try:
        # Wait for the 'wc-product-tile' elements to be loaded on the page.
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "wc-product-tile"))
        )
        # Execute JavaScript to extract the href attribute from the <a> tag within the shadow DOM of the first wc-product-tile.
        first_product_link = driver.execute_script("""
            const productTile = document.querySelector('wc-product-tile');
            const shadowRoot = productTile.shadowRoot;
            const linkElement = shadowRoot.querySelector('a');
            return linkElement ? linkElement.getAttribute('href') : 'Link not found';
        """)
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()

    return first_product_link


if __name__ == '__main__':
    search = 'coke'
    url = f'https://www.woolworths.com.au/shop/search/products?searchTerm={search}'
    first_link = fetch_first_product_link(url)
    print(f"https://www.woolworths.com.au{first_link}")
