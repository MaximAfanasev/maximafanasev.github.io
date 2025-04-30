import requests
from datetime import datetime

def get_currency_rates():
    url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    response = requests.get(url)
    data = response.json()
    
    print(f"Курсы валют ЦБ РФ на {datetime.fromisoformat(data['Date']).strftime('%Y-%m-%d')}:")
    for code, currency in data['Valute'].items():
        print(f"{code} {currency['Name']}: {currency['Nominal']} = {currency['Value']} руб.")
    
    return data

get_currency_rates()
