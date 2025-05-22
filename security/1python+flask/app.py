from flask import Flask, jsonify, redirect

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

@app.route('/http')
def http_redirect():
    return redirect("https://localhost", code=301)

if __name__ == '__main__':
    # Запуск сервера с поддержкой HTTPS
    app.run(host='0.0.0.0', port=443, ssl_context=('cert.pem', 'key.pem'))