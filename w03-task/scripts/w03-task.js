// /* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
 //const add = (x,y) => x+y;
 function add (number1,number2) {
    return number1 + number2;
 }

 //const addNumbers = () => {
function addNumbers() {
     let addNumber1 = parseFloat(document.getElementById("add1").value);
     let addNumber2 = parseFloat(document.getElementById("add2").value);
     let sum = add(addNumber1, addNumber2);
     document.getElementById("sum").value = sum;
 };
 
 document.getElementById("addNumbers").addEventListener("click", addNumbers);
  

// /* Function Expression - Subtract Numbers */
// function subtract(subtract1, subtract2){
//     return subtract1 - subtract2;
// }

//const subtract = (x,y) => x-y;
function subtract (number1,number2) {
    return number1 - number2;
 }

// const subtractNumbers = () => {
function subtractNumbers() {
     let subtractNumber1 = parseFloat(document.getElementById("subtract1").value);
     let subtractNumber2 = parseFloat(document.getElementById("subtract2").value);
     let difference = subtract(subtractNumber1, subtractNumber2);
     document.getElementById("difference").value = difference;
 };
 
 document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
//const multiply = (x,y) => x * y;
function multiply (factor1,factor2) {
    return factor1 * factor2;
 }

 //const multiplyNumbers = () => {
function multiplyNumbers() {
     let factor1 = parseFloat(document.getElementById("factor1").value);
     let factor2 = parseFloat(document.getElementById("factor2").value);
     let product = multiply(factor1, factor2);
     document.getElementById("product").value = product;
 };
 
 document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
//const divide = (x,y) => x / y;
function divide (dividend,divisor) {
    return dividend / divisor;
 }

//const divideNumbers = () => {
function divideNumbers() {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
//initialize variables

function getTotal() {
    //input
   let subtotal = parseFloat(document.getElementById("subtotal").value);

   //processing
   if (document.getElementById("member").checked) {
       subtotal = subtotal - subtotal * 0.2; // 20% discount
     }
   //output
   document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
let filteredOdds = numbersArray.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML = filteredOdds;

/* Output Evens Only Array */
let filteredEven = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = filteredEven;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum,number) => sum + number, 0)
document.querySelector("#sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let numbersArrayTimes2 = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = numbersArrayTimes2;

/* Output Sum of Multiplied by 2 Array */
let sumArrayTimes2 = numbersArrayTimes2.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").innerHTML = sumArrayTimes2;