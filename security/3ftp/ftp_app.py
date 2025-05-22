import ftplib
import os

def connect_to_ftp(server, username, password):
    ftp = ftplib.FTP(server)
    ftp.login(user=username, passwd=password)
    return ftp

def upload_file(ftp, file_path):
    with open(file_path, 'rb') as file:
        ftp.storbinary(f'STOR {os.path.basename(file_path)}', file)
    print(f'Файл {file_path} успешно загружен.')

def download_file(ftp, file_name):
    with open(file_name, 'wb') as file:
        ftp.retrbinary(f'RETR {file_name}', file.write)
    print(f'Файл {file_name} успешно скачан.')

def list_files(ftp):
    files = ftp.nlst()
    print("Список файлов на сервере:")
    for file in files:
        print(file)

def main():
    server = input("Введите адрес FTP-сервера: ")
    username = input("Введите имя пользователя: ")
    password = input("Введите пароль: ")

    try:
        ftp = connect_to_ftp(server, username, password)
        print("Успешно подключено к FTP-серверу.")

        while True:
            print("\nВыберите действие:")
            print("1. Загрузить файл")
            print("2. Скачать файл")
            print("3. Показать список файлов на сервере")
            print("4. Выйти")

            choice = input("Ваш выбор: ")

            if choice == '1':
                file_path = input("Введите путь к файлу для загрузки: ")
                upload_file(ftp, file_path)
            elif choice == '2':
                file_name = input("Введите имя файла для скачивания: ")
                download_file(ftp, file_name)
            elif choice == '3':
                list_files(ftp)
            elif choice == '4':
                break
            else:
                print("Неверный выбор. Пожалуйста, попробуйте снова.")

        ftp.quit()
        print("Соединение с FTP-сервером закрыто.")
    
    except Exception as e:
        print(f"Произошла ошибка: {e}")

if __name__ == "__main__":
    main()