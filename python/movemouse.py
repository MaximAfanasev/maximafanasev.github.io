import pyautogui
import time

time.sleep(5)
pyautogui.click()

distance = 200
step = 5

while distance > 0:
    # Движение вправо
    pyautogui.dragRel(distance, 0, duration=0.2, button='left')
    distance -= step
    
    # Движение вниз
    if distance > 0:
        pyautogui.dragRel(0, distance, duration=0.2, button='left')
    
    # Движение влево
    if distance > 0:
        pyautogui.dragRel(-distance, 0, duration=0.2, button='left')
    distance -= step
    
    # Движение вверх
    if distance > 0:
        pyautogui.dragRel(0, -distance, duration=0.2, button='left')
    distance -= step
