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

let array = [85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15];

console.log(bubbleSort(array));
console.log(Sort(array));
console.log(insertionSort(array));
