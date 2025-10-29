"use strict";

console.log('abc')

console.log(3 +
	1 +
	2, '----- 3 + 1 + 2');

// Comment

/* 1
2 */

let a = 'b';
console.log(a, '----- let a');
a = 'c';
console.log(a, '----- let a changed')

let $ = 1;
console.log($, '-----let $')
let _ = 2;
console.log(_, '-----let _')

console.log(typeof('str'), '-----typeof str')
console.log(typeof(123), '-----typeof 123')
console.log(1 / 0, '-----1/0');
console.log(typeof(1 / 0), '----- typeof Infinity')
console.log(typeof("не число" / 2), '----- type NaN')
console.log(typeof(1n), '----- type bigint')
console.log(`${1+2}`, '----- ${1+2}')
console.log(typeof(true), '----- typeof true')
console.log(4 > 1, '----- 4 > 1')
console.log(null, '----- null')
console.log(typeof(age), '----- typeof age')

let str = '1'
console.log(str, '- str = 1')
console.log(`var ${str}`, '----- ${str}')

alert('')

"use strict"

(function() {
'use strict'
})

let a11 = 'Hello'

let $2 = 1
let _2 = 2

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

arr = ['a', 'b', 'c']

// 'a,b,c'
// 'abc'
// 'a-b-c'
// 'a,b,c'

console.log(arr.join(','))
console.log(arr.join(''))
console.log(arr.join('-'))
console.log(arr.join())

const arr2 = [1, 2, 3, 4, 5, 6]
const divider = 2
// [2, 4, 6]
const f = a => {
return a.filter(x=>x%2 === 0)
}

console.log(f(arr2, divider))

// [1, 2, 3] [4, 5, 6] --> 21

const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]

const f2 = (a, b) => {
return [...a, ...b].reduce((a,b)=>a+b)
}

console.log(f2(arr3, arr4))

// [1, 2, 1, 1, 3, 2] --> [1, 2, 3]

const arr5 = [1, 2, 1, 1, 3, 2]

const f3 = a => {
return [...new Set(a)]
}

console.log(f3(arr5))

// ['0', '1', '2', '3', '4', '5'] f(7) --> '1'
arr6 = ['0', '1', '2', '3', '4', '5']

const f4 = a => {
return arr6[a%6]
}

console.log(f4(7))

// f([1,2,'a']) == '11' (двоичная система)

const f5 = a => {
return a.filter(x=> typeof x === 'number').reduce((a,b)=>a+b).toString(2)
}

console.log(f5([1, 2, 'a']))

// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

const arr7 = [1, -2, 3, -4, 5]

const f6 = a => {
return a.map(x=>-x)
}

console.log(f6(arr7))

// ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) --> 30
// ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])  --> 10
// ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])   --> 0

arr8 = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]
arr9 = ["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]
arr10 = ["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]

const points = a => {
return a.reduce((x,y)=> {
return x += y[0] > y[2] ?
	3 : y[0] < y[2] ? 1 : 0
}, 0)
}

console.log(points(arr8))
console.log(points(arr9))
console.log(points(arr10))

// "Robin Singh" --> ["Robin", "Singh"]
const str = "Robin Singh"

const strToArr = a => {
return a.split(' ')
}

console.log(strToArr(str))

// [undefined,null,false,true,true,false,null,undefined], 2
arr11 = [undefined, null, false, true, true, false, null, undefined]

const countSheeps = a => {
return a.filter(Boolean).length
}

console.log(countSheeps(arr11))

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 3, 5, 7, 9]
arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const removeEveryOther = a => {
return a.filter(x=>x%2!==0)
}

console.log(removeEveryOther(arr12))

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// [10, -65]
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

const countPositivesSumNegatives = a => {
return a.reduce((arr,n) => {
if (n>0) arr[0]++
if (n<0) arr[1] += n
return arr
}, [0,0])
}

console.log(countPositivesSumNegatives(arr13))

// [82, 15, 6, 38, 35]
// [min, max, diff]
// [6, 82, -76]

const arr14 = [82, 15, 6, 38, 35]

const differenceInAges = ages => {
const a = Math.min(...ages)
const b = Math.max(...ages)
return [a,b,a-b];
}

console.log(differenceInAges(arr14))

// ['Algebra', 'history', 'Geometry', 'english']
// ['Algebra', 'english', 'Geometry', 'history']
const arr15 = ['Algebra', 'History', 'Geometry', 'English']

const sorter = arr => {
return arr.sort((a, b) => {
const aa = a.toLowerCase()
const bb = b.toUpperCase()
if (aa < bb) return 1
if (bb > aa) return -1
return 0
});
}

console.log(sorter(arr15))

// [1,3,5,7,9,11,12], [1,2,3,4,5,10,12]
// [1,2,3,4,5,7,9,10,11,12]
const arr16 = [1,3,5,7,9,11,12]
const arr17 = [1,2,3,4,5,10,12]

const mergeArrays = (arr1, arr2) => {
const a = [...new Set([...arr1,...arr2])]
return a.sort((a,b)=>a-b)
}

console.log(mergeArrays(arr16, arr17))

// [1,2,3,4] --> 2.5
const arr18 = [1,2,3,4]

const findAverage = a => {
return a.reduce((a,b)=>a+b)/a.length
}

console.log(findAverage(arr18))

// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

let x = 1
let n = 10

function countBy(x, n) {
let z = [];
for (let i=1;i<=n;i++) {
z.push(x*i)
}
return z;
}

console.log(countBy(x,n))

// [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]

const arr19 = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]

function isVow(a){
for (var i=0; i<a.length ; ++i)
{
var char = String.fromCharCode(a[i])
if ('aeiou'.indexOf(char) !== -1)
a[i] = char;
}

return a;
}

console.log(isVow(arr19))

// [1,2,3,4,5] --> 3 
const arr20 = [1,2,3,4,5]

