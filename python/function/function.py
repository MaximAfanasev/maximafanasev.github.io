def make_a_sound():
    print('quack')
make_a_sound() # quack
###########################
def a():
    return True

if a():
    print('quack') # quack
###########################
def a(b):
    return b + '' + b
print(a('lala')) # lalalalala
###########################
def a(b):
    if b == 'red':
        print('red')
    elif b == 'green':
        print('green')
    else: print('ololo')
a('red') # red
a('aaa') # ololo
###########################
def a():
    pass
print(a()) # None
###########################
def a():
    if None: print('None')
    else: print('Not None')
a() # Not None
###########################
def a(x,y,z):
    return {'X': x, 'Y': y, 'Z': z}
print(a('la', 'va', 'nda'))
# {'X': 'la', 'Y': 'va', 'Z': 'nda'}
###########################
def a(x,y,z):
    return {'X': x, 'Y': y, 'Z': z}
print(a(x='x', y='y', z='z'))
# {'X': 'x', 'Y': 'y', 'Z': 'z'}
print(a(x='A', y='B', z='C'))
# {'X': 'A', 'Y': 'B', 'Z': 'C'}
###########################
def a(x,y,z='z'):
    return {'X': x, 'Y': y, 'Z': z}
print(a(x='x', y='y'))
# {'X': 'x', 'Y': 'y', 'Z': 'z'}
print(a(x='x', y='y', z='d'))
# {'X': 'x', 'Y': 'y', 'Z': 'd'}
###########################
def x(a, b=[]):
    b.append(a)
    print(b)
x('a') # ['a']
x('b') # ['a', 'b']
###########################
def x(a):
    b = []
    b.append(a)
    print(b)
    return b
x('a') # ['a']
x('b') # ['b']
###########################
def x(a, b=None):
    if b == None:
        b = []
    b.append(a)
    print(b)
    return b
x('a') # ['a']
###########################
def x(*args):
    print(args)
x(a) # (<function a at 0x10caca560>,)
x('a', 1, 2) # ('a', 1, 2)
###########################
def x(**kwargs):
    print(kwargs)
x(a='a', b='b') # {'a': 'a', 'b': 'b'}
###########################
def x(a):
    '''Documentation'''
    print(a)
x('b') # b
###########################
def x(a, b):
    for x in a:
        print(b(x))
def y(a):
    return a.capitalize() + '!'
x(['a', 'b', 'c'],y)
# A!
# B!
# C!
###########################
def x(a, b):
    for x in a:
        print(b(x))
x(['a', 'b','c'], lambda x: x.capitalize() + '!')
# A!
# B!
# C!
###########################
