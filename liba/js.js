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

console.log() // NaN
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
}
if (1) {
	console.log('t') // t
}
