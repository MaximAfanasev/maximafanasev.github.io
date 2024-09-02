let promise = new Promise(function (resolve, reject) {
	// через 1 секунду сигнализировать, что задача выполнена с результатом "done"
	setTimeout(() => resolve("done1"), 1000);
});

let promise2 = new Promise(function (resolve, reject) {
	// спустя одну секунду будет сообщено, что задача выполнена с ошибкой
	setTimeout(() => reject(new Error("Whoops!1")), 1000);
});

let promise3 = new Promise(function (resolve, reject) {
	// задача, не требующая времени
	resolve(123); // мгновенно выдаст результат: 123
});

promise.then(
	function (result) {
		/* обработает успешное выполнение */
	},
	function (error) {
		/* обработает ошибку */
	}
);

let promise4 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve("done!2"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise4.then(
	result => console.log(result), // выведет "done!" через одну секунду
	error => console.log(error) // не будет запущена
);


let promise5 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error("Whoops!2")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promise5.then(
	result => console.log(result), // не будет запущена
	error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
);


let promise6 = new Promise((resolve, reject) => {
	setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
promise6.catch(console.log);


new Promise((resolve, reject) => {
		setTimeout(() => resolve("value"), 2000);
	})
	.finally(() => console.log("Промис завершён")) // срабатывает первым
	.then(result => console.log(result)); // <-- .then показывает "value"       

function loadScript(src) {
	return new Promise(function (resolve, reject) {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

		document.head.append(script);
	});
}

let promise7 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise7.then(
	script => console.log(`${script.src} загружен!`),
	error => console.log(`Ошибка: ${error.message}`)
);

promise7.then(script => console.log('Ещё один обработчик...'));

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
]).then(console.log);

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
	.then(responses => responses.forEach(
		response => console.log(`${response.url}: ${response.status}`)
	));
