# создание словаря
# обращение к элементу
# объединение словарей

a2 = {}
print(a2)              						  
# {}

d = {'a': 1, 'b': 2}
print(d['a'])         						  
# 1

print({'a': 1} | {'b': 2})          
# {'a': 1, 'b': 2} 
print({**{'a': 1}, **{'b': 2}})     
# {'a': 1, 'b': 2}

# очищение
# копирование
# удаление
# создание словаря
# получение ключа
# проверка наличия
# генератор
# получение всех элементов
# получение всех ключей
# выдергивание по ключу
# выдергивание по связке
# установление дефолтного
# получение всех значений
# объединение вместе


a = {'a': 1}
a.clear()
print(a)                 
# {}

b = {'a': 1, 'b': 2}
c = b.copy()
print(c)                 
# {'a': 1, 'b': 2}

p = {'a': 1, 'b': 2}
del(p['a'])
print(p, ', del')        
# {'b': 2}

b1 = dict()
print(b1)               						
# {}

print(dict([('a', 1), ('b', 2)]))   
# {'a': 1, 'b': 2}
print(dict(a=1, b=2))               
# {'a': 1, 'b': 2}

e = {'a': 1, 'b': 2}
print(e.get('a'))     			
# 1
print(e.get('c'))     			
# None
print(e.get('c', 0))  			
# 0

print('a' in {'a': 1}) 		        
# True

m = {x: x*2 for x in range(3)}
print(m)              							
# {0: 0, 1: 2, 2: 4}

f = {'a': 1, 'b': 2}
print(f.items())      			
# dict_items([('a', 1), ('b', 2)])

for k, v in {'a': 1, 'b': 2}.items():
    print(k, v)        							
# a 1, b 2
		
n = {'a': 1, 'b': 2, 'c': 3}
filtered = {k: v for k, v in n.items() if v > 1}
print(filtered)       							
# {'b': 2, 'c': 3}

g = {'a': 1, 'b': 2}
print(g.keys())       			
# dict_keys(['a', 'b'])

h = {'a': 1, 'b': 2}
print(h.pop('a'))     			
# 1
print(h)              			
# {'b': 2}

i = {'a': 1, 'b': 2}
print(i.popitem())    			
# ('b', 2)
print(i)              			
# {'a': 1}

j = {'a': 1}
j.setdefault('a', 2)  			
# 1
j.setdefault('b', 2)  			
# 2
print(j)              			
# {'a': 1, 'b': 2}

m = {'b': 2, 'a': 1, 'c': 3}
print(sorted(m))               
# ['a', 'b', 'c']
print(sorted(m.items()))       
# [('a', 1), ('b', 2), ('c', 3)]
print(sorted(m.values()))      
# [1, 2, 3]
print(sorted(m, key=m.get))    
# ['a', 'b', 'c'] (по значениям)

l = {'a': 1, 'b': 2}
print(l.values())     			
# dict_values([1, 2])

k = {'a': 1, 'b': 2}
k.update({'c': 3})
print(k)              			
# {'a': 1, 'b': 2, 'c': 3}
