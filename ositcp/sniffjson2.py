
from scapy.all import *
import json

def analyze_packet(packet):
    result = {}
    
    # --- Уровень 2: Ethernet (MAC-адреса) ---
    if packet.haslayer(Ether):
        result["mac_src"] = packet[Ether].src
        result["mac_dst"] = packet[Ether].dst
    
    # --- Уровень 3: IP (адреса, TTL, протокол) ---
    if packet.haslayer(IP):
        result["ip_src"] = packet[IP].src
        result["ip_dst"] = packet[IP].dst
        result["ttl"] = packet[IP].ttl
        result["ip_proto"] = packet[IP].proto  # 6=TCP, 17=UDP
    
    # --- Уровень 4: TCP/UDP (порты, флаги) ---
    if packet.haslayer(TCP):
        result["port_src"] = packet[TCP].sport
        result["port_dst"] = packet[TCP].dport
        result["tcp_flags"] = packet[TCP].flags  # SYN, ACK и т.д.
    
    if packet.haslayer(UDP):
        result["port_src"] = packet[UDP].sport
        result["port_dst"] = packet[UDP].dport
    
    # --- Уровень 7: HTTP/DNS ---
    if packet.haslayer(Raw):  # "Сырые" данные (HTTP, DNS)
        payload = packet[Raw].load
        if b"HTTP" in payload:  # HTTP-запрос
            result["http"] = payload.decode(errors="ignore")
        elif packet.haslayer(DNS):  # DNS-запрос
            result["dns"] = packet[DNS].qd.qname.decode()
    
    return result

# Захват пакетов и сохранение в JSON
packets = []
sniff(prn=lambda x: packets.append(analyze_packet(x)), store=0, count=50)

with open("packets.json", "w") as f:
    json.dump(packets, f, indent=2)