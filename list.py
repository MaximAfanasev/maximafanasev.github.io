print()
a2 = []
print(a1)

b1 = list()
print(b1)

print(list('abc'))

print(['a','b'][1])

print([1]*3)
print([1]+[2])

print()
print(['a','b','c'][1:])
print(['a','b','c'][-1:])
print(['a','b','c'][:1])
print(['a','b','c'][:-2])

print('a,b,c'.split(','))

c1 = ['a','b']
c1.remove('a')
print(c1)

d1 = [1,2,3]
d1.append(4)
print(d1)

print()
e1 = [1]
f1 = [2]
e1.extend(f1)
print(e1)

j1 = [1,2,3,4]
j1[1:3]=[5,6]
print(j1)

k1 = [1,2,3]
k1.remove(2)
print(k1)

l1 = [1,2,3]
l1.pop()
print(l1)

p1 = [1,2,3]
p1.clear()
print(p1)

print([1,2].index(2))

print(1 in [1,2])

print([1,1,1].count(1))

q1 = [3,2,1]
q1.sort()
print(q1)

for _ in zip([1,2,3],[4,5,6]):
    print(_)