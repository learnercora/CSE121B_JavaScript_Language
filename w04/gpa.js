function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    let inputGrade = document.getElementById(inputSelector).value;
    let gradeArray = inputGrade.split(',');
    let newGradeArray = gradeArray.map( grade => grade.trim().toUpperCase() );
    //console.log(newGradeArray);
    return newGradeArray;
}

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let gpa = 0;
    if (grade == 'A'){
        gpa = 4;
    }else if (grade == 'B') {
        gpa = 3;
    }else if (grade == 'C') {
        gpa = 2;
    }else if (grade == 'D') {
        gpa = 1;
    }else if (grade == 'E' || grade == 'F') {
        gpa = 0;
    }
    //console.log(gpa);
    return gpa;
}

function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    let letterToGpa = grades.map(lookupGrade);
    let gpaPointTotal = letterToGpa.reduce( (total, num) => total + num );
    let gpa = gpaPointTotal / letterToGpa.length;
    gpa = gpa.toFixed(2);
    return gpa;
}

function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML 
    //in the element identified by the selector
    //console.log(gpa, selector);
    document.getElementById(selector).innerHTML = `GPA: ${gpa}`;
}

function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
    const inputGrades = getGrades("grades");
    const gpa = calculateGpa(inputGrades);
    outputGpa(gpa,"output");
}

// console.log(getGrades('grades'));
document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);
