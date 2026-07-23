a = ()
print(a) # ()

a = ('a')
print(a) # a

a = 'a',
print(a) # ('a',)

a = ('a',)
print(a) # ('a',)

a = ('a','b')
print(a) # ('a', 'b')



################ Распаковка

a = ('a', 'b', 'c')
d, e, f = a

print(d) # a
print(e) # b
print(f) # c


################ Перестановка

a = 'a'
c = 'c'
a, c = c, a
print(a) # c
print(c) # a



#################


a = ['a', 'b', 'c']
print(tuple(a)) # ('a', 'b', c')


















