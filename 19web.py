# Сети (HTTP-запрос с использованием библиотеки requests)
import requests
response = requests.get('https://api.github.com')
print(response.status_code)  # Выводит код состояния HTTP
print(response.json())  # Выводит JSON-ответ
# Потоки (использование библиотеки threading)
import threading
import time
def print_numbers():
    for i in range(5):
        print(i)
        time.sleep(1)
thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()  # Ожидание завершения потока
# Процессы (использование библиотеки multiprocessing)
from multiprocessing import Process
import time
def print_numbers():
    for i in range(5):
        print(i)
        time.sleep(1)
process = Process(target=print_numbers)
process.start()
process.join()  # Ожидание завершения процесса
# Сокеты (создание простого сервера и клиента)
# Сервер
import socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 12345))
server_socket.listen(1)
print("Сервер запущен и ожидает подключения...")
client_socket, addr = server_socket.accept()
print(f"Подключено к {addr}")
data = client_socket.recv(1024).decode()
print(f"Получено сообщение: {data}")
client_socket.close()
server_socket.close()
#Клиент
python
Копировать код
import socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 12345))
client_socket.sendall(b'Hello, Server!')
client_socket.close()