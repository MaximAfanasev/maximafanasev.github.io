print(type(True))                # bool
print(type(bytearray(b'hh')))    # bytearray
a = b'aaaa'
print(type(a))                   # bytes

print(type(3j))                  # complex
print(type({}))                  # dict

print(type(1.0))                 # float
print(type(frozenset[1,2]))      # frozenset

b = (x for x in range(1,2))
print(type(b))                   # generator
print(type(4))                   # int
print(type([]))                  # list
print(type((1,2)))               # tuple

print(type(set[1,2]))            # set
print(type('a'))                 # str