function getAverage(marks){
return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

console.log(getAverage(arr20))

// [1,-4,7,12] => 1 + 7 + 12 = 20
const arr21 = [1,-4,7,12]
function positiveSum(arr) {
return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
console.log(positiveSum(arr21))

// [1,2,3,4,5], greater_than_9) -> false
const arr22 = [1,2,3,4,5]
const ff = function(v){return v<9}
function all( arr, fun ){
return arr.every(fun)
}
console.log(all(arr22,ff))

// 35231 => [1,3,2,5,3]
const Str1 = '35231'

function digitize(n) {
return String(n).split('').map(Number).reverse()
}

console.log(digitize(Str1))

// Сортировка выбором O(n²)
function Sort(a) {
let n = a.length
for (let i=0; i<n-1; i++){
let min = i
for (let j=i+1; j<n; j++){
	if (a[j] < a[min]) min = j
	[a[i], a[min]] = [a[min], a[i]]
}
}
return a
}

// Сортировка пузырьком O(n²)
function bubbleSort(a) {
let n = a.length;
for (let i = 0; i < n - 1; i++) {
for (j = 0; j < n - i; j++) {
	if (a[j] > a[j + 1]) {
		[a[j], a[j + 1]] = [a[j + 1], a[j]]
	}
}
}
return a
}

// Сортировка вставками O(n²)
function insertionSort(a) {
let n = a.length
for (let i = 0; i < n; i++) {
let v = a[i],
	j = i - 1
while (j >= 0 && a[j] > v) {
	a[j + 1] = a[j]
	j--;
}
a[j + 1] = v
}
return a;
};

// Быстрая сортировка O(n log n)
function quickSort(arr) {
if (arr.length < 2) return arr;
let pivot = arr[0];
const left = [];
const right = [];

for (let i = 1; i < arr.length; i++) {
if (pivot > arr[i]) {
	left.push(arr[i])
} else {
	right.push(arr[i])
}
}
return quickSort(left).concat(pivot, quickSort(right))
}

// Сортировка слиянием O(n log n)
function merge(left, right) {
let arr = []
while (left.length && right.length) {
if (left[0] < right[0]) {
	arr.push(left.shift())
} else {
	arr.push(right.shift())
}
}
return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
const half = Math.floor(array.length /2)
if (array.length <2){
return array
}
const left = array.splice(0, half)
return merge(mergeSort(left),mergeSort(array))
}

const arr = [2,10,5,44,10,5,1,0];

console.log(Sort([...arr]));
console.log(bubbleSort([...arr]));

<body>
<h1>Javascript</h1>
<h2>Base</h2>
<table>
<tr>
	<td>тег для работы кода js</td>
	<td>&#60;script></td>
</tr>

<tr>
	<td>типы скриптов</td>
	<td>type="text/javascript"</td>
</tr>

<tr>
	<td>внешние скрипты</td>
	<td>src="/path/to/script.js"</td>
</tr>

<tr>
	<td>вызов окна в браузере с предупреждением</td>
	<td>alert</td>
</tr>

<tr>
	<td>вызов окна с вопросом
		(Окно ОК ОТМЕНА)</td>
	<td>prompt</td>
</tr>

<tr>
	<td>вызов окна с подтвеждением
		(ОК ОТМЕНА)</td>
	<td>confirm</td>
</tr>

<tr>
	<td>комментарии</td>
	<td>// /* */</td>
</tr>

<tr>
	<td>строгий режим для устранения ошибок</td>
	<td>'use strict'</td>
</tr>

<tr>
	<td>консоль браузера</td>
	<td>F12</td>
</tr>

<tr>
	<td>переменные</td>
	<td>let const</td>
</tr>

<tr>
	<td>правильные имена переменных
	</td>
	<td>a z A Z 0 9 $ _</td>
</tr>

<tr>
	<td>типы данных</td>
	<td>
		<ul>
			<li>числа</li>
			<li>bigint</li>
			<li>числа с плавающей точкой</li>
			<li>NaN</li>
			<li>null</li>
			<li>undefined</li>
			<li>[]</li>
			<li>{}</li>
			<li>Symbol</li>
			<li>true false</li>
			<li>string</li>
			<li>typeof</li>
		</ul>
	</td>
</tr>

<tr>
	<td>перевод данных в строку, число, Boolean</td>
	<td>+ Number Boolean String</td>
</tr>

<tr>
	<td>операции</td>
	<td>
		<ul>
			<li>+ сложение</li>
			<li>- вычитание</li>
			<li>* умножение</li>
			<li>** возведение в степень</li>
			<li>% получение остатка</li>
			<li>++a инкремент</li>
			<li>a++ декремент</li>
		</ul>
	</td>
</tr>

<tr>
	<td>Побитовы операторы</td>
	<td>&#38; | ^ ~ <<>> >>></td>
</tr>

<tr>
	<td>Сравнение</td>
	<td>
		<=>= == === != !==
	</td>
</tr>

<tr>
	<td>условие
		несколько условий
		иначе</td>
	<td>if else if else</td>
</tr>

<tr>
	<td>тернарный</td>
	<td>усл ? true : false</td>
</tr>

<tr>
	<td>логика</td>
	<td>|| ||= &#38;&#38; &#38;&#38;= ! ?? ??=</td>
</tr>

<tr>
	<td>циклы</td>
	<td>while, do..while и for(..;..;..)</td>
</tr>

<tr>
	<td>кейсы</td>
	<td>switch() {case:}</td>
</tr>
</table>

<h2>Функции</h2>
<table>
<tr>
	<td>Создание функции</td>
	<td>let func = new Function([arg1, arg2, ...argN], functionBody);</td>
</tr>
<tr>
	<td>локальные переменные</td>
	<td>
		<pre>
function greet() {
const message = "Hello!"; 

// Локальная переменная
console.log(message);
}
greet(); // "Hello!"
// console.log(message); 
// Ошибка: message не определена
</pre>
	</td>
</tr>
<tr>
	<td>параметры</td>
	<td>
		<pre>
function sum(a, b) { // a и b — параметры
return a + b;
}
console.log(sum(2, 3)); // 5
</pre>
	</td>
</tr>

<tr>
	<td>параметры по умолчанию</td>
	<td>
		<pre>
function greet(name = "Guest") {
console.log(`Hello, ${name}!`);
}
greet(); // "Hello, Guest!"
greet("Alice"); // "Hello, Alice!"
</pre>
	</td>
</tr>

<tr>
	<td>возврат значения</td>
	<td>
		<pre>
function multiply(a, b) {
return a * b; 
// Возврат значения
}
const result = multiply(4, 5);
console.log(result); // 20
</pre>
	</td>
</tr>

<tr>
	<td>неименованная функция</td>
	<td>
		<pre>
const square = function(x) { 
// Функция без имени
return x * x;
};
console.log(square(4)); // 16
</pre>
	</td>
</tr>
<tr>
	<td>именованная функция</td>
	<td>
		<pre>

function factorial(n) { 
// Именованная функция
if (n &#60;= 1) return 1;
return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
</pre>
	</td>
</tr>

<tr>
	<td>стрелочные функции</td>
	<td>() => {}</td>
</tr>

<tr>
	<td>области видимости и замыкание</td>
	<td>
		<pre>
function outer() {
const outerVar = "I'm outside!";
function inner() { 
	 // Замыкание (видит outerVar)
		console.log(outerVar); // "I'm outside!"
}
return inner;
}
const closureFunc = outer();
closureFunc();
</pre>
	</td>
</tr>

<tr>
	<td>рекурсия функция вызывает сама себя для решения задачи, которая может быть разбита на более простые подзадачи. стек структура данных, которая хранит информацию о том, какие функции вызываются в данный момент. В JavaScript при вызове функции она помещается в стек, а после завершения — удаляетс</td>
	<td>
		<pre>
function countdown(n) { // Рекурсивная функция
if (n &#60;= 0) {
		console.log("Done!");
		return;
}
console.log(n);
countdown(n - 1); // Рекурсивный вызов
}
countdown(3);
// Вывод:
// 3
// 2
// 1
// Done!
</pre>
	</td>
</tr>
<tr>
	<td>Свойство «name»</td>
	<td>function sayHi() {
		alert("Hi");
		}

		alert(sayHi.name); // sayHi</td>
</tr>
<tr>
	<td>Свойство «length»</td>
	<td>function f1(a) {}
		function f2(a, b) {}

		alert(f1.length); // 1
		alert(f2.length); // 2</td>
</tr>
<tr>
	<td>Привязка контекста к функции</td>
	<td>bind</td>
</tr>
</table>

<h2>объекты</h2>
<table>
<tr>
	<td>ключи и значения</td>
	<td>
		<pre>
const obj = { name: 'John', age: 30 };
</pre>
	</td>
</tr>
<tr>
	<td>доступ к ключам и значениям</td>
	<td>
		<pre>
console.log(obj.name); // 'John'
console.log(obj['age']); // 30
</pre>
	</td>
</tr>
<tr>
	<td>вычисляемые свойства</td>
	<td>
		<pre>
const prop = 'language';
const user = { [prop]: 'JavaScript' };
console.log(user.language); // 'JavaScript'
</pre>
	</td>
</tr>
<tr>
	<td>проверка существования свойства</td>
	<td>
		<pre>
console.log('name' in obj); // true
console.log(obj.hasOwnProperty('age')); // true
</pre>
	</td>
</tr>
<tr>
	<td>цикл по ключам</td>
	<td>
		<pre>
for (const key in obj) {
console.log(key, obj[key]);
}
</pre>
	</td>
</tr>
<tr>
	<td>упорядочение свойств объекта</td>
	<td>
		<pre>
const codes = { 49: 'Germany', 41: 'Switzerland', 1: 'USA' };
// Числовые ключи сортируются, строковые - в порядке добавления
</pre>
	</td>
</tr>
<tr>
	<td>копирование по ссылке</td>
	<td>
		<pre>
const obj2 = obj;
obj2.name = 'Alice';
console.log(obj.name); // 'Alice'
</pre>
	</td>
</tr>
<tr>
	<td>клонирование объекта</td>
	<td>
		<pre>
const clone = Object.assign({}, obj);
const deepClone = JSON.parse(JSON.stringify(obj));
</pre>
	</td>
</tr>
<tr>
	<td>сборка мусора</td>
	<td>
		<pre>
let obj = { data: '...' };
obj = null; // Объект может быть удален сборщиком мусора
</pre>
	</td>
</tr>
<tr>
	<td>методы</td>
	<td>
		<pre>
const user = {
name: 'John',
greet() { console.log(`Hello, ${this.name}!`); }
};
user.greet(); // Hello, John!
</pre>
	</td>
</tr>
<tr>
	<td>this</td>
	<td>
		<pre>
function User(name) { this.name = name; }
const user = new User('John');
</pre>
	</td>
</tr>
<tr>
	<td>конструктор new</td>
	<td>
		<pre>
function User(name) { this.name = name; }
const user = new User('John');
</pre>
	</td>
</tr>
<tr>
	<td>проверка создания объекта</td>
	<td>
		<pre>
function User() { console.log(new.target); }
new User(); // [Function: User]
</pre>
	</td>
</tr>
<tr>
	<td>опциональная цепочка</td>
	<td>
		<pre>
console.log(user?.address?.street); // undefined вместо ошибки
</pre>
	</td>
</tr>
<tr>
	<td>перебор ключей значений и пар</td>
	<td>
		<pre>
Object.keys(obj);    // ['name', 'age']
Object.values(obj);  // ['John', 30]
Object.entries(obj); // [['name', 'John'], ['age', 30]]
</pre>
	</td>
</tr>
<tr>
	<td>деструктуризация</td>
	<td>
		<pre>
const { name, age } = obj;
console.log(name, age); // John 30
</pre>
	</td>
</tr>
<tr>
	<td>оператор расширения</td>
	<td>
		<pre>
const newObj = { ...obj, city: 'Paris' };
</pre>
	</td>
</tr>
<tr>
	<td>Флаги свойств</td>
	<td>
		<pre>
Object.getOwnPropertyDescriptor(obj, 'name');
// { value: 'John', writable: true, enumerable: true, configurable: true }
</pre>
	</td>
</tr>
<tr>
	<td>геттеры и сеттеры</td>
	<td>
		<pre>
const user = {
_name: 'John',
get name() { return this._name; },
set name(value) { this._name = value; }
};
</pre>
	</td>
</tr>
</table>
<h2>Symbol</h2>
<table>
<tr>
	<td>скрытые свойства</td>
	<td>
		<pre><code>const id = Symbol('id');
const user = {
name: 'John',
[id]: 123 // Скрытое свойство
};
console.log(user[id]); // 123</code></pre>
	</td>
</tr>
<tr>
	<td>символ в объекте</td>
	<td>
		<pre><code>const id = Symbol('id');
const obj = {
[id]: 'symbol value',
name: 'Object'
};
console.log(obj[id]); // 'symbol value'</code></pre>
	</td>
</tr>
<tr>
	<td>не в цикле</td>
	<td>
		<pre><code>const id = Symbol('id');
const obj = {
[id]: 'hidden',
name: 'Visible'
};

for (let key in obj) {
console.log(key); // только 'name'
}</code></pre>
	</td>
</tr>
<tr>
	<td>глобальные символы</td>
	<td>
		<pre><code>// Создание/получение глобального символа
const globalSym = Symbol.for('global');
console.log(Symbol.keyFor(globalSym)); // 'global'

// Проверка
const sameSym = Symbol.for('global');
console.log(globalSym === sameSym); // true</code></pre>
	</td>
</tr>
<tr>
	<td>ключ по символам</td>
	<td>
		<pre><code>const sym = Symbol('key');
const obj = {
[sym]: 'value',
name: 'Object'
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(key)]</code></pre>
	</td>
</tr>
</table>

<h2>Числа</h2>
<table>
<tr>
	<td>сокращенная запись нулей</td>
	<td>
		<pre><code>const billion = 1e9; // 1 000 000 000
const micro = 1e-6; // 0.000001
console.log(billion); // 1000000000</code></pre>
	</td>
</tr>
<tr>
	<td>двоичная восьмеричная шестнадцатиричная</td>
	<td>
		<pre><code>const binary = 0b11111111; // 255
const octal = 0o377; // 255
const hex = 0xff; // 255
console.log(binary, octal, hex); // 255 255 255</code></pre>
	</td>
</tr>
<tr>
	<td>перевод в строку</td>
	<td>
		<pre><code>const num = 255;
console.log(num.toString(16)); // 'ff'
console.log(num.toString(2)); // '11111111'
console.log(String(num)); // '255'</code></pre>
	</td>
</tr>
<tr>
	<td>округление чисел</td>
	<td>
		<pre><code>console.log(Math.floor(3.9)); // 3 (вниз)
console.log(Math.ceil(3.1)); // 4 (вверх)
console.log(Math.round(3.5)); // 4 (к ближайшему)
console.log(Math.trunc(3.9)); // 3 (отбросить дробную часть)</code></pre>
	</td>
</tr>
<tr>
	<td>бесконечность</td>
	<td>
		<pre><code>console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(isFinite(1 / 0)); // false</code></pre>
	</td>
</tr>
<tr>
	<td>ошибки</td>
	<td>
		<pre><code>console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004</code></pre>
	</td>
</tr>
<tr>
	<td>убрать нужно количество после точки и округлить</td>
	<td>
		<pre><code>const num = 12.34567;
console.log(num.toFixed(2)); // "12.35" (строка)
console.log(+num.toFixed(2)); // 12.35 (число)</code></pre>
	</td>
</tr>
<tr>
	<td>проверка на не число</td>
	<td>
		<pre><code>console.log(isNaN(NaN)); // true
console.log(isNaN("строка")); // true
console.log(Number.isNaN("строка")); // false</code></pre>
	</td>
</tr>
<tr>
	<td>проверка на число</td>
	<td>
		<pre><code>console.log(isFinite("123")); // true
console.log(isFinite("строка")); // false
console.log(Number.isInteger(123.0)); // true</code></pre>
	</td>
</tr>
<tr>
	<td>убрать все кроме целого числа</td>
	<td>
		<pre><code>console.log(parseInt("100px")); // 100
console.log(parseInt("12.3")); // 12
console.log(Math.trunc(12.3)); // 12</code></pre>
	</td>
</tr>
<tr>
	<td>убрать все кроме числа с точкой</td>
	<td>
		<pre><code>console.log(parseFloat("12.3em")); // 12.3
console.log(parseFloat("12.3.4")); // 12.3</code></pre>
	</td>
</tr>
<tr>
	<td>рандом</td>
	<td>
		<pre><code>console.log(Math.random()); // случайное число от 0 до 1
// Функция для получения случайного числа в диапазоне
function random(min, max) {
return min + Math.random() * (max - min);
}</code></pre>
	</td>
</tr>
<tr>
	<td>максимальное</td>
	<td>
		<pre><code>console.log(Math.max(3, 5, 1)); // 5
console.log(Math.max(...[3, 5, 1])); // 5 (с spread оператором)</code></pre>
	</td>
</tr>
<tr>
	<td>минимальное</td>
	<td>
		<pre><code>console.log(Math.min(3, 5, 1)); // 1
console.log(Math.min(...[3, 5, 1])); // 1 (с spread оператором)</code></pre>
	</td>
</tr>
<tr>
	<td>в степень</td>
	<td>
		<pre><code>console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8</code></pre>
	</td>
</tr>
</table>

<h2>Строки</h2>
<table>
<tr>
	<td>сложение строк</td>
	<td>
		<pre><code>const str1 = 'Hello';
const str2 = 'World';
console.log(str1 + ' ' + str2); // 'Hello World'
console.log(`${str1} ${str2}`); // 'Hello World' (шаблонные строки)</code></pre>
	</td>
</tr>
<tr>
	<td>типы строк</td>
	<td>
		<pre><code>const single = 'одинарные кавычки';
const double = "двойные кавычки";
const backticks = `обратные кавычки ${single}`;
console.log(backticks); // 'обратные кавычки одинарные кавычки'</code></pre>
	</td>
</tr>
<tr>
	<td>спецсимволы перенос табуляция</td>
	<td>
		<pre><code>console.log("Первая строка\nВторая строка");
console.log("1\t2\t3");
console.log("Экранирование: \\ \"");</code></pre>
	</td>
</tr>
<tr>
	<td>обращение к символам строки</td>
	<td>
		<pre><code>const str = 'Hello';
console.log(str[0]); // 'H'
console.log(str.charAt(1)); // 'e'
console.log(str.at(-1)); // 'o' (последний символ)</code></pre>
	</td>
</tr>
<tr>
	<td>неизменяемость строк</td>
	<td>
		<pre><code>let str = 'Hi';
str[0] = 'h'; // Ошибки нет, но строка не изменится
console.log(str); // 'Hi'</code></pre>
	</td>
</tr>
<tr>
	<td>изменение регистра</td>
	<td>
		<pre><code>console.log('Интерфейс'.toUpperCase()); // 'ИНТЕРФЕЙС'
console.log('Интерфейс'.toLowerCase()); // 'интерфейс'</code></pre>
	</td>
</tr>
<tr>
	<td>поиск подстроки</td>
	<td>
		<pre><code>const str = 'Widget with id';
console.log(str.indexOf('Widget')); // 0
console.log(str.indexOf('id')); // 1
console.log(str.lastIndexOf('id')); // 12</code></pre>
	</td>
</tr>
<tr>
	<td>проверка наличия в строке</td>
	<td>
		<pre><code>const str = 'Hello world';
console.log(str.includes('world')); // true
console.log(str.includes('word')); // false</code></pre>
	</td>
</tr>
<tr>
	<td>проверка начала и окончания</td>
	<td>
		<pre><code>const str = 'Hello world';
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('world')); // true</code></pre>
	</td>
</tr>
<tr>
	<td>срез строки</td>
	<td>
		<pre><code>const str = 'stringify';
console.log(str.slice(0, 5)); // 'strin'
console.log(str.slice(-4, -1)); // 'gif'</code></pre>
	</td>
</tr>
<tr>
	<td>сравнение</td>
	<td>
		<pre><code>console.log('a' > 'Z'); // true (коды символов)
console.log('Строка' === 'строка'); // false
console.log('Привет'.localeCompare('Пока')); // 1</code></pre>
	</td>
</tr>
</table>

<h2>Массивы</h2>
<table>
<tr>
	<td>создание массива</td>
	<td>
		<pre><code>const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']</code></pre>
	</td>
</tr>
<tr>
	<td>обращение к элементам</td>
	<td>
		<pre><code>const fruits = ['Яблоко', 'Апельсин', 'Груша'];
console.log(fruits[0]); // 'Яблоко'
fruits[2] = 'Груша'; // изменение элемента</code></pre>
	</td>
</tr>
<tr>
	<td>длина</td>
	<td>
		<pre><code>const arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 2; // укорачиваем массив
console.log(arr); // [1, 2]</code></pre>
	</td>
</tr>
<tr>
	<td>последние элементы</td>
	<td>
		<pre><code>const arr = [1, 2, 3];
console.log(arr.at(-1)); // 3 (последний элемент)
console.log(arr[arr.length - 1]); // 3 (альтернатива)</code></pre>
	</td>
</tr>
<tr>
	<td>получение последнего, добавление последнего, получение первого, добавление первого</td>
	<td>
		<pre><code>const arr = [1, 2];
arr.push(3); // [1, 2, 3] (добавить в конец)
arr.pop(); // [1, 2] (удалить последний)
arr.unshift(0); // [0, 1, 2] (добавить в начало)
arr.shift(); // [1, 2] (удалить первый)</code></pre>
	</td>
</tr>
<tr>
	<td>перебор</td>
	<td>
		<pre><code>const arr = ['Яблоко', 'Апельсин', 'Груша'];

// for..of
for (const fruit of arr) {
console.log(fruit);
}

// forEach
arr.forEach((item, index, array) => {
console.log(`${index}: ${item}`);
});</code></pre>
	</td>
</tr>
<tr>
	<td>многомерные</td>
	<td>
		<pre><code>const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
console.log(matrix[1][1]); // 5</code></pre>
	</td>
</tr>
<tr>
	<td>перевод в строку</td>
	<td>
		<pre><code>const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
console.log(arr.join('; ')); // "1; 2; 3"</code></pre>
	</td>
</tr>
<tr>
	<td>сравнение по ссылке</td>
	<td>
		<pre><code>const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2); // false (разные объекты)
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true</code></pre>
	</td>
</tr>
<tr>
	<td>вырезание</td>
	<td>
		<pre><code>const arr = ['Я', 'изучаю', 'JavaScript'];
const removed = arr.splice(1, 1); // ['изучаю']
console.log(arr); // ['Я', 'JavaScript']

const sliced = arr.slice(0, 1); // ['Я'] (не изменяет исходный массив)</code></pre>
	</td>
</tr>
<tr>
	<td>объединение</td>
	<td>
		<pre><code>const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
console.log([...arr1, ...arr2]); // [1, 2, 3, 4] (spread оператор)</code></pre>
	</td>
</tr>
<tr>
	<td>перебор</td>
	<td>
		<pre><code>const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);
console.log(newArr); // [2, 4, 6]</code></pre>
	</td>
</tr>
<tr>
	<td>поиск</td>
	<td>
		<pre><code>const users = [
{id: 1, name: 'Вася'},
{id: 2, name: 'Петя'}
];

const user = users.find(item => item.id == 1);
console.log(user.name); // 'Вася'

console.log(users.findIndex(item => item.id == 2)); // 1</code></pre>
	</td>
</tr>
<tr>
	<td>фильтр</td>
	<td>
		<pre><code>const users = [
{id: 1, name: 'Вася'},
{id: 2, name: 'Петя'}
];

const filtered = users.filter(item => item.id < 2);
console.log(filtered.length); // 1</code></pre>
	</td>
</tr>
<tr>
	<td>преобразование</td>
	<td>
		<pre><code>const lengths = ['Бильбо', 'Гэндальф'].map(item => item.length);
console.log(lengths); // [6, 8]

const numbers = ['1', '2', '3'].map(Number);
console.log(numbers); // [1, 2, 3]</code></pre>
	</td>
</tr>
<tr>
	<td>сортировка</td>
	<td>
		<pre><code>const arr = [1, 2, 15];
arr.sort(); // [1, 15, 2] (по умолчанию как строки)
arr.sort((a, b) => a - b); // [1, 2, 15] (правильная сортировка чисел)</code></pre>
	</td>
</tr>
<tr>
	<td>разворот</td>
	<td>
		<pre><code>const arr = [1, 2, 3];
console.log(arr.reverse()); // [3, 2, 1]</code></pre>
	</td>
</tr>
<tr>
	<td>работа со всеми элементами</td>
	<td>
		<pre><code>const arr = [1, 2, 3];
console.log(arr.every(item => item > 0)); // true
console.log(arr.some(item => item > 2)); // true
console.log(arr.reduce((sum, item) => sum + item, 0)); // 6</code></pre>
	</td>
</tr>
<tr>
	<td>проверка на массив</td>
	<td>
		<pre><code>console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false</code></pre>
	</td>
</tr>
<tr>
	<td>деструктуризация</td>
	<td>
		<pre><code>const arr = ['Иван', 'Иванов'];
const [firstName, surname] = arr;
console.log(firstName); // 'Иван'

// Пропуск элементов
const [first, , third] = ['первый', 'второй', 'третий'];</code></pre>
	</td>
</tr>
<tr>
	<td>оператор расширения</td>
	<td>
		<pre><code>const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

function sum(a, b, c) { return a + b + c; }
console.log(sum(...[1, 2, 3])); // 6</code></pre>
	</td>
</tr>
</table>

<h2>map</h2>
<table>
<tr>
	<td>Если нужно быстро искать что-то по ключу или хранить связанные данные</td>
	<td>
<pre>const userMap = new Map();userMap.set('user1', {name: 'Ivan', age: 30});
</pre></td>
</tr>
</table>

<h2>set</h2>
<table>
<tr>
	<td>Если нужно просто собрать уникальные элементы</td>
	<td>
<pre>const tags = new Set();tags.add('javascript');tags.add('programming');</pre></td>
</tr>
</table>

<h2>WeakMap</h2>
<table>
<tr>
	<td>ключи в WeakMap должны быть объектами (не примитивами). если на объект больше нет ссылок, он может быть автоматически удалён сборщиком мусора. Когда нужно связать данные с объектом, и при этом важно, чтобы эти данные исчезли, когда объект больше не нужен.</td>
	<td>
		<pre>const wm = new WeakMap();const obj = {};wm.set(obj, 'some data');</pre></td>
</tr>
</table>

<h2>WeakSet</h2>
<table>
<tr>
	<td>Это похожий на Set, который хранит только объекты.
		Также не "держит" объекты в памяти — если на объект больше нет ссылок, он может быть удалён сборщиком мусора. В отличие от обычного Set, в WeakSet нельзя перебирать элементы или получать их список</td>
	<td>
		<pre>const ws = new WeakSet();const obj = {};ws.add(obj);</pre></td>
</tr>
</table>

<h2>Дата и время</h2>
<table>
<tr>
	<td>Отображение текущей даты и времени, Запись времени событий, Расчёты интервалов и продолжительности, Работа с таймерами и задержками</td>
	<td>
<pre>const startTime = new Date();
		console.log(`Стартовое время: ${startTime.toLocaleString()}`);
</pre></td>
</tr>
</table>

<h2>Таймеры</h2>
<table>
<tr>
	<td>для выполнения отложенных или повторяющихся задач используются функции планирования — setTimeout и setInterval</td>
	<td>
<pre>console.log("Начало");

		setTimeout(() => {
		console.log("Через 2 секунды");
		}, 2000);

		console.log("Конец");
</pre></td>
</tr>
</table>

<h2>Формат JSON</h2>
<table>
<tr>
	<td>Передача данных между сервером и клиентом (например, через API).
		Хранение настроек или данных в файлах.
		Обмен информацией между системами.</td>
	<td></td>
</tr>
<tr>
	<td>объект в JSON</td>
	<td>const user = {
		name: "Иван",
		age: 30,
		isAdmin: false
		};

		const jsonString = JSON.stringify(user);
		console.log(jsonString); // '{"name":"Иван","age":30,"isAdmin":false}'</td>
</tr>
<tr>
	<td>JSON-строки обратно в объект — JSON.parse()</td>
	<td>
<pre>const jsonString = '{"name":"Иван","age":30,"isAdmin":false}';

		const userObject = JSON.parse(jsonString);
		console.log(userObject.name); // Иван
		console.log(userObject.age); // 30
</pre></td>
</tr>
</table>


<h2>Декораторы</h2>
<table>
<tr>
	<td>функция, которая принимает другую функцию и расширяет или изменяет её поведение, не изменяя исходный код функции</td>
	<td></td>
</tr>
</table>

<h2>call apply</h2>
<table>
<tr>
	<td>(call/apply)
		Эти методы позволяют вызвать функцию с явно заданным значением this и передать аргумент</td>
	<td>
<pre>const person = {
		firstName: "Иван",
		sayHi() {
		console.log(`Привет, я ${this.firstName}`);
		}
		};

		const anotherPerson = { firstName: "Мария" };

		// Используем call
		person.sayHi.call(anotherPerson); // Привет, я Мария

		// Используем apply
		person.sayHi.apply(anotherPerson); // Привет, я Мария
</pre></td>
</tr>
</table>

<h2>bind</h2>
<table>
<tr>
	<td>Создаёт новую функцию с привязанным контекстом</td>
	<td>
<pre>const person = {
		name: "Боб"
		};

		function sayName() {
		console.log(this.name);
		}

		const boundSayName = sayName.bind(person);
		boundSayName(); // Боб

		sayName.call(person); // Боб
		sayName.apply(person); // Боб
</pre></td>
</tr>
</table>

<h2>Геттер Сеттер</h2>
<table>
<tr>
	<td>Геттер — функция, которая вызывается при чтении свойства.
Сеттер — функция, которая вызывается при присвоении значения свойству.</td>
	<td></td>
</tr>
</table>

<h2>прототипное наследование</h2>
<table>
<tr>
	<td>Объект — это коллекция свойств.
Прототип — объект, от которого наследуются свойства другого объекта.
Цепочка прототипов — последовательность объектов, по которым ищутся свойства.
Каждый объект в JavaScript имеет внутреннее свойство [[Prototype]], которое ссылается на другой объект (или null).</td>
	<td>
<pre>const animal = {
eat() {
console.log("Кушает");
}
};

const dog = Object.create(animal);
dog.bark = function() {
console.log("Гав-гав");
};

dog.eat(); // "Кушает" — метод из прототипа
dog.bark(); // "Гав-гав"
</pre></td>
</tr>
</table>

<h2>prototype</h2>
<table>
<tr>
	<td>Все объекты, созданные через new F(), имеют внутреннее свойство [[Prototype]], которое ссылается на F.prototype.
Это означает, что свойства и методы, добавленные в F.prototype, доступны всем экземплярам</td>
	<td>
<pre>
function Person(name) {
this.name = name;
}

Person.prototype.sayHello = function() {
console.log(`Привет, я ${this.name}`);
};

const alice = new Person("Алиса");
alice.sayHello(); // "Привет, я Алиса"
</pre></td>
</tr>
</table>

<h2>F.prototype</h2>
<table>
<tr>
	<td>Все объекты, созданные через new F(), имеют внутреннее свойство [[Prototype]], которое ссылается на F.prototype.
Это означает, что свойства и методы, добавленные в F.prototype, доступны всем экземплярам</td>
	<td>
<pre>function Person(name) {
this.name = name;
}

console.log(Person.prototype); // объект, связанный с функцией
</pre></td>
</tr>
</table>

<h2>Встроенные прототипы</h2>
<table>
<tr>
	<td>JavaScript ищет свойство .method. Если его нет прямо в объекте, он ищет в цепочке прототипов — начиная с объекта и поднимаясь по цепочке до тех пор, пока не найдёт или не достигнет конца (null).

Это называется прототипным наследованием.</td>
	<td>Object	Object.prototype	Методы для работы с объектами: hasOwnProperty(), toString(), valueOf() и др.
Array	Array.prototype	Методы для массивов: push(), pop(), map(), filter() и др.
Function	Function.prototype	Методы для функций: call(), apply(), bind()
String	String.prototype	Методы строк: slice(), toUpperCase(), indexOf() и др.
Number	Number.prototype	Методы чисел: например, для обёрнутых чисел (редко используют)
Boolean	Boolean.prototype	Методы булевых значений (редко используют)
Date	Date.prototype	Методы работы с датами: getTime(), toISOString() и др.</td>
</tr>
</table>

<h2>__proto__</h2>
<table>
<tr>
	<td>Это устаревшее (но широко поддерживаемое) свойство, которое указывает на внутренний прототип объекта.
В современных стандартах рекомендуется использовать функции и методы для работы с прототипами.</td>
	<td>
<pre>const obj = { a: 1 }; // Нет явного свойства __proto__, но есть внутренний прототип
console.log(obj.__proto__); // Object.prototype
</pre></td>
</tr>
</table>

<h2>Класс: базовый синтаксис</h2>
<table>
<tr>
	<td>интаксический сахар над прототипным наследованием, который делает работу с объектами более удобной и похожей на классические ООП-языки</td>
	<td>
<pre>
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
console.log(`Привет! Меня зовут ${this.name}.`);
}
}
</pre>
	</td>
