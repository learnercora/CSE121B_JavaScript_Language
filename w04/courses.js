// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
        { sectionNum: 3, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent : function (sectionNum) {
        let obj = this.sections.find(o => o.sectionNum === sectionNum);
        if (obj !== undefined)
        {
            obj.enrolled += 1 ;
            outputSections(this.sections);
        }else{
            console.log('No such section Number!')
        }
    },
    dropStudent : function (sectionNum){
        let obj = this.sections.find(o => o.sectionNum === sectionNum);
        if (obj !== undefined)
        {
            obj.enrolled -= 1 ;
            outputSections(this.sections);
        }else{
            console.log('No such section Number!')
        }
    },
    
};

function coursesSetting(course) {
    document.getElementById('courseName').innerText = course.name;
    document.getElementById('courseCode').textContent = course.code;

}

function outputSections(course) {
    const htmlSection = course.map( data => 
        `<tr>
            <td>${data.sectionNum}</td>
            <td>${data.roomNum}</td>
            <td>${data.enrolled}</td>
            <td>${data.days}</td>
            <td>${data.instructor}</td>
        </tr>`)
    document.querySelector('#sections').innerHTML = htmlSection.join("");
}



// aCourse.enrollStudent(1);
// aCourse.dropStudent(2);
document.querySelector('#enrollStudent').addEventListener('click', function(e) {
  let sectionNum = document.querySelector('#sectionNumber').value;
  sectionNum = parseInt(sectionNum);
  aCourse.enrollStudent(sectionNum);
});
document.querySelector('#dropStudent').addEventListener('click', function(e) {
    let sectionNum = document.querySelector('#sectionNumber').value;
    sectionNum = parseInt(sectionNum);
    aCourse.dropStudent(sectionNum);
});

coursesSetting(aCourse);
outputSections(aCourse.sections);