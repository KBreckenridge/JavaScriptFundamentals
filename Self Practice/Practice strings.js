let longSentence = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer' +
'took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with' +
'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ' +
'Aldus PageMaker including versions of Lorem Ipsum.';

console.log (longSentence);

let alpha = 'Hello ';
let beta = 'World';

let combine1 = alpha + beta;
let combine2 = alpha + 42;
let combine3 = 'The ' + beta + ' is vast.';

console.log (combine1);
console.log (combine2);
console.log (combine3);

let backtickString = `Lorem Ipsum is simply dummy text of the printing 
and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

console.log (backtickString);

const VALUE1 = 10;
const VALUE2 = 20;

console.log(`Thrirty is ${VALUE1 + VALUE2} and not ${2 * VALUE1 + VALUE2}`);

let msg = ' Hello, World ';

console.log(msg.at(-2));

console.log(msg.charAt(2));

console.log(msg.concat('', beta));

console.log(msg.includes('llo'));

console.log(msg.includes('poopy'));

console.log(msg.indexOf('o')); 

console.log(msg.slice(2, 5));

let word = msg.split(' ');
console.log(word[2]);

console.log(msg.toLowerCase());

console.log(msg.toUpperCase());

console.log(msg.trim());

console.log(msg.trimStart);

console.log(msg.trimEnd);