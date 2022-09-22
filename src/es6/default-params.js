function newUser(name, age, country) {
    var name = name || 'RmC';
    var age = age || 27;
    var country = country || 'MX';
    console.log(name,age,country);
}

newUser();
newUser('John', 18, 'USA');

function newAdmin(name = 'Rmc', age = 27, country = 'Mx') {
    console.log(name,age,country)
}

newAdmin();
newAdmin('Ana',27,'pe')