def a():
    print('a')
a()

b = (x for x in range(1,6))

print(b)
print(type(b))

c = list(b)
print(c)


