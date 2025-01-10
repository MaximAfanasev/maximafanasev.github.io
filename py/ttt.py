from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

chrome_options = Options()
# chrome_options.add_argument("--headless")  # Если нужно запустить в безголовом режиме

service = Service('/opt/homebrew/bin/chromedriver')  # Укажите полный путь к chromedriver
driver = webdriver.Chrome(service=service, options=chrome_options)

try:
    driver.get("https://www.google.com")
    time.sleep(2)  # Ждем 2 секунды для загрузки страницы
    print(driver.title)  # Должен вывести "Google"
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    driver.quit()
