for a in 5,4,3,2,1,'hi':
    print(a)

a = [1,2,3]
print(a[2])

a0 = {
    'a': '1',
    'b': '2'
    }
b = 'b'
print(b, a0[b])

print(type(7))

a1 = b1 = c1 = 2
print(a1)
print(b1)
print(c1)

x = 5
y = x
x = 29
print(x)
print(y)

a2 = [1,2,3]
b2 = a2
a2[0] = 5
print(b2)

print(bool(1))
print(bool(0))

print(+123)

print(1_000_000)

a3 = 95
a3 -= 3
print(a3)
a3 /= 3
print(a3)

print(divmod(9,5))

print(2**3)

print((-5)**2)

print(0b10)
print(0o10)
print(0x10)

print(bin(65))
print(oct(65))
print(hex(65))

print(chr(65))

print(int(True))

print(int(98.6))

print(int('99'))

print(int('10',2))

print(True + 2)

print(43+2.)

print(False + 0.)

#comment

a4 = 0
a4 = 1 + \
      2
print(a4)

a5 = 0
a5 = (1 +
      2)
print(a5)

a6 = True
if a6:
    print('a6 True')

a7 = 'a'
if a7 == 'b':
    print('b')
elif a7 == 'a':
    print('a')

a8 = 5
print((a8<7) and (a8<10))

a9 = []
if a9: print('some')
else: print('empty')

a10 = 'o'
if a10 == 'o' or a10 == 'a':
    print(a10, 'it"s wowel')

vowels = 'aoeui'
if a10 in vowels:
    print(a10, 'yeah')


vowels2 = {'a','o','e','u','i'}
if a10 in vowels2:
    print(a10, 'yeah2')

a11 = 10
b2 = 'b'*a11
if c2 := a11 - len(b2) >= 0:
    print('yes')
else: print('no')

print('''three''')




