// Пузырьковая сортировка
const bubbleSort = (a) => {
	n = a.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
	return a
};

// Сортировка выбором
function Sort(a) {
	let n = a.length
	for (i = 0; i < n - 1; i++) {
		let min = i
		for (j = i + 1; j < n; j++) {
			if (a[j] < a[min]) min = j
			[arr[i], arr[min]] = [arr[min], arr[i]]
		}
	}
	return a
}


// Сортировка вставками
function insertionSort(a) {
	var n = a.length
	for (var i = 0; i < n; i++) {
		var v = a[i],
			j = i - 1
		while (j >= 0 && a[j] > v) {
			a[j + 1] = a[j]
			j--;
		}
		a[j + 1] = v
	}
	return a;
};


// Быстрая сортировка

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

let array = [85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15];

console.log(quickSort(array));
console.log(bubbleSort(array));
console.log(Sort(array));
console.log(insertionSort(array));


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
  const half = array.length / 2
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}


console.log(mergeSort(array));
