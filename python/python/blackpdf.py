import fitz  # PyMuPDF

doc = fitz.open("1.pdf")

for page in doc:
    # Заливаем страницу чёрным
    page.draw_rect(page.rect, color=(0, 0, 0), fill=(0, 0, 0), overlay=False)
    
    # Копируем текст и рисуем его белым
    for block in page.get_text("blocks"):
        if block[6]:  # Если это текст
            page.insert_text((block[0], block[1]), block[6], color=(1, 1, 1))

doc.save("dark_mode.pdf")
