/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    let sum =  parseInt(number1) + parseInt(number2);
    return sum;
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named
//addNumbers that gets the values of two HTML form controls with IDs of 
//addend1 and addend2. Pass them to the add function
function addNumbers() {
    let addend1Value = document.getElementById('addend1').value;
    let addend2Value = document.getElementById('addend2').value;
    let total = add(addend1Value, addend2Value);
    //console.log(total);

// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById('sum').value = total;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addNumbersElement = document.getElementById('addNumbers');
addNumbersElement.addEventListener("click", addNumbers)


// Step 6: Using function expressions, repeat Steps 1-5 with 
//new functions named subtract and subtractNumbers and 
//HTML form controls with IDs of minuend, subtrahend, 
//difference and subtractNumbers
function subtract(number1, number2) {
    let subtract =  parseInt(number1) - parseInt(number2);
    return subtract;
}

function subtractNumbers() {
    let num1 = document.getElementById('minuend').value;
    let num2 = document.getElementById('subtrahend').value;
    let result = subtract(num1, num2);

    document.getElementById('difference').value = result;
}
const subtractNumbersElement = document.getElementById('subtractNumbers');
subtractNumbersElement.addEventListener("click", subtractNumbers)


// Step 7: Using arrow functions, repeat Steps 1-5 with 
//new functions named multiply and mulitplyNumbers and 
//HTML form controls with IDs of factor1, factor2, product 
//and multiplyNumbers
function multiply(number1, number2) {
    let multiply =  parseInt(number1) * parseInt(number2);
    return multiply;
}

function mulitplyNumbers() {
    let num1 = document.getElementById('factor1').value;
    let num2 = document.getElementById('factor2').value;
    let result = multiply(num1, num2);

    document.getElementById('product').value = result;
}
const multiplyNumbersElement = document.getElementById('multiplyNumbers');
multiplyNumbersElement.addEventListener("click", mulitplyNumbers)


// Step 8: Using any of the three function declaration types, 
//repeat Steps 1-5 with new functions named divide and 
//divideNumbers and HTML form controls with IDs of 
//dividend, divisor, quotient and divideNumbers
function division(number1, number2) {
    let division =  parseInt(number1) / parseInt(number2);
    return division;
}

function divisionNumbers() {
    let num1 = document.getElementById('dividend').value;
    let num2 = document.getElementById('divisor').value;
    let result = division(num1, num2);

    document.getElementById('quotient').value = result;
}
const divisionNumbersElement = document.getElementById('divideNumbers');
divisionNumbersElement.addEventListener("click", divisionNumbers)



// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').innerText = currentYear;
// console.log(currentDate);
// console.log(currentYear);
// console.log(document.getElementById('year'));

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let arrays = [];
for (i=1 ; i<26; i++){
    arrays.push(i);
}
// console.log(arrays);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const arrayElement = document.getElementById('array');
arrayElement.innerText = arrays.join();

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddElement = document.getElementById('odds');
let oddArrays = arrays.filter( num => (num % 2) == 1);
// console.log(oddarrays);
oddElement.innerText = oddArrays.join();

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenElement = document.getElementById('evens');
let eventArrays = arrays.filter( num => (num % 2) == 0);
// console.log(oddarrays);
evenElement.innerText = eventArrays.join();

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArrayElement = document.getElementById('sumOfArray');
let sumOfArray = arrays.reduce((sum, num) => sum + num);
sumOfArrayElement.innerText = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multipliedElement = document.getElementById('multiplied');
let multipliedArray = arrays.map((each) => each * 2);
multipliedElement.innerText = multipliedArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
let sumOfMultipliedArray = multipliedArray.reduce((sum, num) => sum + num);
sumOfMultipliedElement.innerText = sumOfMultipliedArray;