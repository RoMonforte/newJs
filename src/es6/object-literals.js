// enhanced literals

function newUser (user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('rmc', 27,'mx', 1));