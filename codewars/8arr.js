
arr = ['a', 'b', 'c']

// 'a,b,c'
// 'abc'
// 'a-b-c'
// 'a,b,c'

console.log(arr)
console.log(arr)
console.log(arr)
console.log(arr)




const arr2 = [1, 2, 3, 4, 5, 6]
const divider = 2
// [2, 4, 6]
const f = a => {
	return 
}

console.log(f(arr2, divider))





// [1, 2, 3] [4, 5, 6] --> 21

const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]

const f2 = (a, b) => {
	return 
}

console.log(f2(arr3, arr4))





// [1, 2, 1, 1, 3, 2] --> [1, 2, 3]

const arr5 = [1, 2, 1, 1, 3, 2]

const f3 = a => {
	return 
}

console.log(f3(arr5))








// ['0', '1', '2', '3', '4', '5'] f(7) --> '1'
arr6 = ['0', '1', '2', '3', '4', '5']

const f4 = a => {
	return 
}

console.log(f4(7))






// f([1,2,'a']) == '11' (двоичная система)

const f5 = a => {
	return 
}

console.log(f5([1, 2, 'a']))






// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

const arr7 = [1, -2, 3, -4, 5]

const f6 = a => {
	return 
}

console.log(f6(arr7))





// ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) --> 30
// ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])  --> 10
// ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])   --> 0

arr8 = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]
arr9 = ["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]
arr10 = ["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]

const points = a => {
	return 
}

console.log(points(arr8))
console.log(points(arr9))
console.log(points(arr10))








// "Robin Singh" --> ["Robin", "Singh"]
const str = "Robin Singh"

const strToArr = a => {
	return 
}

console.log(strToArr(str))







// [undefined,null,false,true,true,false,null,undefined], 2
arr11 = [undefined, null, false, true, true, false, null, undefined]

const countSheeps = a => {
	return 
}

console.log(countSheeps(arr11))







// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 3, 5, 7, 9]
arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const removeEveryOther = a => {
	return 
}

console.log(removeEveryOther(arr12))






// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// [10, -65]
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]


const countPositivesSumNegatives = a => {
	return 
}

console.log(countPositivesSumNegatives(arr13))




// [82, 15, 6, 38, 35]
// [min, max, diff]
// [6, 82, -76]

const arr14 = [82, 15, 6, 38, 35]

const differenceInAges = ages => {
 return
}

console.log(differenceInAges(arr14))



// ['Algebra', 'history', 'Geometry', 'english']
// ['Algebra', 'english', 'Geometry', 'history']
const arr15 = ['Algebra', 'History', 'Geometry', 'English']

const sorter = arr => {
	return 
}

console.log(sorter(arr15))







// [1,3,5,7,9,11,12], [1,2,3,4,5,10,12]
// [1,2,3,4,5,7,9,10,11,12]
const arr16 = [1,3,5,7,9,11,12]
const arr17 = [1,2,3,4,5,10,12]

const mergeArrays = (arr1, arr2) => {
 
}

console.log(mergeArrays(arr16, arr17))





// [1,2,3,4] --> 2.5
const arr18 = [1,2,3,4]

const findAverage = a => {
  return 
}


console.log(findAverage(arr18))





// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

let x = 1
let n = 10

function countBy(x, n) {
 
}

console.log(countBy(x,n))



// [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]

const arr19 = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]

function isVow(a){
 
}

console.log(isVow(arr19))






// [1,2,3,4,5] --> 3 
const arr20 = [1,2,3,4,5]

function getAverage(marks){
  
}

console.log(getAverage(arr20))



// [1,-4,7,12] => 1 + 7 + 12 = 20
const arr21 = [1,-4,7,12]
function positiveSum(arr) {
  
}
console.log(positiveSum(arr21))




// [1,2,3,4,5], greater_than_9) -> false
const arr22 = [1,2,3,4,5]
const ff = function(v){return v<9}
function all( arr, fun ){
  
}
console.log(all(arr22,ff))


// 35231 => [1,3,2,5,3]
const Str1 = '35231'

function digitize(n) {
  
}

console.log(digitize(Str1))