</tr>
</table>

<h2>Обработка ошибок</h2>
<table>
<tr>
	<td>Обработка ошибок позволяет управлять ситуациями, когда в программе происходит исключительная ситуация (например, деление на ноль, неправильные данные, сбой сети и т.д.), чтобы программа не завершалась аварийно и могла корректно реагировать</td>
	<td>
<pre>
try {
// Код, который может вызвать ошибку
} catch (error) {
// Обработка ошибки
}
</pre>
	</td>
</tr>
</table>

<h2>Промисы</h2>
<table>
<tr>
	<td>это объект, представляющий результат асинхронной операции, который может завершиться успешно (resolve) или с ошибкой (reject)</td>
	<td>
<pre>
const promise = new Promise((resolve, reject) => {
// Асинхронная операция
if (успех) {
resolve(данные); // успешно завершено
} else {
reject(ошибка); // произошла ошибка
}
});
</pre>
	</td>
</tr>
</table>

<h2>async/await</h2>
<table>
<tr>
	<td>async перед функцией делает её асинхронной и возвращает промис.
await приостанавливает выполнение функции до получения результата промиса.</td>
	<td>
<pre>
async function main() {
try {
const data = await fetchData();
console.log(data);
} catch (err) {
console.error('Ошибка:', err);
}
}
main();
</pre>
	</td>
