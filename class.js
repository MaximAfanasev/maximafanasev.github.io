class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }

}


//////// 2

let user = new User("Max");
user.sayHi();


function makeClass(phrase) {
  // объявляем класс и возвращаем его
  return class {
    sayHi() {
      console.log(phrase)
    };
  };
}

// Создаём новый класс
let User1 = makeClass("Привет");

new User1().sayHi();


//////// 3

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
console.log(user.name);
user2 = new User3("12");



////// 4
class User4 {
    name = 'Anonim';
    sayHi() {
        console.log(`hi, ${this.name}`)
    }
}
new User4().sayHi();

//////// 5

class Clock {
    constructor({template}) {
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
        this.timer = setInterval(() => this.render(), 1000);
        
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();














































