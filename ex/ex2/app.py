from flask import Flask, render_template
import requests
from datetime import datetime

app = Flask(__name__)

def get_currency_rates():
    # Используем API ЦБ РФ
    url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    response = requests.get(url)
    data = response.json()
    return data['Valute'], data['Date']

@app.route('/')
def index():
    currencies, update_time = get_currency_rates()
    return render_template('index.html', 
                         currencies=currencies,
                         update_time=datetime.fromisoformat(update_time).strftime('%H:%M:%S %d.%m.%Y'))

@app.route('/api/rates')
def api_rates():
    currencies, update_time = get_currency_rates()
    return {
        'currencies': currencies,
        'update_time': datetime.fromisoformat(update_time).strftime('%H:%M:%S %d.%m.%Y')
    }

if __name__ == '__main__':
    app.run(debug=True)