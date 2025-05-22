Шаг 1: Установка Homebrew (если еще не установлен)
Если у вас еще нет Homebrew, вы можете установить его, выполнив следующую команду в терминале:

bash
Копировать код
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Шаг 2: Установка OpenVPN
brew install openvpn
Шаг 3: Настройка OpenVPN
Создайте директорию для конфигурации OpenVPN:

mkdir -p ~/openvpn-config
cd ~/openvpn-config
Создайте конфигурационный файл сервера:

Создайте файл server.conf с помощью текстового редактора (например, nano):


nano server.conf

port 1194
proto udp
dev tun

ca ca.crt
cert server.crt
key server.key  # This file should be kept secret
dh dh.pem

server 10.8.0.0 255.255.255.0

ifconfig-pool-persist ipp.txt

push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
push "dhcp-option DNS 8.8.4.4"

keepalive 10 120

cipher AES-256-CBC
user nobody
group nogroup

persist-key
persist-tun

status openvpn-status.log
verb 3



Сохранение файла:

Нажмите Ctrl + O (это сочетание клавиш для сохранения файла).
Вам будет предложено подтвердить имя файла. Просто нажмите Enter, чтобы сохранить с тем же именем.
Выход из редактора:

Нажмите Ctrl + X, чтобы выйти из редактора.
Таким образом, вы сначала сохраняете изменения, а затем выходите из nano. Если у вас есть дополнительные вопросы, не стесняйтесь спрашивать!



Создайте необходимые сертификаты и ключи:

Для создания сертификатов и ключей вам потребуется использовать Easy-RSA или другой инструмент для управления PKI (Public Key Infrastructure). Однако на Mac это может быть немного сложнее, так как Easy-RSA не всегда работает без проблем на M1.


Шаг 4: Создание сертификатов с помощью Easy-RSA
Установите Easy-RSA:

brew install easy-rsa
Создайте PKI и сертификаты:
	
mkdir ~/easy-rsa
cd ~/easy-rsa
Настройте переменные:

bash
nano vars
Измените следующие строки:

export KEY_COUNTRY="RU"
export KEY_PROVINCE="MOW"
export KEY_CITY="Moscow"
export KEY_ORG="MyOrg"
export KEY_EMAIL="email@example.com"
export KEY_OU="MyOrganizationalUnit"

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

TODO: завис на этом шаге, easyrsa не запускается через консоль zsh, bash...

Соберите PKI и создайте сертификаты:
source vars
./clean-all
./build-ca    # Создание CA (Certificate Authority)
./build-key-server server    # Создание серверного ключа и сертификата 
./build-dh    # Генерация DH параметров 
openvpn --genkey --secret keys/ta.key    # Генерация HMAC ключа 

Скопируйте созданные файлы в директорию конфигурации OpenVPN:
cp keys/ca.crt keys/server.crt keys/server.key keys/dh2048.pem ~/openvpn-config/
Шаг 5: Запуск OpenVPN сервера
Теперь вы можете запустить сервер OpenVPN с помощью следующей команды:

bash
Копировать код
sudo openvpn --config ~/openvpn-config/server.conf
Шаг 6: Настройка клиента
Для подключения к вашему VPN-серверу вам нужно создать клиентский конфигурационный файл.

Создайте клиентский сертификат:
Выполните следующие команды в директории Easy-RSA:

bash
Копировать код
cd ~/easy-rsa/
source vars 
./build-key client1 
Создайте клиентский конфигурационный файл (например, client.ovpn):
plaintext
Копировать код
client 
dev tun 
proto udp 
remote YOUR_SERVER_IP 1194 # Замените на IP-адрес вашего сервера 
resolv-retry infinite 
nobind 
persist-key 
persist-tun 

# Укажите пути к сертификатам:
ca ca.crt 
cert client1.crt 
key client1.key 

tls-auth ta.key 1 
cipher AES-256-CBC 
verb 3 
Шаг 7: Подключение клиента к VPN
Используйте OpenVPN клиент на вашем устройстве для подключения к VPN-серверу с помощью созданного файла конфигурации (client.ovpn).