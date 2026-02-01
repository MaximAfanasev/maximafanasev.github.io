"use strict";

'a' // a

(3 +
1
+ 2); // 6

let a;
a = 'a'; // a

let $ = 1;
let _ = 2;
$ + _; // 3

const A = "F" // F

1/0 // Infinity
"a"/2 // NaN
NaN+1 // NaN
3*NaN // NaN
"a"/2-1 // NaN

typeof(1n) //bingint

"a"
'a'
`${str}` // a
`${1 + 2}` // результат: 3

4 > 1 // true

a // undefined
typeof 5 // number
typeof(5) // number

typeof 50 + " a" // "number a"
typeof (50 + " a") // "string"

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "a" // "string"
typeof Symbol("a") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

//let a = prompt('Сколько тебе лет?', 100);
//console.log(`Тебе ${a} лет!`); // Тебе 100 лет!

//let a = confirm("Ты здесь главный?");
//console.log( a ); // true, если нажата OK

typeof true // boolean
typeof String(true) // string

"6" / "2" // 3
Number("1"); // 1

Number("a") // NaN

Number("   123   ") // 123
Number("123z") // NaN
Number(true) // 1
Number(false) // 0

Boolean(1) // true
Boolean(0) // false
Boolean("Привет!") // true
Boolean("") // false

let x = 1;
x = -x; // -1

let x = 1, y = 3;
y - x // 2, бинарный минус вычитает значения

5 % 2 // 1, остаток от деления 5 на 2
8 % 3 // 2, остаток от деления 8 на 3
8 % 4 // 0, остаток от деления 8 на 4

2 ** 2 // 2² = 4
2 ** 3 // 2³ = 8
2 ** 4 // 2⁴ = 16
4 ** (1/2) // 2

"a" + "b" // ab

'1' + 2 // "12"
2 + '1' // "21"

2 + 2 + '1' // 41

6 - '2' // 4
'6' / '2' // 3

let x = 1
+x // 1

let y = -2
+y // -2
+true // 1
+""   // 0
+"2" + +"3" // 5

let x = 2 * 2 + 1
x // 5

let a = 1
let b = 2
let c = 3 - (a = b + 1)
a // 3
c // 0

let a, b, c;
a = b = c = 2 + 2;
a // 4
b // 4
c // 4

let a = 1
let b = ++a
b // 2

let a = 1
let b = a++
b // 1

// AND(и) ( & )
// OR(или) ( | )
// XOR(побитовое исключающее или) ( ^ )
// NOT(не) ( ~ )
// LEFT SHIFT(левый сдвиг) ( << )
// RIGHT SHIFT(правый сдвиг) ( >> )
// ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

a = (1 + 2, 3 + 4) // 7
a = 1 + 2, 3 + 4 // 3

2 > 1  // true (верно)
2 == 1 // false (неверно)
2 != 1 // true (верно)

let result = 5 > 4 // true

'Я' > 'А' // true
'2' > 1 // true
'01' == 1 // true

true == 1 // true
false == 0 // true
0 == false // true
'' == false // true
0 === false // false
null === undefined // false
null == undefined // true
null > 0  // false
null == 0 // false
null >= 0 // true
undefined > 0 // false
undefined < 0 // false
undefined == 0 // false

