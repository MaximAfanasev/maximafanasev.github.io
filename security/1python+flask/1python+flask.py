Шаг 1: Установка необходимых библиотек
Сначала убедитесь, что у вас установлен Python и pip. Затем установите Flask:

pip install Flask
Шаг 2: Создание самоподписанного сертификата
Для работы с HTTPS нам нужен сертификат. Вы можете создать самоподписанный сертификат с помощью OpenSSL. Выполните следующие команды в терминале:

openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
Эта команда создаст два файла: key.pem (приватный ключ) и cert.pem (сертификат).
	
Country Name (2 letter code) [XX]: RU
State or Province Name (full name) []: Moscow
Locality Name (eg, city) []: Moscow
Organization Name (eg, company) []: My Company
Organizational Unit Name (eg, section) []: IT Department
Common Name (e.g. server FQDN or YOUR name) []: localhost
Email Address []: example@example.com

Шаг 3: Создание веб-сервера
Создайте файл app.py и добавьте следующий код:

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Welcome to the simple web server!")

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "name": "Flask Server",
        "version": "1.0",
        "status": "running"
    }
    return jsonify(data)

if __name__ == '__main__':
    # Запуск сервера с поддержкой HTTPS
    app.run(host='0.0.0.0', port=443, ssl_context=('cert.pem', 'key.pem'))
Шаг 4: Запуск веб-сервера
python app.py
Шаг 5: Доступ к серверу
Откройте браузер и перейдите по адресу https://localhost. Вы должны увидеть сообщение:
{
  "message": "Welcome to the simple web server!"
}
Для доступа к API перейдите по адресу https://127.0.0.1/api/data, и вы получите ответ в формате JSON:
{
  "name": "Flask Server",
  "version": "1.0",
  "status": "running"
}
Примечание о безопасности
При использовании самоподписанных сертификатов браузеры могут выдавать предупреждения о безопасности. Это нормально для разработки, но для продакшн-окружения рекомендуется использовать сертификаты от доверенных центров сертификации.