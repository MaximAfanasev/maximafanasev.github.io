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
