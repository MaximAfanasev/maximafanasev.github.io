<script>
<script type="text">
<script src="">
alert('')

"use strict"

(function() {
	'use strict'
})

let a
let a = 'Hello'

let $ = 1
let _ = 2

let 1a; 
let my-name; 
let let;

const A = 1

a = 3.14
Infinity
'a'/2; NaN
const bigint = 123n
'' "" `` str
`Hi, ${name}`
let t = true false
a = undefined
null
typeof
Symbol('id')

let a = prompt(title, 100)
alet(`... ${a}`)

let a = confirm('aaa?')
alert(a)

b = String(a)
b = Number(a)
b = Boolean(a)

x = -x

+
-
*
**
/
%

5%2
2**3
'a'+'b' 'ab'

a = 1
+a

a += 2

a++
++a

2 > 1
2 == 1
2 != 1
'A' > 'B'
0 == false
'' == false
null == undefined

if (2 == 1) {
} else if (2 != 1) {
} else {}

let a = 2==1 ? true : false

||
||=
&&
&&=
!
??
??=

a ||= b
a || (a=b)

while (a<3) {a++}

do {a++} while (a<3)

for (let i = 0; i<3; i++) {}

break
continue

switch(a) {
	case 'a':
	alert('a')
	break;
	default:
	alert('0')
}

function a() {
	alert('a')
}
a()

b = 'b';
function a() {
	let a = 'a' + b
}

function a(b, text = 'a') {
}

function sum(a,b) {
	return a + b
}

function a() {} == undefined

function a() {}
let a = function() {}

function a() {}
a('a?', function b() {}, function c() {})

a('a') 
function a() {}
b('b') // Error
let b = function() {}

let a = () => {}

let a = prompt('', 18)
let b = (a < 18) ?
		() => alert('a'):
		() => alert('b')
a()

F12
console
debugger
eslint

Mocha
describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});

let user = new Object();
let user = {};

let user = {
  name: "John",
  age: 30
};

// получаем свойства объекта:
alert( user.name ); // John
alert( user.age ); // 30
user.isAdmin = true;
delete user.age;

let user = {
  name: "John",
  age: 30,
  "likes birds": true
};

const user = {
  name: "John"
};
user.name = "Pete";
alert(user.name); // Pete

let user = {};
user["likes birds"] = true;

let user = {
  name: "John",
  age: 30
};
let key = prompt("Что вы хотите узнать о пользователе?", "name");
alert( user[key] ); // John (если ввели "name")

function makeUser(name, age) {
  return {
    name: name,
    age: age
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

let user = {
  name,
  age: 30
};

let user = { name: "John", age: 30 };
alert( "age" in user ); // true
alert( "blabla" in user ); // false

for (let key in user) {
  alert( key );  // name, age
  alert( user[key] ); // John, 30
}

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete';
alert(user.name); // 'Pete'

let a = {};
let b = a;
alert( a == b ); // true
alert( a === b ); // true

let a = {};
let b = {};
alert( a == b ); // false

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user, permissions1, permissions2);
// user = { name: "John", canView: true, canEdit: true }

let user = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, user);

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
alert( user.sizes.height ); // 182

let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!

function sayHi() {
  alert("Привет!");
}
user.sayHi = sayHi;
user.sayHi(); // Привет!

user = {
  sayHi: function() {
    alert("Привет");
  }
};

user = {
  sayHi() { // то же самое, что и "sayHi: function(){...}"
    alert("Привет");
  }
};

let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
  }

};
user.sayHi(); // John

let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert(user.name); // "user" вместо "this"
  }
};

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya

function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

function User() {
  alert(new.target);
}
// без "new":
User(); // undefined
// с "new":
new User(); // function User { ... }

function User(name) {
  if (!new.target) { // в случае, если вы вызвали меня без оператора new
    return new User(name); // ...я добавлю new за вас
  }
  this.name = name;
}
let john = User("John");
alert(john.name); // John

function BigUser() {
  this.name = "John";
  return { name: "Godzilla" };  // <-- возвращает этот объект
}
alert( new BigUser().name );  // Godzilla

let user = new User; // <-- без скобок
// то же, что и
let user = new User();

let user = {}; // пользователь без свойства "address"
alert(user.address.street); // Ошибка!

let user = {};
alert(user.address ? user.address.street : undefined);

let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)

let html = document.querySelector('.elem')?.innerHTML;

let user = null;
let x = 0;
user?.sayHi(x++); // нет "user", поэтому выполнение не достигает вызова sayHi и x++
alert(x); // 0, значение не увеличилось
			
let userAdmin = {
  admin() {
    alert("Я админ");
  }
};
let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет	

let id = Symbol();
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

let id = Symbol("id");
alert(id); // TypeError

let user = {
  name: "Вася"
};
let id = Symbol("id");
user[id] = 1;
alert( user[id] ); // 1

let id = Symbol("id");
let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};

let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};
for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
// хотя прямой доступ по символу работает
alert( "Напрямую: " + user[id] );

let id = Symbol("id");
let user = {
  [id]: 123
};
let clone = Object.assign({}, user);
alert( clone[id] ); // 123

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан
// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");
// проверяем -- это один и тот же символ
alert( id === idAgain ); // true

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

alert(obj);
// используем объект в качестве ключа
anotherObj[obj] = 123;

