import cv2
import numpy as np
from matplotlib import pyplot as plt

def scan_chessboard(image_path):
    # Загрузка изображения
    img = cv2.imread(image_path)
    if img is None:
        print("Ошибка: изображение не загружено!")
        return
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # 1. Поиск шахматной доски (8x8 внутренних углов)
    board_size = (7, 7)  # 7x7 внутренних углов = 8x8 клеток
    found, corners = cv2.findChessboardCorners(gray, board_size, None)
    
    if not found:
        print("Шахматная доска не найдена!")
        return
    
    # Уточнение углов
    corners = cv2.cornerSubPix(gray, corners, (11, 11), (-1, -1), 
                              (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.001))
    
    # 2. Перспективное преобразование (выравнивание доски)
    # Координаты углов доски в "идеальном" виде
    square_size = 100  # пикселей на клетку
    board_width = board_size[0] * square_size
    board_height = board_size[1] * square_size
    dst_points = np.array([
        [0, 0],
        [board_width, 0],
        [board_width, board_height],
        [0, board_height]
    ], dtype=np.float32)
    
    # Углы доски на изображении (левый верхний, правый верхний, правый нижний, левый нижний)
    src_points = np.array([corners[0][0], corners[board_size[0]-1][0], 
                          corners[-1][0], corners[-board_size[0]][0]], dtype=np.float32)
    
    # Матрица преобразования
    M = cv2.getPerspectiveTransform(src_points, dst_points)
    warped = cv2.warpPerspective(img, M, (board_width, board_height))
    
    # 3. Разбиение на клетки и анализ
    fen = ""
    piece_symbols = {'p': '♟', 'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚'}
    
    for row in range(8):
        empty = 0
        for col in range(8):
            # Вырезаем клетку
            x1, y1 = col * square_size, row * square_size
            x2, y2 = x1 + square_size, y1 + square_size
            square = warped[y1:y2, x1:x2]
            
            # Упрощённое распознавание фигур (по среднему цвету)
            mean_color = np.mean(square, axis=(0, 1))
            
            # Пустая клетка? (зелёный/коричневый - зависит от доски)
            if (mean_color[1] > 100 and mean_color[0] < 100) or (mean_color[2] < 100):
                empty += 1
            else:
                if empty > 0:
                    fen += str(empty)
                    empty = 0
                # Определяем тип фигуры (здесь - заглушка)
                fen += 'P' if mean_color[0] > 150 else 'p'  # Белая или чёрная пешка
        if empty > 0:
            fen += str(empty)
        if row < 7:
            fen += '/'
    
    # 4. Вывод результатов
    plt.figure(figsize=(12, 6))
    plt.subplot(1, 2, 1)
    plt.title("Исходное изображение")
    plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    plt.axis('off')
    
    plt.subplot(1, 2, 2)
    plt.title("Выровненная доска")
    plt.imshow(cv2.cvtColor(warped, cv2.COLOR_BGR2RGB))
    plt.axis('off')
    
    plt.show()
    
    print("FEN:", fen)
    return fen

# Пример использования
scan_chessboard("chessboard.jpg")
