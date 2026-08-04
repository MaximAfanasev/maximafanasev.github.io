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