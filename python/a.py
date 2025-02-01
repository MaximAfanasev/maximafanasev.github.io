import aiohttp
import asyncio

async def fetch_user_data(session, user_id):
    """Асинхронная функция для получения данных о пользователе по ID."""
    url = f'https://jsonplaceholder.typicode.com/users/{user_id}'
    
    async with session.get(url) as response:
        if response.status == 200:
            user_data = await response.json()
            return user_data
        else:
            print(f'Ошибка: {response.status} для пользователя с ID {user_id}')

async def main():
    """Главная асинхронная функция."""
    async with aiohttp.ClientSession() as session:
        # Создаем список корутин для получения данных о пользователях
        user_ids = [1, 2, 3, 4, 5]
        tasks = [fetch_user_data(session, user_id) for user_id in user_ids]
        
        # Выполняем все задачи асинхронно и ждем их завершения
        results = await asyncio.gather(*tasks)
        
        # Выводим имена пользователей
        for user in results:
            if user:  # Проверяем, что данные пользователя были получены
                print(f"{user['name']} - {user['email']}")

# Запускаем главную функцию
if __name__ == '__main__':
    asyncio.run(main())
