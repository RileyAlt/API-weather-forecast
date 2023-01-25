function getInfo(){
    const newCityInput = document.getElementById("cityInput");
    const locationThatWasEntered = newCityInput.value;
    const currentWeather = document.getElementById("currentWeather")

    // Need to handle current day

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationThatWasEntered}&appid=bbd23e323602126e5a411dc50638f36a&units=imperial`)
    .then(response => response.json())
    // .then (data => displayCurrentWeather(data));


    //Displaying Current weather data    
    function displayCurrentWeather(data){
        currentWeather.textContent = data.list.main.temp;
    }


    //  This is to handle the NEXT 5 days
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${locationThatWasEntered}&appid=b89577d3c40314f88af7bb8b7f91a311&units=imperial`)
    .then(response => response.json())
    .then(data =>{

        var dayOneAvgTmp = 0;
        var dayOneAvgWind = 0;
        var dayOneAvgHum = 0;
        for(var i = 0; i < 8; i++) {
            // this is ALL data for day 1
            const weatherInfo = data.list[i];
            dayOneAvgTmp += weatherInfo.main.temp;
            dayOneAvgWind += weatherInfo.wind.speed;
            dayOneAvgHum += weatherInfo.main.humidity;
        }

        //this decides what number is going to be displayed
        dayOneAvgTmp = dayOneAvgTmp / 8.0;
        dayOneAvgWind = dayOneAvgWind / 8.0;
        dayOneAvgHum = dayOneAvgHum / 8.0;

        //Displays content on browser
        document.getElementById("day1Temp").textContent = "Temp: " + dayOneAvgTmp + "°";
        document.getElementById("day1Wind").textContent =  "Wind Spd: " + dayOneAvgWind + "MPH";
        document.getElementById("day1Humidity").textContent = "Humidity: " + dayOneAvgHum + "%";

        var dayTwoAvgTmp = 0;
        var dayTwoAvgWind = 0;
        var dayTwoAvgHum = 0;
        for(var i = 8; i < 16; i++) {
            // this is ALL data for day 2
            const weatherInfo = data.list[i];
            dayTwoAvgTmp += weatherInfo.main.temp;
            dayTwoAvgWind += weatherInfo.wind.speed;
            dayTwoAvgHum += weatherInfo.main.humidity;
        }
        dayTwoAvgTmp = dayTwoAvgTmp / 8.0;
        dayTwoAvgWind = dayTwoAvgWind / 8.0;
        dayTwoAvgHum = dayTwoAvgHum / 8.0;

        document.getElementById("day2Temp").textContent = "Temp: " + dayTwoAvgTmp + "°";
        document.getElementById("day2Wind").textContent =  "Wind Spd: " + dayTwoAvgWind + "MPH";
        document.getElementById("day2Humidity").textContent = "Humidity: " + dayTwoAvgHum + "%";

        var dayThreeAvgTmp = 0;
        var dayThreeAvgWind = 0;
        var dayThreeAvgHum = 0;
        for(var i = 16; i < 24; i++) {
            // this is ALL data for day 3
            const weatherInfo = data.list[i];
            dayOneAvgTmp += weatherInfo.main.temp;
            dayThreeAvgWind += weatherInfo.wind.speed;
            dayThreeAvgHum += weatherInfo.main.humidity;
        }
        dayThreeAvgTmp = dayOneAvgTmp / 8.0;
        dayThreeAvgWind = dayOneAvgWind / 8.0;
        dayThreeAvgHum = dayThreeAvgHum / 8.0;

        document.getElementById("day3Temp").textContent = "Temp: " + dayThreeAvgTmp + "°";
        document.getElementById("day3Wind").textContent =  "Wind Spd: " + dayThreeAvgWind + "MPH";
        document.getElementById("day3Humidity").textContent = "Humidity: " + dayThreeAvgHum + "%";

        var dayFourAvgTmp = 0;
        var dayFourAvgWind = 0;
        var dayFourAvgHum = 0;
        for(var i = 24; i < 32; i++) {
            // this is ALL data for day 4
            const weatherInfo = data.list[i];
            dayFourAvgTmp += weatherInfo.main.temp;
            dayFourAvgWind += weatherInfo.wind.speed;
            dayFourAvgHum += weatherInfo.main.humidity;
        }
        dayFourAvgTmp = dayFourAvgTmp / 8.0;
        dayFourAvgWind = dayFourAvgWind / 8.0;
        dayFourAvgHum = dayFourAvgHum / 8.0;

        document.getElementById("day4Temp").textContent = "Temp: " + dayFourAvgTmp + "°";
        document.getElementById("day4Wind").textContent =  "Wind Spd: " + dayFourAvgWind + "MPH";
        document.getElementById("day4Humidity").textContent = "Humidity: " + dayFourAvgHum + "%";

        var dayFiveAvgTmp = 0;
        var dayFiveAvgWind = 0;
        var dayFiveAvgHum = 0;
        for(var i = 32; i < 40; i++) {
            // this is ALL data for day 5
            const weatherInfo = data.list[i];
            dayFiveAvgTmp += weatherInfo.main.temp;
            dayFiveAvgWind += weatherInfo.wind.speed;
            dayFiveAvgHum += weatherInfo.main.humidity;
        }
        dayFiveAvgTmp = dayFiveAvgTmp / 8.0;
        dayFiveAvgWind = dayFiveAvgWind / 8.0;
        dayFiveAvgHum = dayFiveAvgHum / 8.0;

        document.getElementById("day5Temp").textContent = "Temp: " + dayFiveAvgTmp + "°";
        document.getElementById("day5Wind").textContent = "Wind Spd: " + dayFiveAvgWind + "MPH";
        document.getElementById("day5Humidity").textContent = "Humidity: " + dayFiveAvgHum + "%";
 
    })
    .catch(err => alert("something went wrong"));

}

//getting the dates in
// const d =new Date();
// const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function checkDay(day){
//     if(day +d.getDay() > 6){
//         return day +d.getDay()-7;
//     }
//     else {
//         return day +d.getDay();
//     }
// }

// for(i=0;i<5;i++){
//     document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
// }

