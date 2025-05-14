a = 7
print(a)
#7

b = a
print(b)
#7

print(4 + \
      3)
#7

c = True
if c:
    print('True')
#True

if c:
    if False:
        print('False')
#

d = 7
print(d==7)
#True

print((5<d) and (d<10))
#True

e = 1
while e<=5:
    print(e)
    e+=1

for x in range(1,5):
    print(x)

#x = input()
#s -> s

print(type(True))
print(type(bytearray(b'hh')))
print(type(b'aaaa'))
print(type(3j))
print(type({}))
print(type(1.0))
print(type(frozenset[1,2]))
#<class 'types.GenericAlias'>
#почему не frozenset??
print(type(x for x in range(1,2)))
print(type(4))
print(type([]))
print(type((1,2)))
print(type(set[1,2]))
print(type('a'))

#a z A Z 0 9 _
#0a - NO

print(abs(-5))
#5
print(2.5.as_integer_ratio())
#(5, 2)
print(chr(65))
#A
print(divmod(10, 3))
#(3, 1)
print(float(True))
#1.0
print(float(1))
#1.0
print(float('99'))
#99.0
print(float(98.6))
#98.6
print(int(True))
#1
print(int(False))
#0
print(int(1.0e4))
#10000
print(int(98.6))
#98
print(int('99'))
#99
print(int('+12'))
#12
print(int('10', 2))
#2
print(5.0.is_integer())
#True
print(ord('A'))
#65
print(pow(2, 3))
#8
print(round(3.141592653))
#3

print(1+1)
#2
print(+123)
#123
print(-123)
#-123
print(1-1)
#0
print(4-10)
#-6
print(1*2)
#2
print(7/2)
#3.5
print(7//2)
#3
print(9//5)
#1
print(7%3)
#1
print(9%5)
#4
print(2**3)
#8
print(4+7.0)
#11.0

print(0b10)
#2
print(0o10)
#8
print(0x10)
#16

print(7==5)
#False
print(5==5)
#True
print(5!=3)
#True
print(5>3)
#True
print(5<3)
#False
print(5>=5)
#True
print(5<=3)
#False

print(5&3)
#1
print(5|3)
#7
print(5^3)
#6
print(~5)
#-6
print(5<<1)
#10
print(5>>1)
#2

a = 10
print(a.bit_length())
#4
b = 3 + 4j
print(b.conjugate())
#(3 - 4j)
print(float.fromhex('0x1.ffffp10'))
#2047.984375
print(b.imag)
#4.0
print(b.real)
#3.0

print(1, 'a', 'b')
#1 a b

#iterator
#''
#''

#""
#''

#''''''
#''

print(len('abc'))
#3
print('A man.\n P')
# A man.
#   P
print(type('a'))
#<class 'str'>
print(type("b"))
#<class 'str'>
print(type('''c'''))
#<class 'str'>
print('a' + 'b')
#ab
print('a' * 4)
#aaaa

m = '''1
2
3'''
print(m)
#1
#2
#3

print('ab'[0])
#a
print('abc'[1:])
#bc
print('abc'[1:2])
#b
print('abc'[-2:])
#bc
print('abcdefj'[::2])
#acej

b = 'Hello'
print(b[::-1])
#olleH

print('Он сказал: \"Привет\"')
#Он сказал: "Привет"
print('abc'.capitalize())
#Abc
print('a'.center(3))
# a
c = 'Hello, world'
print(c.count('l'))
#3
print('a'.endswith('a'))
#True
print('abc'.find('b'))
#1
print('{}'.format('str'))
#str
print('{}{}'.format('Hello', 'world'))
#Helloworld

d = 'Alice'
e = 25
print(f'ааа {d}, bbb {e}')
#aaa Alice, bbb 25

print(''.join(['a', 'b']))
#ab
print(','.join(['a', 'b']))
#a,b

f = 'aoiu'
print('a' in f)
#True

print('abc'.isalpha())
#True
print('abc123'.isalnum())
#True
print('123'.isdecimal())
#True
print('a'.islower())
#True
print('  '.isspace())
#True
print('Abc Cde'.istitle())
#True
print('A'.isupper())
#True
print('a'.ljust(5, '-'))
#a----
print(' abc '.lstrip())
#abc__
print('ab'.replace('a', 'c'))
#cb
print('ab'.rfind('a'))
#0
print('a'.rjust(5, '-'))
#----a
print(' abc '.rstrip())
#_abc
print('a'.startswith('a'))
#True
f = 'a b c'
print(f.split())
#['a', 'b', 'c']
g = 'aBCDe'
print(g.swapcase())
#AbcdE
print(str(98.6))
#98.6
print(str(1.0e4))
#10000.0
print(str(True))
#True
print('abc def hij'.title())
#Abc Def Hij
print('abc'.upper())
#ABC
      





















