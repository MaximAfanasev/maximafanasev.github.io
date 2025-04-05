print('ab'[0])          # 'a'
print('abc'[:])         # 'abc'
print('abc'[1:])        # 'bc'
print('abc'[-2:])       # 'bc'
print('abcdefj'[::2])   # 'acej'

text = "Hello"
print(text[::-1])       # 'olleH'

print('a' + 'b')        # 'ab'
print('a' * 4)          # 'aaaa'












print(len('abc'))       # 3
print('A man.\n P')     # A man.
                        #  P
print(type('a'))        # <class 'str'>
print(type("b"))        # <class 'str'>
print(type('''c'''))    # <class 'str'>












multi_line = '''Это
многострочная
строка.'''
print(multi_line)

print("Он сказал: \"Привет!\"")
# Он сказал: "Привет!"

name = "Alice"
age = 25
print(f"Меня зовут {name}, мне {age} лет.")
# Меня зовут Alice, мне 25 лет.

a1 = 'aoiu'
print('a' in a1)        # True

















# cc efj iii ll rrr ssss

print('a'.center(3))               # ' a '

text = "Hello, world!"
print(text.count('l'))             # 3







print('a'.endswith('a'))           # True

print('{}'.format('str'))          # 'str'
print('{} {}'.format('Hello', 'world'))  
																	 # 'Hello world'

print(''.join(['a', 'b']))         # 'ab'
print(','.join(['a', 'b']))        # 'a,b'







print('abc'.isalpha())             # True
print('abc123'.isalpha())          # False

print('a'.islower())               # True

print('a'.isupper())               # False
print('A'.isupper())               # True






print('a'.ljust(5, '-'))           # 'a----'

text = "  abc  "
print(text.lstrip())               # 'abc  '






print('ab'.replace('a', 'c'))      # 'cb'

print('a'.rjust(5, '-'))           # '----a'

text = "  abc  "
print(text.rstrip())               # '  abc'








print('abc'.split())               # ['abc']

print('a'.startswith('a'))         # True

print(' abc '.strip())             # 'abc'


print(str(98.6))        # '98.6'
print(str(1.0e4))       # '10000.0'
print(str(True))        # 'True'