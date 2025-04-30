Основы командной строки
🔹 Навигация по файловой системе
Команда	Описание
pwd	Показать текущую директорию
ls	Список файлов и папок
cd <путь>	Перейти в директорию
cd ..	Выйти на уровень выше
mkdir <имя>	Создать папку
touch <файл>	Создать файл

cd /home/user/Documents  
ls -la  # Показать скрытые файлы

🔹 Работа с файлами
Команда	Описание
cat <файл>	Просмотр содержимого
nano <файл>	Редактировать (простой редактор)
vim <файл>	Редактировать (продвинутый редактор)
cp <откуда> <куда>	Копировать
mv <откуда> <куда>	Переместить или переименовать
rm <файл>	Удалить файл
rm -r <папка>	Удалить папку рекурсивно

cp /tmp/exploit.py ~/Documents  
mv old_name.txt new_name.txt

🔹 Поиск файлов и текста
Команда	Описание
find / -name "*.txt"	Найти все .txt файлы
grep "текст" <файл>	Поиск текста в файле
locate <файл>	Быстрый поиск (требует updatedb)
Пример:

grep "password" /var/log/auth.log  
find / -type f -perm -4000  # Поиск SUID-файлов  

🔹 Сеть и процессы
Команда	Описание
ifconfig / ip a	Информация о сетевых интерфейсах
netstat -tuln	Список открытых портов
ps aux	Список процессов
kill <PID>	Завершить процесс
systemctl start/stop <сервис>	Управление сервисами
Пример:

netstat -tuln | grep 80  
ps aux | grep apache

🔹 Bash-скрипты
Bash-скрипты автоматизируют задачи в Linux

2.1. Основы синтаксиса
Файлы скриптов имеют расширение .sh

chmod +x script.sh  
./script.sh  
2.2. Переменные и ввод/вывод

name="Alice"  
echo "Hello, $name!"  

# Ввод с клавиатуры  
read -p "Enter your name: " username  
echo "Welcome, $username!"  
2.3. Условия (if-else)

if [ "$1" == "admin" ]; then  
  echo "Access granted!"  
else  
  echo "Access denied!"  
fi  
2.4. Циклы (for, while)
for ip in 192.168.1.{1..10}; do  
  ping -c 1 $ip | grep "bytes from"  
done  

counter=0  
while [ $counter -lt 5 ]; do  
  echo "Counter: $counter"  
  ((counter++))  
done  
2.5. Полезные примеры скриптов
Сканер портов
bash
#!/bin/bash  

host="127.0.0.1"  
for port in {1..1000}; do  
  timeout 1 bash -c "echo >/dev/tcp/$host/$port" && echo "Port $port is open"  
done  
Автоматический бэкап
bash
#!/bin/bash  

backup_dir="/backups"  
mkdir -p $backup_dir  
tar -czf "$backup_dir/backup_$(date +%Y%m%d).tar.gz" /home/user  
3. Полезные инструменты в Kali/Parrot
Команда/Утилита	Описание
sudo su	Переход в root
man <команда>	Справка по команде
apt update && apt upgrade	Обновление системы
arp-scan -l	Сканирование локальной сети
python3 -m http.server 80	Запуск HTTP-сервера