</tr>
</table>

<h2>Модули</h2>
<table>
<tr>
	<td>Экспортировать — делиться функциями, переменными или классами из файла.
Импортировать — подключать экспортированные элементы в другой файл.</td>
	<td>
<pre>
// файл math.js
export const pi = 3.14;

export function sum(a, b) {
return a + b;
}

// или экспортировать всё сразу
const name = 'Модуль';
export { name };
</pre>
	</td>
</tr>
</table>

<h2>Браузерное окружение, спецификации</h2>
<table>
<tr>
	<td>Рендеринг движок — отвечает за отображение HTML, CSS и JavaScript.
JavaScript движок — интерпретирует и выполняет скрипты (например, V8 в Chrome, SpiderMonkey в Firefox).
API браузера — набор интерфейсов для взаимодействия с браузером (DOM, Fetch API, Web Storage, WebSockets и др.).
Интерфейс пользователя — вкладки, адресная строка, кнопки навигации</td>
	<td>
<pre>
Fetch API
Современный интерфейс для выполнения HTTP-запросов.
Замена XMLHttpRequest.
Web APIs
Дополнительные интерфейсы для работы с браузером:

Web Storage API (localStorage, sessionStorage)
WebSockets
Canvas API
Web Workers
Geolocation API
</pre>
	</td>
