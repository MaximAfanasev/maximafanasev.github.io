def a():
    print('a')
a()

def b(a):
    return print(a + ' ' + a)
b('a')

c = None
if c:
    print('a')

def d(a,b):
    return print({'x': a, 'y': b})
d('c','d')

def e():
    print(42)
def f():
    e()
f()

def j(a,b):
    for x in a:
        print(b(x))
a = ['a','b','c']
def l(x):
    return x.capitalize() + '!'
j(a,l)

j(a, lambda x: x.capitalize() + '!')
