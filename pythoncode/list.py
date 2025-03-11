a = []
print(a)

b = list()
print(b)

print(list('abc'))

print(['a','b'][1])

print([1]*3)
print([1]+[2])

print(['a','b','c'][1:])
print(['a','b','c'][-1:])
print(['a','b','c'][:1])
print(['a','b','c'][:-2])

print('a,b,c'.split(','))

c = ['a','b']
c.remove('a')
print(c)

d = [1,2,3]
d.append(4)
print(d)

e = [1]
f = [2]
e.extend(f)
print(e)

j = [1,2,3,4]
j[1:3]=[5,6]
print(j)

k = [1,2,3]
k.remove(2)
print(k)

l = [1,2,3]
l.pop()
print(l)

p = [1,2,3]
p.clear()
print(p)

print([1,2].index(2))

print(1 in [1,2])

print([1,1,1].count(1))

q = [3,2,1]
q.sort()
print(q)

for _ in zip([1,2,3],[4,5,6]):
    print(_)
