print('a') # a
print("b") # b
print('''c''') # c

print(str(98.6)) # 98.6
print(str(1.0e4)) # 10000.0
print(str(True)) # True

print('\tabc') # 	abc
print('a\tbc') # a	bc
print('ab\tc') # ab	c

print('a' 'b') # ab
print('Na'*4 + ' Batman') # NaNaNaNa Batman
a = 'abcde'
print(a[0]) # a
print(a[2]) # c
print(a[-1]) # e
# print(a[5])
# IndexError: string index out of range

print(a)
c = a.replace('a', 'X') # Xbcde
print(c)

print(a.replace('a', 'X')) # Xbcde

print('abc'.replace('a', 'X')) # Xbc

print(len(a)) # 5

print(a.split()) # ['abcde']

print('a,b,c'.split()) # ['a,b,c']

print('a,b,c'.split(',')) # ['a', 'b', 'c']

print(','.join(['a','b','c'])) # a,b,c

print('abc'.startswith('a')) # True

print('abc'.endswith('c')) # True

print('abc'.find('a')) # 0
print('abc'.find('b')) # 1

print('aaa'.count('a')) # 3

print('123'.isalnum()) # True

print('abc...'.strip('.')) # abc

print('abc'.capitalize()) # Abc

print('abc'.upper()) # ABC

print('ABC'.lower()) # abc

print('aBc'.swapcase()) #AbC

print('abc'.center(10)) #    abc ???

print('abc'.ljust(10)) #abc

print('abc'.rjust(10)) #       abc

print('abc'.title()) # Abc