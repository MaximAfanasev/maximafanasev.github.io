a = 7
print(a)
#7

b = a
print(b)
#7

print(4 + \
      3)
#7

c = True
if c:
    print('True')
#True

if c:
    if False:
        print('False')
#

d = 7
print(d==7)
#True

print((5<d) and (d<10))
#True

e = 1
while e<=5:
    print(e)
    e+=1

for x in range(1,5):
    print(x)

#x = input()
#s -> s

print(type(True))
print(type(bytearray(b'hh')))
print(type(b'aaaa'))
print(type(3j))
print(type({}))
print(type(1.0))
print(type(frozenset[1,2]))
#<class 'types.GenericAlias'>
#почему не frozenset??
print(type(x for x in range(1,2)))
print(type(4))
print(type([]))
print(type((1,2)))
print(type(set[1,2]))
print(type('a'))

#a z A Z 0 9 _
#0a - NO

print(abs(-5))
#5
print(2.5.as_integer_ratio())
#(5, 2)
print(chr(65))
#A
print(divmod(10, 3))
#(3, 1)
print(float(True))
#1.0
print(float(1))