// явное преобразование
let num = Number(obj);
// математические (не считая бинарного плюса)
let n = +obj; // унарный плюс
let delta = date1 - date2;
// сравнения больше/меньше
let greater = user1 > user2;

let user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};
alert(user); // toString -> John
alert(user + 500); // toString -> John500

let obj = {
  // toString обрабатывает все преобразования в случае отсутствия других методов
  toString() {
    return "2";
  }
};
alert(obj * 2); // 4

let str = "Привет";
alert( str.toUpperCase() ); // ПРИВЕТ

let num = 1.23456;
alert( num.toFixed(2) ); // 1.23

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)

let ms = 1e-6; // шесть нулей слева от 1

alert( 0xff ); // 255

let a = 0b11111111; // двоичная (бинарная) форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

alert( 1e500 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false,

alert( parseInt('100px') ); // 100
alert( parseInt('12.3') ); // 12
alert( parseInt('a123') ); // NaN

alert( Math.random() ); // 0.12345

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.pow(2, 10) ); // 1024

let guestList = "Guests:\n * John\n * Pete\n * Mary";

let str = `Hello`;

// получаем первый символ
alert( str[0] ); // H
alert( str.at(0) ); // H

// получаем последний символ
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
alert( str.indexOf("id") ); // 1

let str = 'Widget with id';
alert( str.indexOf('id', 2) ) // 12

let str = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа'; // цель поиска
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}

let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

let str = "Widget with id";
if (str.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}

alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true

let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );

alert( 'a' > 'Z' ); // true

alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

let arr = new Array();
let arr = [];

let fruits = ["Яблоко", "Апельсин", "Слива"];
alert( fruits[0] ); // Яблоко
alert( fruits.length ); // 3
alert( fruits ); // Яблоко, Апельсин, Слива

// разные типы значений
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
alert( arr[1].name ); // Джон

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.at(-1) ); // Plum

let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.pop() ); // удаляем "Груша" и выводим его
alert( fruits ); // Яблоко, Апельсин

let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша");
alert( fruits ); // Яблоко, Апельсин, Груша

let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift() ); // удаляем Яблоко и выводим его
alert( fruits ); // Апельсин, Груша

let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');
alert( fruits ); // Яблоко, Апельсин, Груша

let arr = ["Яблоко", "Апельсин", "Груша"];
for (let key in arr) {
  alert( arr[key] ); // Яблоко, Апельсин, Груша
}

let fruits = [];
fruits[123] = "Яблоко";
alert( fruits.length ); // 124

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]
arr.length = 5; // возвращаем length как было
alert( arr[3] ); // undefined: значения не восстановились

let arr = new Array("Яблоко", "Груша", "и тд");

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[1][1] ); // 5, центральный элемент

let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( [] == [] ); // false
alert( [0] == [0] ); // false
alert( 0 == [] ); // true

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
alert( arr ); // осталось ["Я", "JavaScript"]

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

let arr = [1, 2];
// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
  alert(`У ${item} индекс ${index} в ${array}`);
});

let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // Вася

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6

et arr = [ 1, 2, 15 ];
// метод сортирует содержимое arr
arr.sort();
alert( arr );  // 1, 15, 2

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

let str = "тест";
alert( str.split('') ); // т,е,с,т

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

for (let char of "test") {
  // срабатывает 4 раза: по одному для каждого символа
  alert( char ); // t, затем e, затем s, затем t
}

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)


new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.

ключи в WeakMap должны быть объектами, а не примитивными значениями

Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {title, width, height} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

let options = {
  title: "Menu",
  height: 200,
  width: 100
};
// title = свойство с именем title
// rest = объект с остальными свойствами
let {title, ...rest} = options;
// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100

let now = new Date();
alert( now ); // показывает текущие дату и время

let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
alert(user); // {name: "John", age: 30}

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);
alert(typeof json); // мы получили строку!
alert(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// строковый массив
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
alert( pow(2, 3) ); // 8

function sum(a, b) {
  return a + b;
}
alert( sum(1, 2, 3, 4, 5) ); // 3

function sumAll(...args) { // args — имя массива
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15

let str = "Привет";
alert( [...str] ); // П,р,и,в,е,т

{
  // выполняем некоторые действия с локальной переменной, которые не должны быть видны снаружи
  let message = "Hello"; // переменная видна только в этом блоке
  alert(message); // Hello
}
alert(message); // ReferenceError: message is not defined

if (true) {
  let phrase = "Hello";
  alert(phrase); // Hello
}
alert(phrase); // Ошибка, нет такой переменной!

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
let counter = makeCounter();

alert("Привет");
// это то же самое, что и
window.alert("Привет");

function sayHi() {
  alert("Hi");
}
alert(sayHi.name); // sayHi

let func = new Function([arg1, arg2, ...argN], functionBody);

function sayHi() {
  alert('Привет');
}
setTimeout(sayHi, 1000);

// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

декоратор, специальная функция, которая принимает другую функцию и изменяет её поведение

let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};
setTimeout(user.sayHi, 1000); // Привет, undefined!

let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};
setTimeout(function() {
  user.sayHi(); // Привет, Вася!
}, 1000);

let user = {
  firstName: "Вася"
};
function func() {
  alert(this.firstName);
}
let funcUser = func.bind(user);
funcUser(); // Вася

Стрелочные функции:
Не имеют this.
Не имеют arguments.
Не могут быть вызваны с new.

writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },

  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
};

Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать объекты admin и guest как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;




















