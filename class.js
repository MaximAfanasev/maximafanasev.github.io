//////// 1
console.log("//////// 1")


class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name)
  }
}

let user = new User("Max");
user.sayHi();

//////// 2
console.log("//////// 2")

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase)
    };
  };
}

let User1 = makeClass("Привет");
new User1().sayHi();

//////// 3
console.log("//////// 3")

class User3 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 3) {
      console.log("Имя короткое");
      return;
    }
    this._name = value;
  }
}

let user2 = new User3("max");
console.log(user2.name);
user2 = new User3("12");

////////// 4
console.log("////////// 4")

class User4 {
  name = 'Anonim';
  sayHi() {
    console.log(`hi, ${this.name}`)
  }
}
new User4().sayHi();

//////// 5
console.log()

class Clock {
  constructor({
    template
  }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 10000);
  }
}

let clock = new Clock({
  template: 'hh:mm:ss'
});
clock.start();

///////// 6
console.log("///////// 6")

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} скорость ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно`);
  }
}
let animal = new Animal("Мой питомец")

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5);
rabbit.hide();
rabbit.stop();

///////// 7
console.log("///////// 7")


class Animal2 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit2 extends Animal2 {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

let rabbit2 = new Rabbit2("Белый кролик", 10);
console.log(rabbit2.name)
console.log(rabbit2.earLength)


///////// 8
console.log("///////// 8")

class Animal3 {
  name = 'animal';
  constructor() {
    console.log(this.name)
  }
}
class Rabbit3 extends Animal3 {
  name = 'rabbit'
}

new Animal3();
new Rabbit3();

///////// 9
console.log("///////// 9")

class Animal4 {
  showName() {
    console.log('animal')
  }
  constructor() {
    this.showName()
  }
}
class Rabbit4 extends Animal4 {
  showName() {
   console.log('rabbit') 
  }
}

new Animal4();
new Rabbit4();

///////// 10
console.log("///////// 10")

class User5 {
  static staticMethod() {
    console.log(this == User5);
  }
}

User5.staticMethod();

///////// 11
console.log("///////// 11")

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);
console.log(articles[0].title)

///////// 12
console.log("///////// 12")

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) console.log("Отрицательное кол-во воды")
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10; 

///////// 13
console.log("///////// 13")

class CoffeeMachine2 {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) console.log("Отрицательное кол-во воды")
    this._waterAmount = value;
  }
  getWaterAmount() {
    return this._waterAmount;
  }
}
new CoffeeMachine2().setWaterAmount(100);

///////// 14
console.log("///////// 14")

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1,2,5,10,50);
console.log(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr); 
console.log(filteredArr.isEmpty());

///////// 15
console.log("///////// 15")

class Rabbit5 {}
let rabbit3 = new Rabbit5();
console.log( rabbit3 instanceof Rabbit5)





















