from scapy.all import *
import datetime

LOG_FILE = "network.log"

def log_packet(packet):
    if packet.haslayer(IP):
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log = f"{timestamp} | {packet[IP].src:15} → {packet[IP].dst:15} | Proto: {packet[IP].proto}\n"
        with open(LOG_FILE, "a") as f:
            f.write(log)
        print(log, end='')

print(f"[*] Начинаю перехват... (логи в {LOG_FILE})")
sniff(prn=log_packet, store=0)