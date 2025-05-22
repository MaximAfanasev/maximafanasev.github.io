# Создание файла
with open('example.txt', 'w') as f:
    f.write('Hello, World!')
# Проверка существования файла
import os
file_exists = os.path.exists('example.txt')
print(file_exists)  # True, если файл существует
# Тип файла
import mimetypes
file_type = mimetypes.guess_type('example.txt')[0]
print(file_type)  # Например, 'text/plain'
# Папка (создание каталога)
os.makedirs('new_folder', exist_ok=True)  # Создаёт папку, если она не существует
# Копирование файла
import shutil
shutil.copy('example.txt', 'copy_of_example.txt')
# Имя файла
file_name = os.path.basename('path/to/example.txt')
print(file_name)  # 'example.txt'
# Ссылка на файл (символическая ссылка)
os.symlink('example.txt', 'link_to_example.txt')
# Изменение разрешения (права доступа)
import stat
os.chmod('example.txt', stat.S_IRUSR | stat.S_IWUSR)  # Устанавливает права чтения и записи для владельца
# Изменение владельца файла (требуются права администратора)
import os
os.chown('example.txt', uid, gid)  # uid и gid - идентификаторы пользователя и группы
# abspath (абсолютный путь)
absolute_path = os.path.abspath('example.txt')
print(absolute_path)
# Удаление файла
os.remove('copy_of_example.txt')
# Создание каталога
os.mkdir('new_directory')  # Создаёт новый каталог
# Удаление каталога
os.rmdir('new_directory')  # Удаляет пустой каталог
# Содержимое каталога
files = os.listdir('.')
print(files)  # Список файлов и папок в текущем каталоге
# Изменение каталога (переход в другой каталог)
os.chdir('/path/to/directory')  # Меняет текущий рабочий каталог на указанный путь
# Совпадающие файлы (поиск одинаковых файлов)
import filecmp
are_equal = filecmp.cmp('file1.txt', 'file2.txt')
print(are_equal)  # True, если файлы идентичны, иначе False.
# Программы и процессы (запуск процесса)
import subprocess
subprocess.run(['ls', '-l'])  # Запускает команду ls в терминале (Linux/Mac)
# Календарь и часы (текущая дата и время)
from datetime import datetime
current_time = datetime.now()
print(current_time.strftime('%Y-%m-%d %H:%M:%S'))  # Выводит текущую дату и время в формате ГГГГ-ММ-ДД ЧЧ:ММ:СС.