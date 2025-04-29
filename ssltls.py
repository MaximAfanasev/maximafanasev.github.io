🔹 SSL/TLS, сертификаты
SSL (Secure Sockets Layer) и его преемник TLS (Transport Layer Security) — это криптографические протоколы, обеспечивающие безопасную передачу данных в интернете. Они используются в HTTPS, VPN, почтовых протоколах (SMTP, IMAP) и других сервисах.

Процесс установки безопасного соединения (TLS Handshake) включает несколько этапов:
Клиент и сервер согласовывают параметры
Клиент отправляет ClientHello с поддерживаемыми версиями TLS и алгоритмами шифрования.
Сервер отвечает ServerHello, выбирая подходящие параметры.

🔹 Аутентификация сервера
Сервер отправляет свой SSL-сертификат и публичный ключ.
Клиент проверяет сертификат:
Подписан ли он доверенным Центром сертификации (CA)?
Не истёк ли срок действия?
Соответствует ли домену?

🔹 Обмен ключами
Клиент генерирует pre-master secret, шифрует его публичным ключом сервера и отправляет.
Обе стороны вычисляют общий сеансовый ключ (для симметричного шифрования, например, AES).

🔹 Начало защищённого обмена
Все данные шифруются выбранным алгоритмом (AES, ChaCha20).

🔹 SSL-сертификаты
Это цифровой документ, подтверждающий подлинность сервера. Содержит:
Доменное имя (или список доменов).
Публичный ключ сервера.
Цифровую подпись CA (например, DigiCert, Let's Encrypt).

🔹 Типы сертификатов
Тип	Проверка	Использование
DV (Domain Validated)	Проверка владения доменом (по email/DNS).	Базовый HTTPS (блоги, сайты).
OV (Organization Validated)	Проверка организации (документы).	Корпоративные сайты.
EV (Extended Validation)	Глубокая проверка юрлица.	Банки, госучреждения (раньше был зелёный бар в браузере).
Wildcard	Для поддоменов (*.example.com).	SaaS-платформы.
Multi-Domain (SAN)	Несколько доменов в одном сертификате.	CDN, облачные сервисы.
🔹 Как получить сертификат?
Let's Encrypt (бесплатно, автоматически):

bash
sudo apt install certbot  
certbot certonly --nginx -d example.com  
Платные CA (DigiCert, Sectigo):

Генерируете CSR (Certificate Signing Request).
Отправляете в CA, подтверждаете владение доменом.
Получаете сертификат.

🔹 Алгоритмы шифрования в TLS
Криптографические наборы (Cipher Suites)
Формат: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

ECDHE – алгоритм обмена ключами (Ephemeral Diffie-Hellman).
RSA – для аутентификации сервера.
AES-128-GCM – симметричное шифрование.
SHA256 – хеш для проверки целостности.

🔹 Рекомендуемые настройки (2024)
TLS 1.2/1.3 (TLS 1.0 и 1.1 устарели).
Алгоритмы:
ECDHE (P-256, X25519).
AES-128/256-GCM, ChaCha20-Poly1305.
SHA-256/384.

Пример для Nginx:

nginx
ssl_protocols TLSv1.2 TLSv1.3;  
ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-ECDSA-AES128-GCM-SHA256';  
ssl_prefer_server_ciphers on;  
🔹 Проверка и отладка SSL/TLS
OpenSSL:

bash
openssl s_client -connect example.com:443 -servername example.com | openssl x509 -text  
SSL Labs Test: https://www.ssllabs.com/ssltest/

Browser DevTools → Security Tab.

🔹 Ошибки и решения
"SSL Certificate Expired" – обновите сертификат.
"ERR_CERT_COMMON_NAME_INVALID" – проверьте SAN в сертификате.
"Weak Cipher Suite" – обновите настройки сервера.

🔹 Атаки на SSL/TLS
MITM (Man-in-the-Middle)
Как защититься: HSTS (HTTP Strict Transport Security).

POODLE (CVE-2014-3566)
Уязвимость в TLS 1.0 (использование CBC-режима).

Решение: Отключить TLS 1.0.

Heartbleed (CVE-2014-0160)
Утечка памяти в OpenSSL.

Решение: Обновить OpenSSL.

🔹 PKI (Public Key Infrastructure)
Это система для управления SSL-сертификатами, включающая:

Центры сертификации (CA) – выпускают сертификаты.
Реестры (CRL, OCSP) – отзывают сертификаты.
Клиенты – проверяют подписи (браузеры, ОС).