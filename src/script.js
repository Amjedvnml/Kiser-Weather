const apiKey = "7541b82f4de81bd48061069aa7a3be6b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".btn");
const weatherImage = document.querySelector(".weather-image")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "  km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImage.src = "../assets/clouds.png"
        }
        else if (data.weather[0].main == "clear") {
            weatherImage.src = "../assets/sun.png"
        }
        else if (data.weather[0].main == "rain") {
            weatherImage.src = "../assets/heavy-rain.png"
        }
        else if (data.weather[0].main == "drizzle") {
            weatherImage.src = "../assets/partly-rainy.png"
        }
        else if (data.weather[0].main == "mist") {
            weatherImage.src = "../assets/snow.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

