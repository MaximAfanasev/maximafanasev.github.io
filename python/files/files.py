a = open(name, mode)
a = open('99.txt')

# name - имя файла;
#mode — r означает чтение w означает запись
# t (или ничего) означает, что файл текстовый b означает, что файл бинарный


a = open('99.txt', 'wt')
a.write('lalal')
a.close()

# в той же папке должен быть файл 1.txt
# откроет добавит строку lalal закроет и сохранит


b = 'tratata'
a = open('99.txt', 'wt')
print(b, file=a)
a.close()

#откроет запишет строку тратата и сохранит
# функция print() добавляет пробел после каждого аргумента и символ новой строки в конце

b = 'tratata'
a = open('99.txt', 'wt')
print(b, file=a)
print(b, file=a)
a.close()

# tratata
# tratata

b = 'tratata'
a = open('99.txt', 'wt')
print(b, file=a, sep='', end='')
print(b, file=a, sep='', end='')
a.close()

# tratatatratata