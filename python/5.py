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