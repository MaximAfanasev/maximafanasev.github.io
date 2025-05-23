																				# a  abs
																				# a  as_integer_ratio
																				# c  chr
																				# d  divmod
																				# f  float
																				# i  int
																				# i  is_integer
																				# o  ord
																				# p  pow
																				# r  round
										
# Пример каждого метода

print(abs(-5))           								# 5
print(2.5.as_integer_ratio()) 					#(5, 2)
print(chr(65))           								# A
print(divmod(10, 3))     								# (3, 1)

print(float(True))       								# 1.0
print(float(1))          								# 1.0
print(float('99'))       								# 99.0
print(float(98.6))       								# 98.6

print(int(True))         								# 1
print(int(False))        								# 0
print(int(1.0e4))        								# 10000
print(int(98.6))         								# 98
print(int('99'))         								# 99
print(int('+12'))        								# 12
print(int('10', 2))      								# 2

d = 5.0
print(d.is_integer())    								# True
print(ord('A'))          								# 65
print(pow(2, 3))         								# 8
print(round(3.14159))    								# 3

print(1+1)     					 								# 2
print(+123)    					 								# 123
print(-123)    					 								# -123
print(1-1)     					 								# 0
print(4-10)    					 								# -6
print(1*2)     					 								# 2
print(7/2)     					 								# 3.5
print(7//2)    					 								# 3
print(9//5)    					 								# 1
print(7%3)     					 								# 1
print(9%5)     					 								# 4
print(2**3)    					 								# 8
print(4 + 7.0) 					 								# 11.0

print(0b10)    					 								# 2
print(0o10)    					 								# 8
print(0x10)    					 								# 16

print(7==5)              								# False
print(5==5)              								# True
print(5!=3)              								# True
print(5>3)               								# True
print(5<3)               								# False
print(5>=5)              								# True
print(5<=3)              								# False

print(5&3)     					 								# 1 (101 & 011 = 001)
print(5|3)     					 								# 7 (101 | 011 = 111)
print(5^3)     					 								# 6 (101 ^ 011 = 110)
print(~5)      					 								# -6
print(5 << 1)  					 								# 10
print(5 >> 1)  					 								# 2

a = 10
print(a.bit_length())    								# 4

b = 3 + 4j
print(b)                 								# 3 + 4j

print(b.conjugate())     								# 3 - 4j

print(float.fromhex('0x1.ffffp10')) 		# 2047.984375

c = 3 + 4j
print(c.imag)            								# 4.0

print(c.real)            								# 3.0

