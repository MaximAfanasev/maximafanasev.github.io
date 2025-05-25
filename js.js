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

let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

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
alert(user.name); // 'Pete',

let a = {};
let b = a;
alert( a == b ); // true
alert( a === b ); // true

let a = {};
let b = {};
alert( a == b ); // false














