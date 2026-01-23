// Number examples
const value1 = 42;
const value2 = 34.4;
const value3 = 34.3;

//console.log(value1);
//console.log(value2);
//console.log(value3);

// 17 decimal point precision
let value4 = 3.99999999999999999
//console.log(value4);

//BigInt values
let value5 = 3867302639367274n;
//console.log(value5);

// Number systems
const ex_binary = 0b11010;
const ex_hexadecimal = 0x1A;
const ex_octal = 0o32;

//console.log(ex_binary);
//console.log(ex_hexadecimal);
//console.log(ex_octal);

//Exponential literals
const aa = 0E-3;
const bb = 0E+5;
const cc = 4E2;
const dd = 234e-2;
const ee = 2e-3;
const ff = 56E-4;

//console.log(aa);
//console.log(bb);
//console.log(cc);
//console.log(dd);
//console.log(ee);
//console.log(ff);

// Numeric seperators meaning using underscores for readability.
const decimalSeparator = 9_563.25; // 9,563.25
const binarySeparator = 0b1010_0001;
const hexadecimalSeparator = 0xa0_b0_c0;

//console.log(decimalSeparator);
//console.log(binarySeparator);
//console.log(hexadecimalSeparator);

// Static property of the number object
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);

// Static methods of the Number object
// console.log(Number.isNaN(ff));
// console.log(Number.isInteger(10.99));

const verifiedInt = Number.parseInt('42.99');
// console.log(typeof verifiedInt);

const verifiedFloat = Number.parseFloat('42.99');
console.log(typeof verifiedFloat);

//Instance methods can be accessed from a variable
console.log(value1.toExponential());
console.log(value1.toFixed(2));
console.log(value1.toPrecision(15)); 

