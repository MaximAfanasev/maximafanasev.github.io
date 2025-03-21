# Выводит пустую строку (функция print без аргументов)
print()

# Выводит первый символ строки 'ab' (индексация начинается с 0)
print('ab'[0])  # 'a'

# Выводит всю строку 'abc' (срез [:] возвращает всю строку)
print('abc'[:])  # 'abc'

# Выводит подстроку, начиная с индекса 1 до конца строки
print('abc'[1:])  # 'bc'

# Выводит подстроку из последних двух символов
print('abc'[-2:])  # 'bc'

# Выводит каждый второй символ строки, начиная с первого
print('abcdefj'[::2])  # 'acej'

# Реверс строки
text = "Hello"
print(text[::-1])  # 'olleH'

# Выводит длину строки 'abc'
print(len('abc'))  # 3

# Выводит строку с переносом на новую строку после 'A man.'
print('A man.\n P')  # A man.
                     #  P

# Выводит тип данных 'a' — это строка (тип <class 'str'>)
print(type('a'))  # <class 'str'>

# Выводит тип данных "b" — это также строка (тип <class 'str'>)
print(type("b"))  # <class 'str'>

# Выводит тип данных '''c''' — это тоже строка (тип <class 'str'>)
print(type('''c'''))  # <class 'str'>

# Преобразует число 98.6 в строку и выводит её
print(str(98.6))  # '98.6'

# Преобразует число 1.0e4 (10000.0) в строку и выводит её
print(str(1.0e4))  # '10000.0'

# Преобразует логическое значение True в строку и выводит её
print(str(True))  # 'True'

# Конкатенирует строки 'a' и 'b' и выводит результат
print('a' + 'b')  # 'ab'

# Повторяет строку 'a' 4 раза и выводит результат
print('a' * 4)  # 'aaaa'

# Многострочная строка
multi_line = '''Это
многострочная
строка.'''
print(multi_line)

# Экранирование кавычек
print("Он сказал: \"Привет!\"")
# Он сказал: "Привет!"

# Форматирование строки с использованием f-строк
name = "Alice"
age = 25
print(f"Меня зовут {name}, мне {age} лет.")
# Меня зовут Alice, мне 25 лет.

# Проверка наличия символа в строке
a1 = 'aoiu'
print('a' in a1)  # True, так как 'a' есть в строке 'aoiu'



# Центрирует строку 'a' в строке длиной 3, добавляя пробелы по бокам
print('a'.center(3))  # ' a '

# Подсчет количества вхождений символа в строку
text = "Hello, world!"
print(text.count('l'))  # 3

# Проверяет, заканчивается ли строка 'a' на символ 'a'
print('a'.endswith('a'))  # True

# Форматирование строки с использованием метода format
print('{}'.format('str'))  # 'str'
print('{} {}'.format('Hello', 'world'))  # 'Hello world'

# Объединяет список строк ['a', 'b'] в одну строку без разделителя
print(''.join(['a', 'b']))  # 'ab'

# Объединяет список строк ['a', 'b'] в одну строку с разделителем ','
print(','.join(['a', 'b']))  # 'a,b'

# Проверяет, состоит ли строка только из букв
print('abc'.isalpha())  # True
print('abc123'.isalpha())  # False

# Проверяет, является ли символ строчным
print('a'.islower())  # True

# Проверяет, является ли символ заглавным
print('a'.isupper())  # False
print('A'.isupper())  # True

# Выравнивает строку 'a' по левому краю, добавляя символы '-' до длины 5
print('a'.ljust(5, '-'))  # 'a----'

# Удаляет пробелы слева от строки
text = "  abc  "
print(text.lstrip())  # 'abc  '

# Заменяет символ 'a' на 'c' в строке 'ab'
print('ab'.replace('a', 'c'))  # 'cb'

# Выравнивает строку 'a' по правому краю, добавляя символы '-' до длины 5
print('a'.rjust(5, '-'))  # '----a'

# Удаляет пробелы справа от строки
text = "  abc  "
print(text.rstrip())  # '  abc'

# Разделяет строку 'abc' по пробелам (но пробелов нет, поэтому возвращает список с одной строкой)
print('abc'.split())  # ['abc']

# Проверяет, начинается ли строка 'a' с символа 'a'
print('a'.startswith('a'))  # True

# Удаляет пробелы в начале и конце строки ' abc '
print(' abc '.strip())  # 'abc'