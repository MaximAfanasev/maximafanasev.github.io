from scapy.all import *

def packet_callback(packet):
    if packet.haslayer(IP):
        log = f"[+] Пакет: {packet[IP].src} → {packet[IP].dst}\n"
        print(log, end='')  # Вывод в консоль
        with open("output.log", "a") as f:
            f.write(log)  # Запись в файл output.log в той же папке

sniff(prn=packet_callback, store=0)