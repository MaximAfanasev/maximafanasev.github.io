from selenium import webdriver
from bs4 import BeautifulSoup
import time

# Укажите путь к geckodriver, если он не добавлен в PATH
# driver = webdriver.Firefox(executable_path='path_to_geckodriver')

# Запуск Firefox
driver = webdriver.Firefox()

# Открываем страницу
driver.get("http://google.com")  # Замените на нужный вам URL

# Ждем, чтобы страница полностью загрузилась
time.sleep(2)  # Вы можете увеличить время ожидания, если это необходимо

# Получаем HTML-код страницы
html = driver.page_source

# Создаем объект BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

# Пример: извлекаем и выводим заголовок страницы
title = soup.title.string
print(f'Title of the page: {title}')

# Закрываем браузер
driver.quit()
