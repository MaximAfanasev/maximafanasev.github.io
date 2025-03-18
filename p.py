print(123)
print(1+1)
print(1-1)
print(1*2)
print(+123)
print(7/2)
print(7//2)
print(9//5)
print(7%3)
print(9%5)
print(2**3)

print(5<5 and 5<10)

print(bool(True))
print(bool(1))
print(bool(45))
print(bool(-45))
print(bool(False))
print(bool(0))
print(bool(0.0))

print(chr(65))
print(ord('A'))

print(int(True))
print(int(False))
print(int(98.6))
print(int('99'))
print(int('10', 2))

print(float(True))


print(type('a'))
print(type("b"))
print(type('''c'''))
print(str(98.6))
print(str(1.0e4))
print(str(True))
print('A man.\n P')
print('a'+'b')
print('a'*4)
print('ab'[0])
print('abc'[:])
print('abc'[1:])
print('abc'[-2:])
print('abcdefj'[::2])
print(len('abc'))
print(''.join(['a','b']))
print(','.join(['a','b']))
print('abc'.split())

a = 'aoiu'; 
print('a' in a)
print('ab'.replace('a','c'))
print(' abc '.strip())
print('a'.startswith('a'))
print('a'.endswith('a'))
print('a'.center(3))
print('a'.ljust(2))
print('a'.rjust(2))
print('{}'.format('str'))

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
