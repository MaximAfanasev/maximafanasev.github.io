count = 1
while count <= 5:
    print(count)
    count += 1

while True:
    a = input('send q tu quit: ')
    if a == 'q':
        continue
    if a == 'qq':
        break
    print(a)

for x in 'abc':
    print(x)