</tr>
</table>

<h2>DOM-дерево</h2>
<table>
<tr>
	<td>Позволяет динамически изменять страницу без перезагрузки.
Основа для работы с JavaScript в браузере.
Помогает понять, как браузер отображает страницу.</td>
	<td>
<pre>
document
├── html
	├── head
			 └── 
Получать узлы (getElementById, querySelector)
Изменять содержимое (innerHTML, textContent)
Добавлять или удалять узлы (appendChild, removeChild)
Изменять атрибуты (setAttribute, removeAttribute)
</pre>
	</td>
</tr>
</table>

<h2>События</h2>
<table>
<tr>
	<td>это действия или ситуации, которые происходят в браузере и на которые можно реагировать с помощью JavaScript. Они позволяют создавать интерактивные и динамичные веб-страницы.</td>
	<td>
<pre>
клик мыши (click)
наведение курсора (mouseover)
нажатие клавиши (keydown, keyup)
загрузка страницы (load)
изменение формы (change)
отправка формы (submit)
</pre>
	</td>
</tr>
</table>

<h2>Интерфейсные события</h2>
<table>
<tr>
	<td>это особый тип событий, которые связаны с взаимодействием пользователя с элементами интерфейса страницы. Они позволяют отслеживать и реагировать на действия пользователя, связанные с управлением интерфейсом.</td>
	<td>
