arr = ['a', 'b', 'c']
// 'a,b,c'
// 'a,b,c'
// 'abc'
// 'a-b-c'
console.log(arr.join())
console.log(arr.join(','))
console.log(arr.join(''))
console.log(arr.join('-'))

const arr2 = [1, 2, 3, 4, 5, 6]
const divider = 2
// [2, 4, 6]
const f = (a, b) => {
  return a.filter(x => x%b === 0)
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
  return  arr6[a%6]
}

console.log(f4(7))



// f([1,2,'a']) --> 1+2 и в двоичную систему '11'

const f5 = a => {
  return a.filter(x=>typeof x === 'number').reduce((a,b)=>a+b).toString('2')
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

const points = games => {
  count = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) count += 3
    if (games[i][0] == games[i][2]) count += 1
    count += 0
  }
  return count
}


console.log(points(arr8))
console.log(points(arr9))
console.log(points(arr10))






// "Robin Singh" --> ["Robin", "Singh"]
const str = "Robin Singh"

const strToArr = a => {
  return a.split()
}

console.log(strToArr(str))







// [undefined,null,false,true,true,false,null,undefined], 2
arr11 = [undefined, null, false, true, true, false, null, undefined]

const countSheeps = arr => {
  return arr.filter(Boolean).length
}

console.log(countSheeps(arr11))







// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 3, 5, 7, 9]
arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const removeEveryOther = a => {
  return a.filter(x=> x % 2 !== 0)
}

console.log(removeEveryOther(arr12))






// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// [10, -65]
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]


const countPositivesSumNegatives = a => {
  return a.reduce((arr,n)=> {
    if (n > 0) arr[0]++
    if (n < 0) arr[1]+= n
    return arr
  },[0, 0])
}

console.log(countPositivesSumNegatives(arr13))




// [82, 15, 6, 38, 35]
// [max, min, diff]
// [6, 82, 76]

const arr14 = [82, 15, 6, 38, 35]

const differenceInAges = ages => {
  const max = Math.max(...ages)
  const min = Math.min(...ages)
  return [min, max, max-min]
}

console.log(differenceInAges(arr14))



// ['Algebra', 'history', 'Geometry', 'english']
// ['Algebra', 'english', 'Geometry', 'history']
const arr15 = ['Algebra', 'History', 'Geometry', 'English']

const sorter = arr => {
  return arr.sort((a, b) => {
		const aa = a.toLowerCase()
		const bb = b.toLowerCase()
		if (aa > bb) return 1
		if (aa < bb) return -1
		return 0
	});
}

console.log(sorter(arr15))


// [1,3,5,7,9,11,12], [1,2,3,4,5,10,12]
// [1,2,3,4,5,7,9,10,11,12]
const arr16 = [1,3,5,7,9,11,12]
const arr17 = [1,2,3,4,5,10,12]

const mergeArrays = (arr1, arr2) => {
	a = [...new Set([...arr1, ...arr2])]
	return a.sort((a, b) => a - b)
}

console.log(mergeArrays(arr16, arr17))





// [1,2,3,4] --> 2.5
const arr18 = [1,2,3,4]

const findAverage =array => {
  return array.reduce((a,b)=>a+b)/array.length
}


console.log(findAverage(arr18))