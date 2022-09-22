function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['rmc','dav','uli','jeni']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);