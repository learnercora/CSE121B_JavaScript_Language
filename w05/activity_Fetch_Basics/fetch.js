// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;

// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }
// async function getPokemonList(url) {
//   const response = await fetch(url);
//   //console.log(response);
//   if (response.ok) {
//     const data = await response.json();
//     doStuffList(data);
//   }
// }

//以上兩個可以用以下一個
async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //console.log(response);
  if (response.ok) {
    const data = await response.json();
    doThis(data);
  };
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  let html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html;
  //console.log("first: ", results);
}


// Activity 3 - Stretch!
// function compare(a, b) {
//   if (a.name > b.name) {
//     // sort b before a
//     return 1;
//   } else if (a.name < b.name) {
//     // a and b different but unchanged (already in the correct order)
//     return -1;
//   } else return 0; // a and b are equal
// }

// function sortPokemon(list) {
//   let sortedList = list.sort(compare);
//   return sortedList;
// }

function doStuffList(data) {
  let pokeList = data.results;
  const outputListElement = document.querySelector("#outputList");
  //console.log(pokeList);
  //pokeList = sortPokemon(pokeList);
  pokeList.forEach(element => {
    const html = `<li>${element.name}</li>`;
    outputListElement.innerHTML += html;
  });
}



// getPokemon(url);
// console.log("second: ", results);
// getPokemonList(urlList);

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);