<pre>
load	Загрузка документа или ресурса	Выполняется, когда страница полностью загружена
resize	Изменение размера окна браузера	Адаптация интерфейса при изменении размера окна
scroll	Прокрутка страницы или элемента	Подгрузка данных при прокрутке
focus	Фокусировка на элементе	Ввод текста в поле формы
blur	Потеря фокуса	Валидация формы после ухода из поля
select	Выделение текста внутри элемента	Обработка выделения текста
change	Изменение значения элемента (например, формы)	Обновление данных при выборе опции
input	Ввод данных в поле ввода	Реакция на каждое изменение текста
</pre>
	</td>
</tr>
</table>

<h2>Формы, элементы управления</h2>
<table>
<tr>
	<td>структурированные блоки для сбора пользовательских данных, такие как текстовые поля, кнопки, чекбоксы и другие элементы. Они позволяют пользователю вводить информацию, которая затем может быть отправлена на сервер или обработана на стороне клиента</td>
	<td>
<pre>
&#60;form action="/submit" method="POST">
<!-- элементы управления -->
&#60;/form>
</pre>
	</td>
</tr>
</table>

<h2>Загрузка документа и ресурсов</h2>
<table>
<tr>
	<td>Можно запускать скрипты после того, как DOM готов (DOMContentLoaded), чтобы избежать ошибок обращения к несуществующим элементам.
