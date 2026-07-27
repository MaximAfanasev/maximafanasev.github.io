a = set()
print(a) # set()

################################

a = {0, 2, 4, 6, 8}
print(a) # {0, 2, 4, 6, 8}

################################

a = ('aaaaaa')
print(set(a)) # {'a'}
b = ('aabbcc')
print(set(b)) # {'b', 'a', 'c'}

################################

a = ['a', 'b', 'c']
print(set(a)) # {'a', 'b', 'c'}

################################

a = ('a', 'b', 'c')
print(set(a)) # {'b', 'a', 'c'}

################################

a = {'a': 1, 'b': 2, 'c': 3}
print(set(a)) # {'a', 'c', 'b'}

################################

a = {'a': 'aa', 'b': 'bb', 'c': 'cc'}

for name, contents in a.items():
    if 'a' in contents:
        print(name) # a
        print(contents) # aa
        
################################
        
a = {'a': 'aa', 'b': 'ab', 'c': 'bb'}
for name, contents in a.items():
    if 'a' in contents and not ('b' in contents or 'd'
        in contents):
        print(name) # a

################################
        
a = {'a': {'aa', 'ab'}, 'b': {'ab', 'bb'}}
for name, contents in a.items():
    if contents & { 'aa' }:
        print(name) # a

################################

a = { 1, 2 }
b = { 2, 3 }
print(a & b) # {2}

################################

a = { 1, 2 }
b = { 2, 3 }
print(a.intersection(b)) # {2}

################################

a = { 1, 2 }
b = { 2, 3 }
print(a|b) # {1,2,3}

################################

a = { 1, 2 }
b = { 2, 3 }
print(a-b) # {1}

################################

a = { 1, 2 }
b = { 2, 3 }
print(a^b) # {1,3}
print(a.symmetric_difference(b)) # {1,3}

################################

a = { 1, 2 }
b = { 2, 3 }
print(a<=b) # False
print(a<=a) # True
print(a.issubset(a))
