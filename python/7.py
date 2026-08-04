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
print(d) # [['a', 'b', 'c'], ['a', 'c', 'b'], ['c', 'b', 'a']]




a = ['a', 'b', 'c']
b = ['a', 'c', 'b']
c = ['c', 'b', 'a']
d = {'a': a, 'b': b, 'c': c}
print(d) # {'a': ['a', 'b', 'c'], 'b': ['a', 'c', 'b'], 'c': ['c', 'b', 'a']}




#comment
seconds_per_day = 86400 # 60 sec/min * 60 min/hr * 24 hr/day




print('aaa#aaa') # aaa#aaa




a = 'abc' + \
    'dbe'
print(a) #  abcdbe




a = True
if a:
    print(True) # True
else:
    print(False)




a = True
b = True
if a:
    if b:
        print(True) # True
elif b: print(False)




# < <= > >= != ==




print(5 < 7 or 7 < 10) # True
print(7 < 7 and 7 > 10) # False
print(5 < 7 and not 5 > 10) # True




count = 1
while count <= 5:
    print(count)
    count += 1 # 1 2 3 4 5




count = 1
while count <= 5:
    print(count) # 1 2 3 lala 4 5 ended
    count += 1
    if count == 4:
        print('lala')
else: print('ended')




a = ['a', 'b', 'c']
for x in a:
    print(x) # a b c




a = 'abc'
for x in a:
    print(x) # a b c




a = {'a': 1, 'b': 2, 'c': 3}
for x in a:
    print(x) # a b c




a = {'a': 1, 'b': 2, 'c': 3}
for x in a.values():
    print(x) # 1 2 3




a = {'a': 1, 'b': 2, 'c': 3}
for x in a.items():
    print(x) # ('a', 1) ('b', 2) ('c', 3)




a = ['a', 'b', 'c']
b = ['c', 'd', 'e']
c = ['d', 'e', 'f']
for x,y,z in zip(a,b,c):
    print(x,y,z) # a c d
                 # b d e
                 # c e f




for x in range(0,3):
    print(x) # 0 1 2




for x in range(2, -1, -1):
    print(x) # 2 1 0




a = [x for x in range(0,6)]
print(a) # [0, 1, 2, 3, 4, 5]




a = [x for x in range(1,6) if x % 2==1]
print(a) # [1, 3, 5]




a = range(1,4)
b = range(1,3)
c = [(x, y) for x in a for y in b]
print(c) # [(1, 1), (1, 2), (2, 1), (2, 2), (3, 1), (3, 2)]




b = 'letters'
a = {x: b.count(x) for x in b}
print(a) # {'l': 1, 'e': 2, 't': 2, 'r': 1, 's': 1}




a = {x for x in range(1,6) if x % 3 == 1}
print(a) # {1, 4}




a = (x for x in range(1, 6))
print(type(a)) # <class 'generator'>




a = (x for x in range(1, 6))
print(list(a)) # [1, 2, 3, 4, 5]



