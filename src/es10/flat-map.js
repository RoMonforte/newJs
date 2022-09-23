
//flat
const array = [1,2,3,4,5,6,[1,3,5,7,9,[5,4,9,10]]];

console.log(array.flat(3));

// flatmap

const array2 = [2,4,6,8,9];

console.log(array2.flatMap(v => [v,v*2]));