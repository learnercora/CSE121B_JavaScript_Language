//Activity 1 - Map
const steps = ["one", "two", "three"];
// const stepsHtml = steps.map(function (steps) {
//   return `<li>${steps}</li>`;
// });
const stepsHtml = steps.map((step) => `<li>${step}</li>`);
//console.log(stepsHtml.join(''));
document.getElementById("myList").innerHTML = stepsHtml.join('');


//Activity 2 - Map
const letterGrades = ['A', 'B', 'A'];
function convertLetterGradeToGpaPoint(letterGrade) {
    let gpa = 0;
    if (letterGrade == 'A'){
        gpa = 4;
    }else if (letterGrade == 'B') {
        gpa = 3;
    }
    return gpa;
}
const newGpa = letterGrades.map(convertLetterGradeToGpaPoint);
console.log(newGpa);

//Activity 3 - Reduce
// const gpaPointTotal = newGpa.reduce(function (total, item){
//     // console.log("total",total)
//     // console.log("item",item)
//     // console.log("total + item",total + item)
//     return total + item;
// })
const gpaPointTotal = newGpa.reduce( (total, item) => total + item );
const gpa = gpaPointTotal / newGpa.length;
console.log(gpa);
//Activity 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruits_filtered = fruits.filter( (fruit) => fruit.length > 6 );
console.log(fruits_filtered);

//Activity 5 - indexOf
const numbers = [12, 34, 21, 54];
const luckNumber = 21;
const luckNumberIndex = numbers.indexOf(luckNumber);
console.log(luckNumberIndex);
