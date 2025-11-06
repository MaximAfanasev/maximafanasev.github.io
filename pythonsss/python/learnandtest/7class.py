class Person():
    def __init__(self, name, age):
        self.name = name  # Атрибут для хранения имени
        self.age = age    # Атрибут для хранения возраста

    def greet(self):
        print(f"Привет, меня зовут {self.name} и мне {self.age} лет.")

# Создание экземпляра класса Person
person1 = Person("Иван", 30)
person1.greet()  # Вывод: Привет, меня зовут Иван и мне 30 лет.





class A:
    def method_a(self):
        print("Метод A")

class B:
    def method_b(self):
        print("Метод B")

class C(A, B):  # Наследует от A и B
    def method_c(self):
        print("Метод C")