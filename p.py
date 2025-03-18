print(abs(-5)) # 5 |-5|
print(2.5.as_integer_ratio()) #(5, 2) 5/2 = 2.5
a = 10
print(a.bit_length()) # 4 (10 в двоичном виде: 1010)
print(chr(65)) # A
b = 3 + 4j
print(b) # 3 + 4j ???
print(b.conjugate()) # 3 - 4j ???
print(divmod(10, 3))  # (3, 1)
print(float(1)) # 1.0
print(float.fromhex('0x1.ffffp10')) # 2047.984375
c = 3 + 4j
print(c.imag) # 4.0 ???
print()
print()
print()
print()




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

print(bool(True))
print(bool(1))
print(bool(45))
print(bool(-45))
print(bool(False))
print(bool(0))
print(bool(0.0))

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

a1 = 'aoiu'; 
print('a' in a1)
print('ab'.replace('a','c'))
print(' abc '.strip())
print('a'.startswith('a'))
print('a'.endswith('a'))
print('a'.center(3))
print('a'.ljust(2))
print('a'.rjust(2))
print('{}'.format('str'))

a2 = []
print(a1)

b1 = list()
print(b1)

print(list('abc'))

print(['a','b'][1])

print([1]*3)
print([1]+[2])

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
