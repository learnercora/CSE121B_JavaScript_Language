/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let personalInfo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
personalInfo.name = 'Lin, Chih-Yun';

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
personalInfo.photo = 'images/picture.jpg';

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
personalInfo.favoriteFoods = ['fried chicken', 'fried chips', 'cheese cake', 'apple'];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
personalInfo.hobbies = ['sing','running','watching TV'];

// Step 6: Add another property named placesLived with a value of an empty array
personalInfo.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
personalInfo.placesLived.push({place: '', length: ''})

// Step 8: For each property, add appropriate values as strings
personalInfo.placesLived[0].place = 'Taiwan';
personalInfo.placesLived[0].length = '30years';

// Step 9: Add additional objects with the same properties for each place you've lived
personalInfo.placesLived.push({place: 'Australia', length: '17 months'})

//console.log(personalInfo);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerText = personalInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').src = personalInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = personalInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favFoodElement = document.getElementById('favorite-foods');
favFoodElement.innerHTML = personalInfo.favoriteFoods.map( element => `<li>${element}</li>`).join('');

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let newFoodListElement = document.createElement("li");
newFoodListElement.appendChild(document.createTextNode("red bean"));
favFoodElement.appendChild(newFoodListElement);
// console.log(favFoodElement);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbiesElement = document.getElementById('hobbies');
hobbiesElement.innerHTML = personalInfo.hobbies.map( element => `<li>${element}</li>`).join('');

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let newHobbyListElement = document.createElement("li");
newHobbyListElement.appendChild(document.createTextNode("play basketball"));
hobbiesElement.appendChild(newHobbyListElement);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const placesLivedElement = document.getElementById('places-lived');

personalInfo.placesLived.forEach( function (element) { 
    let placeDtElement = document.createElement("dt");
    let lengthDdElement = document.createElement("dd");
    placeDtElement.appendChild(document.createTextNode(element.place));
    lengthDdElement.appendChild(document.createTextNode(element.length));
    placesLivedElement.appendChild(placeDtElement);
    placeDtElement.appendChild(lengthDdElement);
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let newPlaceDtElement = document.createElement("dt");
let newLengthDdElement = document.createElement("dd");
newPlaceDtElement.appendChild(document.createTextNode('US'));
newLengthDdElement.appendChild(document.createTextNode('2 months'));
placesLivedElement.appendChild(newPlaceDtElement);
newPlaceDtElement.appendChild(newLengthDdElement);