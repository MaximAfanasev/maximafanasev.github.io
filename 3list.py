a = []
print(a)
# []

b = list()
print(b)
# []




c = ('a', 'b', 'c')
print(list(c))
# ['a', 'b', 'c']





d = '1/2/4'
e = d.split('/')
print(e)
# ['1', '2', '4']

g = 'a/b//c/d///e'
print(g.split('/'))
print(g.split('//'))
# ['a', 'b', '', 'c', 'd', '', '', 'e']





a = ['a', 'b', 'c']
print(a[0]) # a
print(a[1]) # b
print(a[2]) # c

print(a[-1]) # c
print(a[-2]) # b
print(a[-3]) # a
#print(a[-4]) #IndexError: list index out of range





a = ['a', 'b']
b = ['c', 'd']
c = ['e', 'f']
j = [a,b,c]

print(j) # [['a', 'b'], ['c', 'd'], ['e', 'f']]
print(j[0]) # ['a', 'b']
print(j[0][1]) # b











