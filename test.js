arr = ['a', 'b', 'c']

// get
// 'a,b,c'
// 'abc'
// 'a-b-c'
// 'a,b,c'

console.log(arr.join())
console.log(arr.join(''))
console.log(arr.join('-'))
console.log(arr.join(','))









const arr2 = [1, 2, 3, 4, 5, 6]
const divider = 2 
// [2, 4, 6]
const f = (a,b) => {
	return a.filter(x=>x % b === 0)
}

console.log(f(arr2, divider))







// [1, 2, 3] [4, 5, 6] --> 21

const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]

const f2 = (a,b) => {
	return [...a, ...b].reduce((a,b) => a + b)
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
	return a.filter(x => typeof x == 'number').reduce((x, y) => x + y, 0).toString(2)
}

console.log(f5([1,2,'a']))






// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

const arr7 = [1, -2, 3, -4, 5]

const f6 = a => {
	return a.map(x => -x)
}

console.log(f6(arr7))
















