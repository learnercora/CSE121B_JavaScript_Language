// API: https://documenter.getpostman.com/view/5578104/2s935hRnak

let dogsList = [];
let recoverDogList = [];
const dogGalleryElement = document.getElementById("dogGallery");
const messageElement = document.getElementById("message");


function displayDogs(dogsList, callback) {
    const htmlList = dogsList.map(callback);
    dogGalleryElement.innerHTML = htmlList.join("");
}

function callback(dogData) {
    let html = `
    <div class="responsive">
        <div class="gallery">
        <a target="_blank" href="${dogData.url}">
            <img src="${dogData.url}" alt="id=${dogData.id}" >
        </a>
        </div>
    </div>`
    return html;
}

async function getDogs(){
    const response = await fetch('https://api.thedogapi.com/v1/images/search?format=json&order=ASC&limit=10');
    if (response){
        dogsList = await response.json();
        recoverDogList = dogsList;
        displayDogs(dogsList, callback);
    }
}

function recoverDogs(){
    displayDogs(recoverDogList, callback);
}

function reset(){
    dogGalleryElement.innerHTML = "";
    messageElement.innerHTML = "";
    getDogs();
}


function getScope(){
    let scopeIdArray = ["widthMin","widthMax","heightMin","heightMax"];
    let scopeValueArray = scopeIdArray.map( (scopeId) => {
            let scopeValue = document.getElementById(scopeId).value;
            if (!isNaN(scopeValue) && scopeValue !== "") {
                let value = parseInt(scopeValue);
                return value > 0 ? value : 0;
            } else if (scopeValue == "") {
                return 0;
            }
        }
    );
    console.log(scopeValueArray);
    return scopeValueArray;
}

function checkScope(dogItem) {
    let scope = getScope();
    scope[1] = scope[1] == 0 ? 9999 : scope[1];
    scope[3] = scope[3] == 0 ? 9999 : scope[3];
    if (dogItem.width > scope[0] && dogItem.width < scope[1] && 
        dogItem.height > scope[2] && dogItem.height < scope[3]){
            return dogItem;
    }
    
}

function displayScopeDog() {
    let searchList = [];
    let scope = getScope();
    let unEmptyNum = 0;
    scope.filter((each) => {
        if (each != ""){
            unEmptyNum += 1;
        }
    });
    if (unEmptyNum == 0){
        messageElement.innerHTML = "Please enter number. Thank you.";
    } else if (scope.includes(undefined)) {
        messageElement.innerHTML = "Only allow number input.";
    }
    else {
        searchList = dogsList.filter(checkScope);
        console.log(searchList);
        displayDogs(searchList, callback);
        if (searchList.length == 0){
            messageElement.innerHTML = "No match result.";
        } else {
            messageElement.innerHTML = `You got ${searchList.length} result(s).`;
        }
    };
}

const showOthersDogsElement = document.getElementById("showOthersDogs");
showOthersDogsElement.addEventListener("click", reset );

const recoverElement = document.getElementById("recover");
recoverElement.addEventListener("click", recoverDogs );

const searchElement = document.getElementById("search");
searchElement.addEventListener("click", displayScopeDog );


getDogs();