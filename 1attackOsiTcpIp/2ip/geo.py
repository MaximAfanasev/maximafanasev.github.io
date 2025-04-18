import geoip2.database

reader = geoip2.database.Reader('GeoLite2-City.mmdb')
response = reader.city('142.250.185.174')

print(f"Страна: {response.country.name}")
print(f"Город: {response.city.name}")
print(f"Координаты: {response.location.latitude}, {response.location.longitude}")