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
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new Uuser('Ana');
console.log(ana.greeting());
