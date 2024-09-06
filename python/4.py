print([3]*3)

print(sorted([4]*3+[3]*4))


a = []
a.append(1)
print(a)


s1 = '55435455443'
print(list(s1))


res = []
for i in range(4):
    res.append(i+1)
print(res)


a = int(input())
c=[]
for i in range(a):
    b=input()
    c.append(b)
d=int(input())
try:
    print(int(c[d])**2)
except:
    print('Элемента с таким индексом в этом массиве нет.')


c2 = [input() for i in range(5)]
for elem in c2[::-1]:
    print(elem)


a = int(input())
c = [input() for i in range(2*a)]
b = input()
s = []
for i in range(len(c)-1):
    if c[i+1] == b:
        s.append(c[i])
print(s)


a = int(input())
c = [input() for _ in range(a)]
b = input()
name_found = False
for elem in c:
    if elem == b:
        name_found = True
if name_found:
    print("ДА")
else:
    print("НЕТ")


a = int(input())
c = [input() for _ in range(a)]
b = input()
k=0
for elem in c:
    if elem == b:
        k+=1
print(k)


a = int(input())
c = [int(input()) for _ in range(a)]

b = max(c)
e = min(c)
if c.index(b) < c.index(e):
    c[c.index(e)], c[c.index(b)] = c[c.index(b)], c[c.index(e)]
else: 
    c[c.index(b)], c[c.index(e)] = c[c.index(e)], c[c.index(b)]
print(c)


a = input()
c = a.split()
b = ''.join(c)
print(min(b), max(b))


a = int(input())
c = [input() for _ in range(a)]

for i in range(len(c)):
    if '0' in c :
        c.remove('0')

print('+'.join(c))
