def f(x, y, z, w):
  return (a <= b) and (b <= (not c)) and ((not c) <= d) 

from itertools import permutations, product
# перебор всех возможных вариантов заполнения пропусков
for a1, a2, a3, a4 in product([0, 1], repeat=4):
  # формирование таблицы с заполненными пропусками
  table = [(a1, a2, 0, 0), (1, 0, a3, 0), (1, 0, 1, a4)]
  # если количество строк в таблице не равно количеству уникальных
  # значит есть дублирующиеся строки
  if len(table) != len(set(table)):
    # поэтому перебираем следующий вариант заполнения пропусков
    continue
  for p in permutations('xyzw'):
    if [f(**dict(zip(p, row))) for row in table] == [0, 0, 0]:
      print(*p, sep ='')
