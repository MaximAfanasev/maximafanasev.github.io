s1 = '+'
for n in range(3):
    print(s1)

s2 = ['12345678','123']
for i in s2:
    if len(i) >= 5:
        print(i)

for i in range(3):
    i+=1
    print(i)

s4 = '+'
for i in range(1, 4):
    print(s4*i)

s5 = ''
for i in range(5):
    s5 = s5 + str(i)
print(s5)
    
s6 = 'привет'
for i in range(len(s6)):
    print(len(s6)*s6[i])

summ = 0
for i in range(10000, 100000):
    summ += i
print(summ)

s7 = ['a', 'стоп']
for i in s7:
    if i != 'стоп':
        i = i + '!'
        print(i)


acc = 0
s8 = [2,2,0]
for i in s8:
    if i == 2:
        acc += 1
print(acc)


s9 = 'Вася играет в игру'
while s9 != '1':
    s9 = str(len(s9))
    print(s9)


