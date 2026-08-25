# страница проверки знаний и тем которые знаешь хорошо
# определить уровень 
a = 7
print(a) 
# 7

b = a
print(b) 
# 7

# a z A Z a0 a_
# 0a = 1 Invalid decimal literal

a = 95
a = a - 3
print(a) 
# 92

a = 95
temp = a - 3
a = temp
print(a) 
# 92

a = 95
a -= 3
print(a) 
# 92

#bbb c d ff g i l t ss
#bool
#bytearray
#bytes
#complex
#dict
#float
#frozenset
#generator
#int
#list
#tuple
#set
#str



#comment
seconds_per_day = 86400 
# 60 sec/min * 60 min/hr * 24 hr/day




print('aaa#aaa') 
# aaa#aaa




a = True
if a:
    print(True) 
    # True
else:
    print(False)




a = True
b = True
if a:
    if b:
        print(True) 
        # True
elif b: print(False)




# < <= > >= != ==





print(5 < 7 or 7 < 10) 
# True
print(7 < 7 and 7 > 10) 
# False
print(5 < 7 and not 5 > 10) 
# True




count = 1
while count <= 5:
    print(count)
    count += 1 
    # 1 2 3 4 5




count = 1
while count <= 5:
    print(count) 
    # 1 2 3 lala 4 5 ended
    count += 1
    if count == 4:
        print('lala')
else: print('ended')



for x in range(0,3):
    print(x) 
    # 0 1 2




for x in range(2, -1, -1):
    print(x) 
    # 2 1 0


a = (x for x in range(1, 6))
print(type(a)) 
# <class 'generator'>

# + - * / // %


print(5) 
# 5
print(0) 
# 0


# print(05)
# leading zeros in decimal integer
# literals are not permitted
# use an Oo prefix for octal integers


