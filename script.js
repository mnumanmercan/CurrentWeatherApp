const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'a6f77a37693e3437023f21e2718e1066';
const iconUrl = 'https://openweathermap.org/img/wn/'
const searchBar = document.querySelector('#searchBar');

const codeRun = () => {
  const london = getResult("london");
  const istanbul = getResult("istanbul");
  const ny = getResult("new york")
  const berlin = getResult("berlin");
  let londonTemp = document.querySelector('#london-temp');
  londonTemp.innerText = `${Math.round(londonTemp.main.temp)}°C`;
}

window.onload = codeRun;

const setQuery = (e) => {
    if(e.keyCode == "13"){
        getResult(searchBar.value);
        searchBar.value = "";
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
    let city = document.querySelector('.city');
    city.innerText = `${result.name},${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = `${result.weather[0].description}`;

    let feels = document.querySelector('.feels');
    feels.innerText = `Hissedilen : ${Math.round(result.main.feels_like)}°C`;

    let imgIcon = document.querySelector('.img');
    imgIcon.src = `${iconUrl}${result.weather[0].icon}.png`

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `Nem : ${result.main.humidity}`

    
}

searchBar.addEventListener('keypress', setQuery);