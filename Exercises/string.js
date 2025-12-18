const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim elit sed ante ullamcorper, \
mattis lacinia orci blandit. Nulla facilisi. Integer viverra tincidunt tellus, \
sit amet iaculis orci pharetra tincidunt.';
const anotherLongString = "Hello! This is a very\
                            long string to practice JavaScript\
                            Fundamentals and manipulate JavaScript strings";

let alpha = 'Hello ';
let beta =  'World!';
let number = 10;

//let combinedVariables = alpha + beta;
//console.log (alpha + number);

//console.log(1 + 1);
//console.log(combinedVariables);
//console.log(alpha);
//console.log(beta);

const VALUE_ONE = 10;
const VALUE_TWO = 20;

//console.log('Thirty is ' + (VALUE_ONE + VALUE_TWO) + ' and not ' + (2 * VALUE_ONE + VALUE_TWO));
//console.log('Thirty is ' + VALUE_ONE + VALUE_TWO + ' and not ' + 2 * VALUE_ONE + VALUE_TWO); 
//Parenthesis needed for math operation

//console.log(`Thirty is ${VALUE_ONE + VALUE_TWO} and not ${2 * VALUE_ONE + VALUE_TWO}`);

//console.log(`${VALUE_TWO} is greater than ${VALUE_ONE}.`);

//console.log('it\'s a cat');
//console.log("Its's a cat");

console.log(longString.length);
const name = 'King Gizzard';
console.log(name.length);

console.log(name.at(5));
console.log(name.at(-5));

//G, i, z, z, a, r, d -> String
// 0, 1, 2, 3 -> Indexing starts from left to right.
// -4, -3, -2, -1 -> Indexing starts from right to left.

console.log(name.includes('izz'))

console.log(name.toUpperCase())

console.log("      jgkdjfgtgnkljdngjetgkjn   geg gtgetgetg   gjiggoepppp     ".trim());
console.log("      jgkdjfgtgnkljdngjetgkjn   geg gtgetgetg   gjiggoepppp     ".length);
console.log("      jgkdjfgtgnkljdngjetgkjn   geg gtgetgetg   gjiggoepppp     ".trim().length); //chaining technique