print(+123) 
# 123
print(-123) 
# -123
print(5+9) 
# 14
print(4-10) 
# -6
print(6*7) 
# 42
print(9/5) 
# 1.8
print(9//5) 
# 1


# print(5/0)
# ZeroDivisionError: division by zero


print(0b10) 
# 2
print(0o10) 
# 8
print(0x10) 
# 16


print(int(True)) 
# 1
print(int(False)) 
# 0
print(int(98.6)) 
# 98
print(int(1.0e4)) 
# 10000
print(int('99')) 
# 99
print(int('-23')) 
# -23
print(int('+12')) 
# 12
print(int(True + 2)) 
# 3
print(int(False + 5.0)) 
# 5


print(float(True)) 
# 1.0
print(float(False)) 
# 0.0
print(float(98)) 
# 98.0
print(float('1.5')) 
# 1.5
print(float('99')) 
# 99.0


		
		
############################




print('a') 
# a
print("b") 
# b
print('''c''') 
# c



print(str(98.6)) 
# 98.6
print(str(1.0e4)) 
# 10000.0
print(str(True)) 
# True



print('\tabc') 
# 	abc
print('a\tbc') 
# a	bc
print('ab\tc') 
# ab	c



print('a' 'b') 
# ab
print('Na'*4 + ' Batman') 
# NaNaNaNa Batman
a = 'abcde'
print(a[0]) 
# a
print(a[2]) 
# c
print(a[-1]) 
# e

# print(a[5])
# IndexError: string index out of range



print(a)
c = a.replace('a', 'X')
print(c)
# Xbcde



print(a.replace('a', 'X')) 
# Xbcde
print('abc'.replace('a', 'X')) 
# Xbc



print(len(a)) 
# 5



print(a.split()) 
# ['abcde']
print('a,b,c'.split()) 
# ['a,b,c']
print('a,b,c'.split(',')) 
# ['a', 'b', 'c']

d = '1/2/4'
e = d.split('/')
print(e)
# ['1', '2', '4']

g = 'a/b//c/d///e'
print(g.split('/'))
# ['a', 'b', '', 'c', 'd', '', '', 'e']

print(g.split('//'))
# ['a/b', 'c/d', '/e']



print(','.join(['a','b','c'])) 
# a,b,c



print('abc'.startswith('a')) 
# True

print('abc'.endswith('c')) 
# True



print('abc'.find('a')) 
# 0
print('abc'.find('b')) 
# 1



print('aaa'.count('a')) 
# 3



print('123'.isalnum()) 
# True



print('abc...'.strip('.')) 
# abc



print('abc'.capitalize()) 
# Abc



print('abc'.upper()) 
# ABC



print('ABC'.lower()) 
# abc



print('aBc'.swapcase()) 
#AbC



print('abc'.center(10)) 
#    abc ???



print('abc'.ljust(10)) 
#abc



print('abc'.rjust(10)) 
#       abc



print('abc'.title()) 
# Abc



a = 'abc' + \
    'dbe'
print(a) 
#  abcdbe



a = 'abc'
for x in a:
    print(x) 
    # a b c
		
		
############################
		
		
		
		a = []
print(a)
# []




b = list()
print(b)
# []




c = ('a', 'b', 'c')
print(list(c))
# ['a', 'b', 'c']




a = ['a', 'b', 'c']
print(a[0]) 
# a
print(a[1]) 
# b
print(a[2]) 
# c





print(a[-1]) 
# c
print(a[-2]) 
# b
print(a[-3]) 
# a

#print(a[-4]) #IndexError: list index out of range




a = ['a', 'b']
b = ['c', 'd']
c = ['e', 'f']
j = [a,b,c]
print(j) 
# [['a', 'b'], ['c', 'd'], ['e', 'f']]
print(j[0]) 
# ['a', 'b']
print(j[0][1]) 
# b




a = ['a', 'b', 'c']
a[0] = 'd'
print(a) 
# ['d', 'b', 'c']




a = ['a', 'b', 'c']
print(a[0:2]) 
# ['a', 'b'] 0 1 2(не включена)
print(a[0:0]) 
# []
print(a[0:1]) 
# ['a']
print(a[0:3]) 
# ['a', 'b', 'c']
print(a[0:4]) 
# ['a', 'b', 'c']
print(a[0:99]) 
# ['a', 'b', 'c']

#print(a[::0]) 
# # slice step cannot be zero




a = ['a', 'b', 'c']
print(a[::1]) 
# ['a', 'b', 'c']
print(a[::2]) 
# ['a', 'c']
print(a[::3]) 
# ['a']
print(a[::99]) 
# ['a']




a = ['a', 'b', 'c']
print(a[::-1]) 
# ['c', 'b', 'a']
print(a[::-2]) 
# ['c', 'a']
print(a[::-3]) 
# ['c']
print(a[::-99]) 
# ['c']




a = ['a', 'b', 'c']
a.append('d')
print(a) 
# ['a', 'b', 'c', 'd']




a = ['a', 'b']
c = ['d', 'e']
a.extend(c)
print(a) 
# ['a', 'b', 'd', 'e']




a = ['a', 'b']
c = ['d', 'e']
a += c
print(a) 
# ['a', 'b', 'd', 'e']




a = ['a', 'b']
c = ['d', 'e']
a.append(c)
print(a) 
# ['a', 'b', ['d', 'e']]




a = ['a', 'b', 'c']
a.insert(2, 'd')
print(a) 
# ['a', 'b', 'd', 'c']




a = ['a', 'b', 'c']
del a[0]
print(a) 
# ['b', 'c']




a = ['a', 'b', 'c']
del a[-1]
print(a) 
#['a', 'b']




a = ['a', 'b', 'c']
a.remove('b')
print(a) 
# ['a', 'c']




a = ['a', 'b', 'c']
a.pop()
print(a) 
# ['a', 'b']
a.pop(0)
print(a) 
# ['b']




a = ['a', 'b', 'c']
print(a.index('a')) 
# 0
print('a' in a) 
# True




a = ['a', 'b', 'a', 'a']
print(a.count('a')) 
# 3
print(a.count('c')) 
# 0




a = ['a', 'b', 'c']
print(', '.join(a)) 
# a, b, c




a = ['b', 'a', 'c']
print(sorted(a)) 
# ['a', 'b', 'c'] копия списка
print(a) 
# ['b', 'a', 'c'] оригинал не изменился
a.sort()
print(a) 
# ['a', 'b', 'c'] перемешали оригинал
a.sort(reverse=True)
print(a)




a = ['a', 'b', 'c']
print(len(a)) 
# 3




a = [1, 2, 3]
b = a
print(b) 
# [1, 2, 3]
a[0] = 'srpr mf'
print(a) 
# ['srpr mf' 2, 3]
print(b) 
# ['srpr mf' 2, 3]
b[0] = 4
print(b) 
# [4, 2, 3]
print(a) 
# [4, 2, 3]




a = [1, 2, 3]
b = a.copy()
print(b) 
# [1, 2, 3]




a = [1, 2, 3]
c = list(a) 
# [1, 2, 3]




a = [1, 2, 3]
d = a[:] 
# [1, 2, 3]




a[0] = 'a'
print(a) 
# ['a', 2, 3]
print(b) 
# [1, 2, 3]
print(c) 
# [1, 2, 3]
print(d) 
# [1, 2, 3]




a = ['a', 'b', 'c']
b = ['a', 'c', 'b']
c = ['c', 'b', 'a']
d = a,b,c
print(d) 
# (['a', 'b', 'c'], ['a', 'c', 'b'], ['c', 'b', 'a'])




a = ['a', 'b', 'c']
b = ['a', 'c', 'b']
c = ['c', 'b', 'a']
d = [a,b,c]
print(d) 
# [['a', 'b', 'c'], ['a', 'c', 'b'], ['c', 'b', 'a']]




a = ['a', 'b', 'c']
b = ['a', 'c', 'b']
c = ['c', 'b', 'a']
d = {'a': a, 'b': b, 'c': c}
print(d) 
# {'a': ['a', 'b', 'c'], 'b': ['a', 'c', 'b'], 'c': ['c', 'b', 'a']}



a = ['a', 'b', 'c']
for x in a:
    print(x) 
    # a b c



a = ['a', 'b', 'c']
b = ['c', 'd', 'e']
c = ['d', 'e', 'f']
for x,y,z in zip(a,b,c):
    print(x,y,z) 
    # a c d
    # b d e
    # c e f




a = [x for x in range(0,6)]
print(a) 
# [0, 1, 2, 3, 4, 5]




a = [x for x in range(1,6) if x % 2==1]
print(a) 
# [1, 3, 5]




a = range(1,4)
b = range(1,3)
c = [(x, y) for x in a for y in b]
print(c) 
# [(1, 1), (1, 2), (2, 1), (2, 2), (3, 1), (3, 2)]




a = {x for x in range(1,6) if x % 3 == 1}
print(a) 
# {1, 4}





a = (x for x in range(1, 6))
print(list(a)) 
# [1, 2, 3, 4, 5]







a = ()
print(a) 
# ()




a = ('a')
print(a) 
# a




a = 'a',
print(a) 
# ('a',)




a = ('a',)
print(a) 
# ('a',)




a = ('a','b')
print(a) 
# ('a', 'b')




a = ('a', 'b', 'c')
d, e, f = a
print(d) 
# a
print(e) 
# b
print(f) 
# c




a = 'a'
c = 'c'
a, c = c, a
print(a) 
# c
print(c) 
# a




a = ['a', 'b', 'c']
print(tuple(a)) 
# ('a', 'b', c')







##################################





a = {}
print(a) 
# {}




a = {
    'a': 1,
    'b': 2
    }
print(a) 
# {'a': 1, 'b': 2}




a = {
    1: 'a',
    2: 'b'
    }
print(a) 
# {1: 'a', 2: 'b'}




a = [['a', 'b'], ['c', 'd']]
print(dict(a)) 
# {'a': 'b', 'c': 'd'}




a = [('a', 'b'), ('c', 'd')]
print(dict(a)) 
# {'a': 'b', 'c': 'd'}




a = ['ab', 'cd']
print(dict(a)) 
# {'a': 'b', 'c': 'd'}




a = ('ab', 'cd')
print(dict(a)) 
# {'a': 'b', 'c': 'd'}




a = {'a': 1, 'b': 2}
a['a'] = 3
print(a) 
# {'a': 3, 'b': 2}
a['a'] = 4
print(a) 
# {'a': 4, 'b': 2}




a = {'a': 1, 'b': 2}
b = {'c': 3, 'd': 4}
a.update(b)
print(a) 
# {'a': 1, 'b': 2, 'c': 3, 'd': 4}




a = {'a': 1, 'b': 2}
b = {'a': 4, 'b': 2}
a.update(b)
print(a) 
# {'a': 4, 'b': 2}




a = {'a': 1, 'b':2}
del a['a']
print(a) 
# {'b': 2}




a = {'a': 1, 'b': 2}
a.clear()
print(a) 
# {}




a = {'a': 1, 'b': 2}
print('a' in a) 
# True




a = {'a': 1, 'b': 2}
print(a['a']) 
# 1

# print(a['c']) # KeyError




a = {'a': 1, 'b': 2}
print(a.get('a')) 
# 1
print(a.get('c', 'nothing')) 
# nothing
print(a.get('c')) 
# None




a = {'a': 1, 'b': 2}
print(a.keys()) 
# dict_keys(['a', 'b'])




a = {'a': 1, 'b': 2}
print(a.values()) 
# dict_values([1, 2])




a = {'a': 1, 'b': 2}
print(a.items()) # dict_items([('a', 1), ('b', 2)])




a = {'a': 1, 'b': 2}
a['c'] = 3
print(a) 
# {'a': 1, 'b': 2, 'c': 3}




a = {'a': 1, 'b': 2}
b = a.copy()
print(b) 
# {'a': 1, 'b': 2}
b['c'] = 3
print(b) 
# {'a': 1, 'b': 2, 'c': 3}
print(a) 
# {'a': 1, 'b': 2}

a = set()
print(a) 
# set()




a = {0, 2, 4, 6, 8}
print(a) 
# {0, 2, 4, 6, 8}




a = ('aaaaaa')
print(set(a)) 
# {'a'}
b = ('aabbcc')
print(set(b)) 
# {'b', 'a', 'c'}




a = ['a', 'b', 'c']
print(set(a)) 
# {'a', 'b', 'c'}




a = ('a', 'b', 'c')
print(set(a)) 
# {'b', 'a', 'c'}




a = {'a': 1, 'b': 2, 'c': 3}
print(set(a)) 
# {'a', 'c', 'b'}




a = {'a': 'aa', 'b': 'bb', 'c': 'cc'}
for name, contents in a.items():
    if 'a' in contents:
        print(name) 
        # a
        print(contents) 
        # aa



a = {'a': 'aa', 'b': 'ab', 'c': 'bb'}
for name, contents in a.items():
    if 'a' in contents and not ('b' in contents or 'd'
        in contents):
        print(name) 
        # a




a = {'a': {'aa', 'ab'}, 'b': {'ab', 'bb'}}
for name, contents in a.items():
    if contents & { 'aa' }:
        print(name) 
        # a




a = { 1, 2 }
b = { 2, 3 }
print(a & b) 
# {2}




a = { 1, 2 }
b = { 2, 3 }
print(a.intersection(b)) 
# {2}



a = { 1, 2 }
b = { 2, 3 }
print(a|b) 
# {1,2,3}



a = { 1, 2 }
b = { 2, 3 }
print(a-b) 
# {1}



a = { 1, 2 }
b = { 2, 3 }
print(a^b) 
# {1,3}
print(a.symmetric_difference(b)) 
# {1,3}



a = { 1, 2 }
b = { 2, 3 }
print(a<=b) 
# False
print(a<=a) 
# True
print(a.issubset(a))




a = {'a': 1, 'b': 2, 'c': 3}
for x in a:
    print(x) 
    # a b c


a = {'a': 1, 'b': 2, 'c': 3}
for x in a.values():
    print(x) 
    # 1 2 3




a = {'a': 1, 'b': 2, 'c': 3}
for x in a.items():
    print(x) 
    # ('a', 1) ('b', 2) ('c', 3)



b = 'letters'
a = {x: b.count(x) for x in b}
print(a) 
# {'l': 1, 'e': 2, 't': 2, 'r': 1, 's': 1}







##################################






		
		def make_a_sound():
    print('quack')
make_a_sound() 
# quack




def a():
    return True

if a():
    print('quack') 
    # quack




def a(b):
    return b + '' + b
print(a('lala')) 
# lalalalala




def a(b):
    if b == 'red':
        print('red')
    elif b == 'green':
        print('green')
    else: print('ololo')
a('red') 
# red
a('aaa') 
# ololo




def a():
    pass
print(a()) 
# None




def a():
    if None: print('None')
    else: print('Not None')
a() 
# Not None




def a(x,y,z):
    return {'X': x, 'Y': y, 'Z': z}
print(a('la', 'va', 'nda'))
# {'X': 'la', 'Y': 'va', 'Z': 'nda'}




def a(x,y,z):
    return {'X': x, 'Y': y, 'Z': z}
print(a(x='x', y='y', z='z'))
# {'X': 'x', 'Y': 'y', 'Z': 'z'}
print(a(x='A', y='B', z='C'))
# {'X': 'A', 'Y': 'B', 'Z': 'C'}




def a(x,y,z='z'):
    return {'X': x, 'Y': y, 'Z': z}
print(a(x='x', y='y'))
# {'X': 'x', 'Y': 'y', 'Z': 'z'}
print(a(x='x', y='y', z='d'))
# {'X': 'x', 'Y': 'y', 'Z': 'd'}




def x(a, b=[]):
    b.append(a)
    print(b)
x('a') 
# ['a']
x('b') 
# ['a', 'b']




def x(a):
    b = []
    b.append(a)
    print(b)
    return b
x('a') 
# ['a']
x('b') 
# ['b']




def x(a, b=None):
    if b == None:
        b = []
    b.append(a)
    print(b)
    return b
x('a') 
# ['a']




def x(*args):
    print(args)
x(a) 
# (<function a at 0x10caca560>,)
x('a', 1, 2) 
# ('a', 1, 2)




def x(**kwargs):
    print(kwargs)
x(a='a', b='b') 
# {'a': 'a', 'b': 'b'}




def x(a):
    '''Documentation'''
    print(a)
x('b') 
# b




def x(a, b):
    for x in a:
        print(b(x))
def y(a):
    return a.capitalize() + '!'
x(['a', 'b', 'c'],y)
# A!
# B!
# C!




def x(a, b):
    for x in a:
        print(b(x))
x(['a', 'b','c'], lambda x: x.capitalize() + '!')
# A!
# B!
# C!