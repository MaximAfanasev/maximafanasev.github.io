///////// trycatch.js
console.log("///////// trycatch.js ///////////")
console.log("///////// trycatch.js ///////////")
console.log("///////// trycatch.js ///////////")
console.log("///////// trycatch.js ///////////")

try {
  lalala; // ошибка, переменная не определена!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

  // Можем также просто вывести ошибку целиком
  // Ошибка приводится к строке вида "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

///////// 2
console.log("///////// 2")

let json = '{"name" : "Max", "age": 30}'
let user3 = JSON.parse(json);

console.log(user3.name);
console.log(user3.age);

///////// 3
console.log("///////// 3")

let json2 = "{некорректно}"

try {
  let user4 = JSON.parse(json2);
  alert(user.name)
} catch (e) {
  console.log("Проблема в данных")
  console.log(e.name)
  console.log(e.message)
}

///////// 4
console.log("///////// 4")

let error = new Error("Ого, ошибка! o_O");

console.log(error.name); // Error
console.log(error.message); // Ого, ошибка! o_O

///////// 5
console.log("///////// 5")

let json3 = '{ "age": 30 }';

try {

  let user5 = JSON.parse(json3);

  if (!user5.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  console.log(user.name);

} catch (e) {
  console.log("JSON Error: " + e.message);
}

///////// 6
console.log("///////// 6")

try {
  console.log('try');
  BAD_CODE();
} catch (e) {
  console.log('catch');
} finally {
  console.log('finally');
}
