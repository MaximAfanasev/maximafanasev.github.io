import json
from scapy.all import *

packets = []

def packet_callback(packet):
    if packet.haslayer(IP):
        data = {
            "src_ip": packet[IP].src,
            "dst_ip": packet[IP].dst,
            "protocol": packet[IP].proto
        }
        packets.append(data)
        print(json.dumps(data, indent=2))  # Красивый вывод

sniff(prn=packet_callback, store=0, timeout=10)  # Сниффим 10 секунд

# Сохраняем всё в файл
with open("traffic.json", "w") as f:
    json.dump(packets, f, indent=2)
		
		
#[
#  {
#    "src_ip": "192.168.1.100",
#    "dst_ip": "142.250.185.174",
#    "protocol": 6
#  }
#]