import pyautogui
import time

# Задержка перед началом, чтобы вы успели подготовиться
time.sleep(5)

# Получаем текущие координаты мыши
x, y = pyautogui.position()

# Двигаем мышь влево и вправо 2 раза
for _ in range(2):
    pyautogui.moveTo(x - 100, y, duration=0.5)  # Двигаем влево
    pyautogui.moveTo(x + 100, y, duration=0.5)  # Двигаем вправо 
