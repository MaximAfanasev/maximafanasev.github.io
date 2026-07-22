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
# ['a', 'b', '', 'c', 'd', '', '', 'e']

print(g.split('//'))
# ['a/b', 'c/d', '/e']






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







a = ['a', 'b', 'c']
a[0] = 'd'

print(a) # ['d', 'b', 'c']



a = ['a', 'b', 'c']

print(a[0:2]) # ['a', 'b'] 0 1 2(не включена)
print(a[0:0]) # []
print(a[0:1]) # ['a']
print(a[0:3]) # ['a', 'b', 'c']
print(a[0:4]) # ['a', 'b', 'c']
print(a[0:99]) # ['a', 'b', 'c']

#print(a[::0]) # slice step cannot be zero
print(a[::1]) # ['a', 'b', 'c']
print(a[::2]) # ['a', 'c']
print(a[::3]) # ['a']
print(a[::99]) # ['a']

print(a[::-1]) # ['c', 'b', 'a']
print(a[::-2]) # ['c', 'a']
print(a[::-3]) # ['c']
print(a[::-99]) # ['c']




##### A

a = ['a', 'b', 'c']

a.append('d')

print(a) # ['a', 'b', 'c', 'd']




####### E


a = ['a', 'b']
c = ['d', 'e']
a.extend(c)

print(a) # ['a', 'b', 'd', 'e']




#########


a = ['a', 'b']
c = ['d', 'e']

a += c

print(a) # ['a', 'b', 'd', 'e']





###########

a = ['a', 'b']
c = ['d', 'e']
a.append(c)

print(a) # ['a', 'b', ['d', 'e']]




#########










