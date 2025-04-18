from scapy.all import *

# Захватываем 100 пакетов и сохраняем в файл
packets = sniff(count=100)
wrpcap("/Users/test/Documents/maximafanasev.github.io/ositcp/capture.pcap", packets)  # Сохраняем в PCAP
print("Трафик сохранён в capture.pcap")

# sudo find / -name "capture.pcap" 2>/dev/null