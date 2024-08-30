const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const cities = [];
fetch(endpoint)
.then(response => response.json())
.then(data => {cities.push(...data)
const matches = findMatches("New", cities);
    console.log(matches);});

 console.log(cities)

const findMatches = (matchText, cities) => {
    const regex = new RegExp(matchText, "i");
    return cities.filter((place) => {
    return place.city.match(regex) || place.state.match(regex)
    })
}


const displayMatches = (event) => {
const userText = event.target.value;
const matchArray = findMatches(userText, cities);
console.log(matchArray)
}

searchInput.addEventListener("input", displayMatches)

// searchElement.addEventListener("input", displayArr)