Для выполнения действий после полной загрузки страницы (например, запуск анимаций или обработка изображений) используют событие load.</td>
	<td>
<pre>
DOMContentLoaded	Документ (HTML)	Происходит, когда DOM полностью загружен и разобран, без ожидания внешних ресурсов.
load	Документ и все ресурсы (изображения, скрипты)	Происходит, когда вся страница и все ресурсы полностью загружены.
</pre>
	</td>
</tr>
</table>

<h2>Сетевые запросы</h2>
<table>
<tr>
	<td>обращения к серверу для получения или отправки данных. Они позволяют веб-страницам динамически взаимодействовать с сервером без перезагрузки страницы Асинхронность — все сетевые запросы выполняются асинхронно, что позволяет не блокировать интерфейс.
Обработка ошибок — обязательно проверяйте статус ответа и используйте .catch() для обработки ошибок.
CORS — при работе с внешними API убедитесь, что сервер разрешает кросс-доменные запросы.</td>
	<td>
<pre>
XMLHttpRequest	Старый способ, поддерживает асинхронные запросы	Создание и отправка AJAX-запросов
fetch()	Современный API для выполнения HTTP-запросов	Простая и удобная работа с асинхронными запросами
&#60;script> с src	Загрузка скриптов или данных через подключение внешних ресурсов	Вставка внешних скриптов или JSONP (устаревший)
</pre>
	</td>
