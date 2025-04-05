a2 = []
print(a2)               # []

b1 = list()
print(b1)               # []

print(list('abc'))      # ['a', 'b', 'c']

print(['a', 'b'][1])    # 'b'

print([1] * 3)          # [1, 1, 1]

print([1] + [2])        # [1, 2]

print(['a', 'b', 'c'][1:])      # ['b', 'c']
print(['a', 'b', 'c'][-1:])     # ['c']
print(['a', 'b', 'c'][:1])      # ['a']
print(['a', 'b', 'c'][:-2])     # ['a']

j1 = [1, 2, 3, 4]
j1[1:3] = [5, 6]
print(j1)                # [1, 5, 6, 4]

print(1 in [1, 2])       # True

for _ in zip([1, 2, 3], [4, 5, 6]):
    print(_)             # (1, 4), (2, 5), (3, 6)
		
m = [x for x in range(5)]
print(m)                 # [0, 1, 2, 3, 4]

n = [1, 2, 3, 4, 5]
filtered = [x for x in n if x > 2]
print(filtered) 				 # [3, 4, 5]

p = [1, 2, 3]
print(max(p))  					 # 3
print(min(p))  					 # 1

q = [1, 2, 3]
print(sum(q))  					 # 6

r = [1, 2, 3]
print(len(r)) 					 # 3


		
		
		
#  a ccc e ii p rr ss		
		
		
a = [1, 2]
a.append(3)
print(a)  								# [1, 2, 3]

b = [1, 2, 3]
b.clear()
print(b)  								# []

c = [1, 2, 3]
d = c.copy()
print(d)  								# [1, 2, 3]

e = [1, 1, 2, 3]
print(e.count(1))  				# 2

f = [1, 2]
f.extend([3, 4])
print(f)  								# [1, 2, 3, 4]

g = [1, 2, 3, 2]
print(g.index(2))  				# 1

h = [1, 2, 3]
h.insert(1, 1.5)
print(h)  								# [1, 1.5, 2, 3]

i = [1, 2, 3]
print(i.pop())  					# 3
print(i)  								# [1, 2]

j = [1, 2, 3, 2]
j.remove(2)
print(j)  								# [1, 3, 2]

k = [1, 2, 3]
k.reverse()
print(k)  								# [3, 2, 1]

l = [3, 1, 2]
l.sort()
print(l)  								# [1, 2, 3]

print('a,b,c'.split(','))  # ['a', 'b', 'c']