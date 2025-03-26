def a():
    print('a')
a()

b = (x for x in range(1,6))

print(b)
print(type(b))

c = list(b)
print(c)


# ====================== 1. Основы функций ======================
def greet(name):
    """Простая функция с одним аргументом."""
    return f"Привет, {name}!"

print(greet("Анна"))  # Привет, Анна!

# ====================== 2. Позиционные и именованные аргументы ======================
def describe_person(name, age, city):
    """Функция с позиционными и именованными аргументами."""
    return f"{name}, {age} лет, из {city}"

# Позиционные аргументы (важен порядок)
print(describe_person("Иван", 25, "Москва"))  # Иван, 25 лет, из Москва

# Именованные аргументы (порядок не важен)
print(describe_person(age=30, city="Казань", name="Ольга"))  # Ольга, 30 лет, из Казань

# ====================== 3. Аргументы по умолчанию ======================
def make_coffee(type="эспрессо", sugar=False):
    """Функция с аргументами по умолчанию."""
    sugar_text = " с сахаром" if sugar else ""
    return f"Ваш {type}{sugar_text} готов!"

print(make_coffee())                # Ваш эспрессо готов!
print(make_coffee("латте", True))   # Ваш латте с сахаром готов!

# ====================== 4. *args и **kwargs ======================
def sum_all(*args):
    """Функция с произвольным числом позиционных аргументов (*args)."""
    return sum(args)

print(sum_all(1, 2, 3))  # 6

def print_profile(**kwargs):
    """Функция с произвольным числом именованных аргументов (**kwargs)."""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_profile(name="Максим", age=28, city="СПб")
# name: Максим
# age: 28
# city: СПб

# ====================== 5. Вложенные функции и замыкания ======================
def outer_function(x):
    """Функция, содержащая вложенную функцию."""
    def inner_function(y):
        return x + y
    return inner_function

closure = outer_function(10)
print(closure(5))  # 15 (10 + 5)

# ====================== 6. Lambda-функции ======================
square = lambda x: x ** 2
print(square(5))  # 25

# Сортировка списка с помощью lambda
users = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 20}]
users_sorted = sorted(users, key=lambda user: user["age"])
print(users_sorted)  # [{'name': 'Bob', 'age': 20}, {'name': 'Alice', 'age': 25}]

# ====================== 7. Генераторы ======================
def countdown(n):
    """Генератор чисел от n до 1."""
    while n > 0:
        yield n
        n -= 1

for num in countdown(3):
    print(num)  # 3, 2, 1

# Генераторное выражение
squares = (x ** 2 for x in range(5))
print(list(squares))  # [0, 1, 4, 9, 16]

# ====================== 8. Декораторы ======================
def logger(func):
    """Декоратор, логирующий вызов функции."""
    def wrapper(*args, **kwargs):
        print(f"Вызов функции {func.__name__} с аргументами: {args}, {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(3, 5))  
# Вызов функции add с аргументами: (3, 5), {}
# 8