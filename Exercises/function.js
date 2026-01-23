// This is a simple function which is a building block of JS.
function simpleFunction(){
    console.log("Hello JavaScript function!");
};
//simpleFunction();  

//The function below returns a string using the return keyword.
function simpleFunctionTwo(){
    return "I am from simpleFunctionTwo!"
};
// console.log(simpleFunctionTwo());

// This function takes an input and stores it in the valueOne parameter.
function simpleFunctionThree(valueOne){
    console.log(valueOne)
};
//simpleFunctionThree("Dog");

//This is a function expression or assigning a function to a variable.
const functionVariable = simpleFunctionTwo();
//
//
//
// console.log(functionVariable);
const squareFoot = function (length, width){
    return length * width;
};
// console.log(squareFoot(24, 32)); 

//Variable scope
const firstName = "John";

function sampleOne() {
    const lastName = "Smith";
    console.log(lastName);
};

function sampleTwo() {
    console.log(firstName);
    console.log(lastName); //Error because it is out of variable scope
};

// sampleOne();
// sampleTwo();

// Nested functions ---> functions inside other functions
// function parent() {
//     const parentVariable = 15;
//     function child() {
//         const childVariable = parentVariable + 5;
//         console.log(childVariable);
// }
//     };
//     child();
    // console.log(childVariable); // Error here due to nested function variable
// };
// parent();

//Default parameter -> adding a default parameter to a function will allow you to call a function and supply a value for that.
//parameter of not. Default parameters are always stored last
function doSubtraction(operandOne, operandTwo = 10) {
    return operandOne - operandTwo;
};
// console.log(doSubtraction(50, 30));
//console.log(doSubtraction(50));

// Rest parameter.
function restParameterFunction(...restParameter){
    console.log(restParameter);
};
//restParameterFunction("Welcome", "to", "rest parameter", 4, 9, true, false);

//Arrow function
function normalFunction(value){ // A normal and traditional function.
    return value;
};

const arrowFunction = (value) => value;
// const arrowFunction = (value) => {
//     return value
// };
// console.log(arrowFunction("I am from the arrow function!"));

const arrowFunctionTwo = (paramOne, paramTwo, paramThree = "Gizzard") => {
    return paramOne + paramTwo + paramThree + '.';
};
console.log(arrowFunctionTwo("My middle name ", "is "));