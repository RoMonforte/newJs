 const regex = /\b(Apple)+\b/g;

 const fruit = 'Apple, Bnanan, qwoerjqwoerr, qwiwk , asdfopqwreg, apple, Apple laasldgfasdfg, asjee';

 for (const match of fruit.matchAll(regex)) {
    console.log(match);
 }