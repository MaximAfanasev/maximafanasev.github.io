"use strict";

let message
message = 'hello'
console.log(message) // hello

let hello = message
console.log(hello) // hello

let $ = 1
let _ = 2
console.log($, _) // 1 2

const COLOR_RED = '#F00'
console.log(COLOR_RED) // #F00

let number = 123
console.log(number) // 123
console.log(1 / 0) // Infinity
console.log(Infinity) // Infinity
console.log('a' / 2) // NaN
console.log(NaN + 1) // NaN
console.log(NaN * 2) // NaN
console.log(123n) // 123n
console.log('a') // a
console.log("a") // a
console.log(`a`) // a
console.log(`${COLOR_RED}`) // #F00
console.log(`${1+2}`) // 3
console.log(4 > 1) // true
console.log(4 < 1) // false
console.log(null) // null
console.log(undefined) // undefined
console.log(typeof (5)) // number
console.log(typeof (10n)) // bigint
console.log(typeof (true)) // boolean
console.log(typeof ('a')) // string
console.log(typeof (`1+2`)) // string
console.log(typeof (NaN)) // number
console.log(typeof (null)) // object
console.log(typeof (undefined)) // undefined
console.log(typeof (Math)) // object
console.log(typeof (Symbol('id'))) // symbol

let result = prompt('сколько лет?', 100)
console.log(`${result}`)

let result = confirm('OK?')
alert(result)

let value = true
console.log(typeof (value)) // boolean
value = String(value)
console.log(typeof (value)) // string
value = Number(value)
console.log(typeof (value)) // number

console.log(typeof ('3' / '2')) // number
console.log(typeof ('a' / 2)) // number
console.log(Number('  a  ')) // NaN
console.log(Number('123z')) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(Boolean('a')) // true
console.log(Boolean('')) // false
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false


let x = 1
x = -x
console.log(x) // -1

console.log(5 % 2) // 2 2 1 - берет остаток от деления
console.log(8 % 3) // 2
console.log(8 % 4) // 0

console.log(2 ** 2) // 4
console.log(4 ** (1 / 2)) // корень

console.log('a' + 'b') // 'ab'
console.log('1' + 2) // '12'
console.log(2 + 2 + '1') // 4 + '1' = '41'
console.log(6 - '2') // 4

x = 1
console.log(+x) // 1
console.log(+true) // 1
console.log(+false) // 0
console.log(+'') // 0
console.log()

let a = '5'
let b = '3'
console.log(+a + +b) // 8

let c = 3 - (a = b + 1) // -28
console.log(c)

let d = c * 2 // -56
console.log(d)

let e = 1
e++
console.log(e) // 2

e--
console.log(e) // 1

	++e
console.log(e) // 2 сразу увеличивает

a = 1 + 2, 3 + 4
console.log(a) // 3

a = (1 + 2, 3 + 4)
console.log(a) // 7


console.log(2 != 1) // true
console.log(2 == 1) // false
console.log(0 == false) // true
console.log(null == undefined) // true
console.log(null === undefined) // false
console.log('---') // 
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null === 0) // false
console.log(null >= 0) // true
console.log('---') // 
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

if (0) {
	console.log('f') // ничего
} else if (1) {
	console.log('b') // b
} else {
	console.log('c') // ничего
}
if (1) {
	console.log('t') // t
}
let a = 'x' ? true : false
console.log(a) // true

a = 0 ? true : false
console.log(a) // false

let x = 11
let b = x > 10 ? true : false
console.log(b) // true

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(1 || 0); // 1
console.log(true || 'a'); // true
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
console.log(undefined || null || 0); // 0 посл

let a = 0
a || = 'x'
console.log(a) // x

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

console.log(!true) // false
console.log(!!true) // true

console.log(!0) // true
console.log(!!0) // false


let a
console.log(a ?? 'x') // x

a = 'b'
console.log(a ?? 'x') // b

let i = 0
while (i < 3) {
	console.log('a') // a a a
	i++
}

i = 0
do {
	console.log('b') // b b b
	i++
} while (i < 3)

for (let i = 0; i <= 3; i++) {
	console.log(i) // 0 1 2 3
}

let с = 2 + 2;

switch (с) {
	case 3:
		console.log('Маловато');
		break;
	case 4:
		console.log('В точку!');
		break;
	case 5:
		console.log('Перебор');
		break;
	default:
		console.log("Нет таких значений");
}

function showMessage() {
  alert( 'Всем привет!' );
}

showMessage();
showMessage();




let userName = 'Вася';

function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}

showMessage(); // Привет, Вася




