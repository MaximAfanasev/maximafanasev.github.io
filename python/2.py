s1 = 'секунда'
print(s1[0]+ '-' + s1[len(s1)-1])

s2 = 'огонь'
print(s2[len(s2)//2])

s3 = 'Привет!'
if s3[-1] == '!':
    print('ура')
elif s3[-1] == '?':
    print('вопрос')
elif a[-1] == '.':
    print('серьезно')
else: print('непонятно')

s3 = ['abc', 'abcd', 'aaa','stop']
s33 = ''
for i in s3:
  if i == 'stop':
    break
  s33 = s33 + i[-1]
print(s33)

s4 = 'Hi.'
print(s4[:len(s4)-1]+'?')

s5 = 'Hello!'
print(s5[2::3])

if 'Василий' < 'Васька' < 'Вася': print('ДА')
else: print('НЕТ')

s6 = 'съешь ещё этих мягких французских булок да выпей же чаю'
s7 = 'передай'
s8 = ''
for i in s7:
  s8 += str(s6.find(i))
print(s8)

s9 = 'Жёлтый огонёк нёсся на ёжика.'
s10 = s9.replace('Ё', 'Е').replace('ё', 'е')
print(s10)



