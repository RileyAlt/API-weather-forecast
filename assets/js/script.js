console.log("Hello");

let cityURL = "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={Default}"
const drinkContainer =document.getElementById('city')
console.log(cityURL);

requestData(cityURL)
function requestData(cityURL) {
    fetch(cityURL)
        .then((response) => response.json())
        .then((data) => displayCityData(data));
}

function displayCityData(data) {
    console.log(data.city[0].strDrink);
    console.log(data.city[0].strDrinkThumb)
}


window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `api.openweathermap.org/data/2.5/forecast/lat={lat}&long={long}&appid={f0bfb9faf670bb760aafd64da3abbf33}`
        });
    }
});