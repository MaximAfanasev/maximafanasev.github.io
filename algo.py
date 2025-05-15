1. Основные понятия

Алгоритм

— это последовательность шагов для решения задачи.

Сложность алгоритмов (Big-O)

— оценка времени работы и потребления памяти.

Нотация	Название	Пример
O(1)	Константная	Доступ к элементу массива
O(log n)	Логарифмическая	Бинарный поиск
O(n)	Линейная	Поиск в неотсорт. массиве
O(n log n)	Линейно-логарифмическая	Быстрая сортировка
O(n²)	Квадратичная	Пузырьковая сортировка
O(2ⁿ)	Экспоненциальная	Решение задачи коммивояжёра полным перебором
2. Популярные алгоритмы

1. Поиск

Линейный поиск (O(n))

— Поочерёдный перебор элементов.

python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
Бинарный поиск (O(log n))

— Работает только на отсортированных данных.

python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
2. Сортировки

Пузырьковая сортировка (O(n²))

— Меняет соседние элементы, пока массив не отсортируется.

python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
Быстрая сортировка (O(n log n) в среднем, O(n²) в худшем

— Разделяй и властвуй: выбираем опорный элемент и сортируем подмассивы.

python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
Сортировка слиянием (O(n log n))

— Рекурсивно разбиваем массив на части, затем сливаем в порядке возрастания.

python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
3. Алгоритмы на графах

Поиск в ширину (BFS, O(V + E))

— Обход графа по уровням (использует очередь).

python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(node)
            visited.add(node)
            queue.extend(graph[node] - visited)
Поиск в глубину (DFS, O(V + E))

— Рекурсивный обход "вглубь".

python
def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    if node not in visited:
        print(node)
        visited.add(node)
        for neighbor in graph[node]:
            dfs(graph, neighbor, visited)
Алгоритм Дейкстры (O(E + V log V))

— Поиск кратчайшего пути в графе без отрицательных весов.

python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    while heap:
        current_dist, node = heapq.heappop(heap)
        if current_dist > distances[node]:
            continue
        for neighbor, weight in graph[node].items():
            distance = current_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    return distances
4. Динамическое программирование (DP)

Числа Фибоначчи (O(n) с DP, O(2ⁿ) без)

— Классический пример оптимизации.

python
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
Задача о рюкзаке (O(nW))

— Выбор предметов с максимальной ценностью без переполнения рюкзака.

python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w - weights[i-1]])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]
5. Полезные структуры данных

Структура	Описание	Пример использования
Массив	Фиксированный размер, O(1) доступ	Хранение списка чисел
Связный список	Динамический размер, O(n) доступ	Реализация очереди/стека
Хеш-таблица	Ключ-значение, O(1) в среднем	Кэширование, подсчёт частот
Дерево	Иерархические данные	Бинарное дерево поиска (BST)
Граф	Связи между объектами	Соцсети, маршрутизация