</tr>
</table>

<h2>Методы запросов</h2>
<table>
<tr>
	<td>GET — получение данных
POST — отправка данных на сервер
PUT — обновление данных
DELETE — удаление данных</td>
	<td>
<pre>
fetch('https://api.example.com/add', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ name: 'Иван', age: 30 })
})
.then(response => response.json())
.then(data => console.log(data));
</pre>
	</td>
</tr>
</table>

<h2>Хранение данных в браузере</h2>
<table>
<tr>
	<td>Браузеры предоставляют различные механизмы для хранения данных на стороне клиента, что позволяет сохранять информацию между сессиями, ускорять работу приложений и обеспечивать офлайн-доступ</td>
	<td>
<pre>
Cookies	Маленькие файлы, отправляемые на сервер при каждом запросе	До 4 КБ	До удаления или истечения срока
localStorage	Простое хранилище ключ-значение, доступное на клиенте	Обычно до 5 МБ	Постоянно, пока не удалено
sessionStorage	Временное хранилище для текущей сессии браузера	Обычно до 5 МБ	Пока открыта вкладка или окно
IndexedDB	Более сложное и мощное хранилище для структурированных данных	Гигабайты и более	Постоянно, пока не удалено
</pre>
	</td>
</tr>
</table>

<h2>Веб компоненты</h2>
<table>
<tr>
	<td>это стандартный набор технологий, позволяющих создавать переиспользуемые, инкапсулированные пользовательские элементы для веб-страниц и приложений</td>
	<td>
<pre>
Custom Elements	Создание собственных HTML-элементов	Определение новых тегов и их поведения
Shadow DOM	Инкапсуляция стилей и разметки внутри компонента	Защита стилей и структуры компонента от внешних воздействий
HTML Templates	Шаблоны разметки, которые можно клонировать и вставлять	Повторное использование разметки без рендеринга сразу
&#60;my-button>&#60;/my-button>
const button = document.createElement('button');
</pre>
	</td>
</tr>
</table>

<h2>Регулярные выражения</h2>
<table>
<tr>
	<td>мощный инструмент для поиска, проверки и обработки текста по заданным шаблонам. Они позволяют находить совпадения, заменять части текста и валидировать ввод.</td>
	<td>
<pre>
.	Любой символ (кроме новой строки)	/a.b/ — совпадет с aab, a1b
^	Начало строки	/^Hello/ — совпадет с Hello world
$	Конец строки	/world$/ — совпадет с Hello world
*	0 или более повторений предыдущего символа	/ab*/ — совпадет с a, ab, abb
+	1 или более повторений	/ab+/ — совпадет с ab, abb, но не с a
?	0 или 1 повторение	/colou?r/ — совпадет с color, colour
{n}	ровно n повторений	/a{3}/ — совпадет с aaa
{n,m}	от n до m повторений	/a{2,4}/ — совпадет с aa, aaa, aaaa
[abc]	любой из указанных символов	/[aeiou]/ — гласные буквы
(pattern)	группировка, захват	/(\d{3})-(\d{2})/ — захватит код вида 123-45
</pre>
	</td>
</tr>
</table>

<h2>CSS для JavaScript-разработчика</h2>
<table>
<tr>
	<td>Работа с атрибутом style</td>
	<td>
<pre>
const element = document.querySelector('.my-element');
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
</pre>
	</td>
</tr>
</table>

