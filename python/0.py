a = 7
print(a) 
# 7



b = a
print(b) 
# 7



# a z A Z a0 a_
# 0a = 1 Invalid decimal literal



a = 95
a = a - 3
print(a) 
# 92



a = 95
temp = a - 3
a = temp
print(a) 
# 92



a = 95
a -= 3
print(a) 
# 92



#bbb c d ff g i l t ss
#bool
#bytearray
#bytes
#complex
#dict
#float
#frozenset
#generator
#int
#list
#tuple
#set
#str



#comment
seconds_per_day = 86400 
# 60 sec/min * 60 min/hr * 24 hr/day




print('aaa#aaa') 
# aaa#aaa




a = True
if a:
    print(True) 
    # True
else:
    print(False)




a = True
b = True
if a:
    if b:
        print(True) 
        # True
elif b: print(False)




# < <= > >= != ==





print(5 < 7 or 7 < 10) 
# True
print(7 < 7 and 7 > 10) 
# False
print(5 < 7 and not 5 > 10) 
# True




count = 1
while count <= 5:
    print(count)
    count += 1 
    # 1 2 3 4 5




count = 1
while count <= 5:
    print(count) 
    # 1 2 3 lala 4 5 ended
    count += 1
    if count == 4:
        print('lala')
else: print('ended')



for x in range(0,3):
    print(x) 
    # 0 1 2




for x in range(2, -1, -1):
    print(x) 
    # 2 1 0


a = (x for x in range(1, 6))
print(type(a)) 
# <class 'generator'>

# + - * / // %


print(5) 
# 5
print(0) 
# 0


# print(05)
# leading zeros in decimal integer
# literals are not permitted
# use an Oo prefix for octal integers


print(+123) 
# 123
print(-123) 
# -123
print(5+9) 
# 14
print(4-10) 
# -6
print(6*7) 
# 42
print(9/5) 
# 1.8
print(9//5) 
# 1


# print(5/0)
# ZeroDivisionError: division by zero


print(0b10) 
# 2
print(0o10) 
# 8
print(0x10) 
# 16


print(int(True)) 
# 1
print(int(False)) 
# 0
print(int(98.6)) 
# 98
print(int(1.0e4)) 
# 10000
print(int('99')) 
# 99
print(int('-23')) 
# -23
print(int('+12')) 
# 12
print(int(True + 2)) 
# 3
print(int(False + 5.0)) 
# 5


print(float(True)) 
# 1.0
print(float(False)) 
# 0.0
print(float(98)) 
# 98.0
print(float('1.5')) 
# 1.5
print(float('99')) 
# 99.0