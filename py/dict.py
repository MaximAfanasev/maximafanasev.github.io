a = {}
print(a)

a2 = {'a':1,'b':2}
print(a2['a'])
print(a2)

a3 = [['a',1],['b',2]]
print(dict(a3))

print(a2.get('a'))

print(a2.keys())

print(a2.values())

print(a2.items())

print(len(a2))

a4 = {'c':3,'d':4}
print({**a2,**a4})

a4.update(a2)
print(a4)

del a2['a']
print(a2)

a5 = {'a':1,'b':2}
print(a5.pop('a'))

a5.clear()
print(a5)

a6 = {'a':1,'b':2}
print('a' in a6)

a7 = a6.copy()
print(a7)
