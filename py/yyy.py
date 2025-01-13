from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import time

# Убедитесь, что у вас установлен драйвер ChromeDriver и он находится в PATH
# Вы можете скачать его здесь: https://sites.google.com/chromium.org/driver/

# Настройки для запуска Chrome
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # Запускает браузер в фоновом режиме (без GUI)
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

# Инициализация драйвера
driver = webdriver.Chrome(options=options)

# URL-адрес страницы, которую вы хотите открыть
url = 'https://example.com'  # Замените на нужный URL
driver.get(url)

# Подождите некоторое время, чтобы страница загружалась (если необходимо)
time.sleep(2)  # Можно использовать WebDriverWait для более надежного ожидания

# Получение HTML-кода страницы
html = driver.page_source

# Создание объекта BeautifulSoup для парсинга HTML
soup = BeautifulSoup(html, 'html.parser')

# Пример: извлечение всех заголовков h1
for h1 in soup.find_all('h1'):
    print(h1.text)

# Закрытие браузера
driver.quit()
