const user = {username: 'RmC', age: 27, country: 'Mx'};

const {username, ...values} = user;
console.log(username);
console.log(values);