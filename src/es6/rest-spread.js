// arrays destructuring

let fruits = ['Apple','Banana','Kiwi'];
let [a,b] = fruits;

console.log(a,fruits[2]);

// Object destructuring

let user = {username:'Rmc', age: 27};
let {username,age} = user;

console.log(username,user.age);

//spread operator 

let person = {name:'Rmc', age: 27};
let country = 'MX';
let data = {id:1, ...person, country};

console.log(data);

//rest

function sum(num, ...values) {
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1,1,2,3,4,5,6,7)