/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Lin, Chih-Yun';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = '2023';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPicture = 'images/picture.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPicture)



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood1 = ['fried chicken', 'fried chips', 'cheese cake', 'apple']

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById('food').innerHTML = favoriteFood1;

// Step 3: declare and instantiate a variable to hold another favorite food
let favoriteFood2 = ['pizza', 'fried fish', 'juice', 'beef']

// Step 4: add the variable holding another favorite food to the favorite food array
// let favoriteFoodAll = favoriteFood1.concat(favoriteFood2)
favoriteFood1 = favoriteFood1.concat(favoriteFood2)
//favoriteFood1 += favoriteFood2

// Step 5: repeat Step 2
document.getElementById('food').innerHTML = favoriteFood1;

// Step 6: remove the first element in the favorite foods array
favoriteFood1.shift();

// Step 7: repeat Step 2
document.getElementById('food').innerHTML = favoriteFood1;

// Step 8: remove the last element in the favorite foods array
favoriteFood1.pop();

// Step 7: repeat Step 2
document.getElementById('food').innerHTML = favoriteFood1;


