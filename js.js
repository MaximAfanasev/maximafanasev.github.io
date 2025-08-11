<script src="js.js"></script>
<script type="text/javascript"></script>
<script src="/path/to/script.js"></script>

alert( 'Привет, мир!' );

alert(3 +
1
+ 2);

/* Закомментировали код
alert('Привет');
*/

"use strict";

let message;
message = 'Hello'; 

let $ = 1; // объявили переменную с именем "$"
let _ = 2; // а теперь переменную с именем "_"

alert($ + _); // 3

const myBirthday = '18.04.1982';

let n = 123; // число

alert( 1 / 0 ); // Infinity

alert( "не число" / 2 ); // NaN

const bigInt = 12n;

let name = "Иван";
// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

let isGreater = 4 > 1;
alert( isGreater ); // true 

let age;
alert(age); // выведет "undefined"

let age = null;

typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

result = prompt(title, [default]);
let age = prompt('Сколько тебе лет?', 100);

let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

alert( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
let num = Number(str); // становится числом 123
alert(typeof num); // number
















