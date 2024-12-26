print(type(True))
print(type(1))
print(type(1.1))
print(type(3j))
print(type('a'))
print(type([1,2]))
print(type((1,2)))
print(type(b'ab\xff'))
print(type(bytearray([1,2])))
print(type(set([1,2])))
print(type(frozenset([1,2])))
print(type({'a':'1'}))

import tkinter as tk
from tkinter import messagebox

class QuizGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Игра: Выбор ответа")

        self.question = "Какой тип данных возвращает функция type() для значения True?"
        self.options = [
            ("<class 'str'>", False),
            ("<class 'int'>", False),
            ("<class 'bool'>", True),
            ("<class 'list'>", False),
        ]

        self.create_widgets()

    def create_widgets(self):
        question_label = tk.Label(self.root, text=self.question, wraplength=300)
        question_label.pack(pady=20)

        for option_text, is_correct in self.options:
            button = tk.Button(self.root, text=option_text, command=lambda correct=is_correct: self.check_answer(correct, button))
            button.pack(pady=5)

    def check_answer(self, is_correct, button):
        if is_correct:
            button.config(bg="green")
            messagebox.showinfo("Правильно!", "Вы выбрали правильный ответ!")
        else:
            button.config(bg="red")
            messagebox.showerror("Неправильно", "Попробуйте еще раз!")

if __name__ == "__main__":
    root = tk.Tk()
    game = QuizGame(root)
    root.mainloop()
