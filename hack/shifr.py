🔹 Шифрование: AES и RSA
Шифрование — это процесс преобразования данных в нечитаемый формат для защиты от несанкционированного доступа

Симметричное (AES) – один ключ для шифрования и расшифровки
Асимметричное (RSA) – пара ключей (публичный и приватный)

🔹 AES (Advanced Encryption Standard) Симметричное блочное шифрование
Размеры ключа: 128, 192, 256 бит
Скорость: Высокая (подходит для шифрования больших данных)

Данные разбиваются на блоки по 128 бит (16 байт)
Ключ расширяется в набор подключей

SubBytes (замена байт по таблице)
ShiftRows (сдвиг строк)
MixColumns (перемешивание столбцов)
AddRoundKey (XOR с подключом)

Режимы AES:
ECB (Electronic Codebook) – небезопасен (одинаковые блоки → одинаковый шифротекст)
CBC (Cipher Block Chaining) – требует IV (вектор инициализации)
GCM (Galois/Counter Mode) – добавляет аутентификацию (MAC)

Пример на Python (библиотека pycryptodome):
from Crypto.Cipher import AES  
from Crypto.Random import get_random_bytes  

key = get_random_bytes(16)  # Ключ 128 бит  
data = b"Secret message"  

# Шифрование (режим CBC)  
iv = get_random_bytes(16)  
cipher = AES.new(key, AES.MODE_CBC, iv)  
ciphertext = cipher.encrypt(data.ljust(16, b'\0'))  # Дополнение до 16 байт  

# Расшифровка  
cipher = AES.new(key, AES.MODE_CBC, iv)  
plaintext = cipher.decrypt(ciphertext).strip(b'\0')  
print(plaintext.decode())  # "Secret message"  

🔹 RSA (Rivest–Shamir–Adleman)
Тип: Асимметричное шифрование.
Основа: Математическая сложность факторизации больших чисел.
Использование:
Шифрование небольших данных (например, ключей для AES).
Цифровые подписи

Генерация ключей:
Выбираются два простых числа p и q.
Вычисляется n = p * q (модуль).
Функция Эйлера: f(n) = (p-1)*(q-1).
Выбирается e (обычно 65537), взаимно простое с f(n).
Вычисляется d = e⁻¹ mod f(n) (секретная экспонента).
Публичный ключ: (e, n).
Приватный ключ: (d, n).
Шифрование:
ciphertext = plaintextᵉ mod n.
Расшифровка:
plaintext = ciphertextᵈ mod n.

Пример на Python:
from Crypto.PublicKey import RSA  
from Crypto.Cipher import PKCS1_OAEP  

# Генерация ключей  
key = RSA.generate(2048)  
private_key = key.export_key()  
public_key = key.publickey().export_key()  

# Шифрование  
message = b"Secret data"  
cipher = PKCS1_OAEP.new(RSA.import_key(public_key))  
ciphertext = cipher.encrypt(message)  

# Расшифровка  
cipher = PKCS1_OAEP.new(RSA.import_key(private_key))  
plaintext = cipher.decrypt(ciphertext)  
print(plaintext.decode())  # "Secret data"  


🔹 Гибридные системы
На практике часто используют AES + RSA:
RSA передаёт зашифрованный ключ для AES.
AES шифрует основные данные.
Пример (SSL/TLS):
Клиент генерирует ключ AES, шифрует его RSA-публичным ключом сервера.
Сервер расшифровывает ключ AES своим приватным ключом.
Дальнейший обмен идёт через AES.

🔹 Атаки и защита
AES
Brute Force – бесполезен при ключе 256 бит.
Side-channel attacks – анализ времени выполнения/энергопотребления.
Защита: Режим GCM, аппаратное шифрование (AES-NI).

RSA
Факторизация n – требует квантового компьютера для больших n.
Padding Oracle – атаки на неправильную реализацию PKCS#1.
Защита: Использование OAEP вместо PKCS#1 v1.5.

Примеры использования
AES: HTTPS (шифрование трафика)
BitLocker (шифрование диска)
RSA: SSL-сертификаты, SSH, PGP
