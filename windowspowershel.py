Основы PowerShell
1.1. Запуск PowerShell
Обычный режим: Win + R → powershell

От имени администратора: Win + X → Windows PowerShell (Admin)

PowerShell ISE: Встроенная среда для написания скриптов (powershell_ise).

1.2. Основные команды (аналоги Linux)
Команда (PowerShell)	Аналог в Linux	Описание
Get-ChildItem	ls	Просмотр содержимого папки
Set-Location	cd	Переход в папку
Copy-Item	cp	Копирование файлов
Remove-Item	rm	Удаление файлов
Get-Content	cat	Чтение файла
Test-NetConnection	ping	Проверка доступности хоста
Примеры:

powershell
Get-ChildItem C:\Users  # Просмотр файлов  
Test-NetConnection google.com -Port 80  # Проверка порта  
1.3. Работа с процессами и сервисами
Команда	Описание
Get-Process	Список процессов
Stop-Process -Name "chrome"	Завершить процесс
Get-Service	Список сервисов
Start-Service -Name "Spooler"	Запустить сервис
Пример:

powershell
Get-Process | Where-Object { $_.CPU -gt 50 }  # Процессы с нагрузкой CPU >50%  
1.4. Сетевые команды
Команда	Описание
ipconfig /all	Информация о сети
Get-NetTCPConnection	Активные подключения
Resolve-DnsName google.com	DNS-запрос
Пример:

powershell
Get-NetTCPConnection -State Established  # Установленные соединения  
2. PowerShell для администрирования Active Directory
2.1. Подключение к AD
powershell
Import-Module ActiveDirectory  # Загрузка модуля AD  
Get-ADUser -Filter *  # Получить всех пользователей  
2.2. Управление пользователями
Команда	Описание
New-ADUser -Name "John"	Создать пользователя
Set-ADUser -Identity John -Enabled $true	Активировать учётку
Remove-ADUser -Identity John	Удалить пользователя
Пример:

powershell
Get-ADUser -Filter {Enabled -eq $true}  # Все активные пользователи  
2.3. Управление группами
Команда	Описание
New-ADGroup -Name "Admins"	Создать группу
Add-ADGroupMember -Identity "Admins" -Members "John"	Добавить пользователя
Get-ADGroupMember -Identity "Domain Admins"	Список членов группы
Пример:

powershell
Get-ADGroup -Filter * | Select-Object Name  # Все группы в домене  
2.4. Поиск в Active Directory
powershell
# Найти всех пользователей из отдела IT  
Get-ADUser -Filter {Department -eq "IT"} -Properties Department  

# Найти компьютеры с Windows 10  
Get-ADComputer -Filter {OperatingSystem -like "*Windows 10*"}  
3. PowerShell-скрипты
3.1. Основы скриптинга
Файлы .ps1 (например, script.ps1).

Запуск скриптов может быть заблокирован политикой (используйте Set-ExecutionPolicy RemoteSigned).

3.2. Примеры скриптов
Скрипт для мониторинга входа пользователей
powershell
# Мониторинг событий входа  
Get-EventLog -LogName Security -InstanceId 4624 -Newest 10 |  
Select-Object TimeGenerated, Message  
Массовое создание пользователей из CSV
powershell
# CSV-файл: users.csv (с колонками Name, Department)  
Import-Csv "C:\users.csv" | ForEach-Object {  
    New-ADUser -Name $_.Name -Department $_.Department  
}  
4. Инструменты для работы с Active Directory
4.1. Графические утилиты
Active Directory Users and Computers (ADUC) – управление пользователями.

ADSI Edit – продвинутое редактирование AD.

4.2. Командные утилиты
Утилита	Описание
dsquery	Поиск в AD
net user /domain	Список пользователей домена
nltest /domain_trusts	Список доверенных доменов
Пример:

cmd
net group "Domain Admins" /domain  # Список администраторов домена  
5. Безопасность Active Directory
5.1. Типовые уязвимости AD
Kerberoasting – атака на сервисные аккаунты.

Pass-the-Hash – использование хешей паролей.

DCSync – кража данных через репликацию AD.

5.2. Защита AD
✅ Отключить устаревшие протоколы (NTLM, LM).
✅ Включить аудит событий безопасности.
✅ Использовать LAPS (Local Administrator Password Solution).