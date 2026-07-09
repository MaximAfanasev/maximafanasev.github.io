a = 7
print(a)

# 7

b = a
print(b) 

# 7

a = 1
z = 1
A = 1
Z = 1
a0 = 1
a_ = 1
print(a, z, A, Z, a0, a_) # 1 1 1 1 1 1
	
	


#0a = 1 Invalid decimal literal
a = 95
a = a - 3
print(a) # 92

a = 95
temp = a - 3
a = temp
print(a) # 92

a = 95
a -= 3
print(a) # 92

# + - * / // %

print(5) # 5
print(0) # 0

# print(05)
# leading zeros in decimal integer
# literals are not permitted;
# use an Oo prefix for octal integers

print(+123) # 123
print(-123) # -123
print(5+9) # 14
print(4-10) # -6
print(6*7) # 42
print(9/5) # 1.8
print(9//5) # 1

# print(5/0)
# ZeroDivisionError: division by zero

print(0b10) # 2
print(0o10) # 8
print(0x10) # 16

print(int(True)) # 1
print(int(False)) # 0
print(int(98.6)) # 98
print(int(1.0e4)) # 10000
print(int('99')) # 99
print(int('-23')) # -23
print(int('+12')) # 12
print(int(True + 2)) # 3
print(int(False + 5.0)) # 5

print(float(True)) # 1.0
print(float(False)) # 0.0
print(float(98)) # 98.0
print(float('1.5')) # 1.5
print(float('99')) # 99.0
	
print('a') # a
print("b") # 
print('''c''') # 

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

print('abc'.title()) # Abc

print('abc'.upper()) # ABC

print('ABC'.lower()) # abc

print('aBc'.swapcase()) #AbC

print('abc'.center(10)) #    abc

print('abc'.ljust(10)) #abc

print('abc'.rjust(10)) #       abc

print('abc'.replace('a', 'X')) # Xbc