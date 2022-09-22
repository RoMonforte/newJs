class User {};

//const newUser = new User();

class user {
    greeting() {
        return 'hello';
    }
};

const rmc = new user();
console.log(rmc.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

class user {
    constructor() {
        console.log('New user')
    }
    greeting() {
        return 'hello';
    }
}

const david = new user();


class Uuser {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new Uuser('Ana');
console.log(ana.greeting());


//setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('Rmc', 22);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=12);