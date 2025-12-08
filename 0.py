print(type(True))
# <class 'bool'>
print(type(bytearray(b'hh')))
# <class 'bytearray'>
a = b'aaaa'
print(type(a))
# <class 'bytes'>
print(type(3j))
# <class 'complex'>
print(type({}))
# <class 'dict'>
print(type(1.0))
# <class 'float'>
print(type(frozenset[1,2]))
# <class 'types.GenericAlias'>
b = (x for x in range(1,2))
print(type(b))
# <class 'generator'>
print(type(4))
# <class 'int'>
print(type([]))
# <class 'list'>
print(type((1,2)))
# <class 'tuple'>
print(type(set[1,2]))
# <class 'types.GenericAlias'>
print(type('a'))
# <class 'str'>
