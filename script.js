const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'a6f77a37693e3437023f21e2718e1066';
const iconUrl = 'https://openweathermap.org/img/wn/'
const searchBar = document.querySelector('#searchBar');



const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResult(searchBar.value);
        searchBar.value = "";
    }
}

const popular = () => {
    getResult2('london');
    getResult2('istanbul');
    getResult2('new york');
    getResult2('berlin');
}
const getResult2 = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult2)
}

const displayResult2 = (result) => {

    const cityName = result.name;
    console.log(result)
    switch (cityName) {
        case 'Londra':
            let londonTemp = document.querySelector("#london-temp");
            londonTemp.innerText = `${Math.round(result.main.temp)}°C`;
            let londonDesc = document.querySelector('#london-desc');
            londonDesc.innerText = `${result.weather[0].description}`;
            let londonIcon = document.querySelector('#london-img');
            londonIcon.src = `${iconUrl}${result.weather[0].icon}.png`;
            let londonNem = document.querySelector('#london-humidity');
            londonNem.append(`${result.main.humidity}`);
            let londonWind = document.querySelector('#london-wind');
            londonWind.append(`${result.wind.speed}`);
            break;
        case 'New York kenti':
            let nyTemp = document.querySelector("#ny-temp");
            nyTemp.innerText = `${Math.round(result.main.temp)}°C`;
            let nyDesc = document.querySelector('#ny-desc');
            nyDesc.innerText = `${result.weather[0].description}`;
            let nyIcon = document.querySelector('#ny-img');
            nyIcon.src = `${iconUrl}${result.weather[0].icon}.png`;
            let nyNem = document.querySelector('#ny-humidity');
            nyNem.append(`${result.main.humidity}`);
            let nyWind = document.querySelector('#ny-wind');
            nyWind.append(`${result.wind.speed}`);
            break;
        case 'İstanbul':
            let istTemp = document.querySelector("#istanbul-temp");
            istTemp.innerText = `${Math.round(result.main.temp)}°C`;
            let istDesc = document.querySelector('#ist-desc');
            istDesc.innerText = `${result.weather[0].description}`;
            let istIcon = document.querySelector('#ist-img');
            istIcon.src = `${iconUrl}${result.weather[0].icon}.png`;
            let istNem = document.querySelector('#ist-humidity');
            istNem.append(`${result.main.humidity}`);
            let istWind = document.querySelector('#ist-wind');
            istWind.append(`${result.wind.speed}`);
            break;
        case 'Berlin':

            let berlinTemp = document.querySelector("#berlin-temp");
            berlinTemp.innerText = `${Math.round(result.main.temp)}°C`;
            let berlinDesc = document.querySelector('#berlin-desc');
            berlinDesc.innerText = `${result.weather[0].description}`;
            let berlinIcon = document.querySelector('#berlin-img');
            berlinIcon.src = `${iconUrl}${result.weather[0].icon}.png`;
            let berlinNem = document.querySelector('#berlin-humidity');
            berlinNem.append(`${result.main.humidity}`);
            let berlinWind = document.querySelector('#berlin-wind');
            berlinWind.append(`${result.wind.speed}`);
            break;
        default:
            console.log("Hata var");
            break;
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

window.onload = (popular);
searchBar.addEventListener('keypress', setQuery);