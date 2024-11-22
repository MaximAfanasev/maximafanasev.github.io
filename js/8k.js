const f = a => {
  return a.filter(x => x % 2 === 0)
}
console.log(f([1, 2, 3, 4, 5, 6], 2)) // [2, 4, 6]

const f2 = (a, b) => {
  return [...a, ...b].reduce((a, b) => a + b)
}
console.log(f2([1, 2, 3], [4, 5, 6])) // 21

const f3 = a => {
  return [...new Set(a)]
}
console.log(f3([1, 2, 1, 1, 3, 2])) // [1, 2, 3]

arr6 = ['0', '1', '2', '3', '4', '5']
const f4 = a => {
  return arr6[a % 6]
}
console.log(f4(7)) // ['0', '1', '2', '3', '4', '5'] '1'

const f5 = a => {
  return a.filter(x => typeof x === 'number').reduce((a, b) => a + b).toString(2)
}
console.log(f5([1, 2, 'a'])) // '11' (двоичная система)

const f6 = a => {
  return a.map(x => -x)
}
console.log(f6([1, -2, 3, -4, 5])) // [-1, 2, -3, 4, -5]

const f7 = a => {
  return a.split(' ')
}
console.log(f7("Robin Singh")) // ["Robin", "Singh"]

const f8 = a => {
  return a.filter(Boolean).length
}
console.log(f8([undefined, null, false, true, true, false, null, undefined])) // 2

const f9 = a => {
  return a.filter((x, i) => i % 2 === 0)
}
console.log(f9([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [1, 3, 5, 7, 9]

const f10 = a => {
  const m = Math.min(...a)
  const mm = Math.max(...a)
  return [m, mm, m - mm]
}
console.log(f10([82, 15, 6, 38, 35])) // [min, max, diff]

const f11 = (arr1, arr2) => {
  const a = [...new Set([...arr1, ...arr2])]
  return a.sort((a, b) => a - b)
}
console.log(f11([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])) // [1,2,3,4,5,7,9,10,11,12]

const f12 = a => {
  return a.reduce((a, b) => a + b) / a.length
}
console.log(f12([1, 2, 3, 4])) // 2.5

function f13(a) {
  return Math.floor(a.reduce((a, b) => a + b) / a.length)
}
console.log(f13([1, 2, 3, 4, 5])) // 3 

const f14 = a => {
  return a.reduce((x, y) => {
    return x += y[0] > y[2] ?
      3 : y[0] < y[2] ? 0 : 1
  }, 0)
}
console.log(f14(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])) // 30
console.log(f14(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])) // 10
console.log(f14(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])) // 0

const f15 = a => {
  return a.reduce((arr, n) => {
    if (n > 0) arr[0]++
    if (n < 0) arr[1] += n
    return arr
  }, [0, 0])
}
console.log(f15([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]

const f16 = a => {
  return a.sort((a, b) => {
    const aa = a.toLowerCase()
    const bb = b.toLowerCase()
    if (aa < bb) return 1
    if (bb > aa) return -1
    return 0
  })
}
console.log(f16(['Algebra', 'History', 'Geometry', 'English'])) // ['Algebra', 'english', 'Geometry', 'history']

function f17(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }
  return z;
}
console.log(f17(1, 10)) // [1,2,3,4,5,6,7,8,9,10]

function f18(a) {
  for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1) {
      a[i] = char
    }
  }
  return a
}
console.log(f18([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])) // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106] aeiou

function f19(a) {
  return a.reduce((a, b) => a + (b > 0 ? b : 0))
}
console.log(f19([1, -4, 7, 12])) // 1 + 7 + 12 = 20

const ff = function (v) {
  return v < 9
}

function f20(a, fun) {
  return a.every(fun)
}
console.log(f20([1, 2, 3, 4, 5], ff)) // false

function f21(a) {
  return a.split('').map(Number).reverse()
}
console.log(f21('35231')) // [1,3,2,5,3]

const f22 = num => {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
console.log(f22(3)) // 1+2+3 -> 6 

function f23(dna) {
  return dna.split('').map(x => x === 'T' ? x = 'U' : x).join('')
}

function f24(dna) {
  return dna.replace(/T/g, 'U');
}
console.log(f23("GCAT")) // "GCAU"
console.log(f24("GCAT")) // "GCAU"


function f25(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
console.log(f25('45385593107843568')) // < 5 ? 0 : 1

function f26(n) {
  return Array.from({
    length: n + 1
  }, (v, k) => 2 ** k);
}

function f27(n) {
  var arr = [];
  for (var i = 0; i <= n; ++i) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
console.log(f26(2)) // [1, 2, 4]  # [2^0, 2^1, 2^2]
console.log(f27(2)) // [1, 2, 4]  # [2^0, 2^1, 2^2]

let num3 = 11
let f28 = n => +n.toString(2)
console.log(f28(num3)) // 1011

function f29(o, a, b) {
  return eval(a + o + b);
}
console.log(f29('+', 4, 7)) // 11