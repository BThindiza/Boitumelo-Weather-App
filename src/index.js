 function refreshWeather(){
    let tempratureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let desciptionElement = document.querySelector("#weather-description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let percipitationElement = document.querySelector("#percipitation");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    tempratureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    desciptionElement.innerHTML = response.data.condition.desciption;
    humidityElement.innerHTML =`${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    percipitationElement.innerHTML =`${response.data.percipitation.rain}%`;
    timeElement.innerHTML =formatDate(date);
    iconElement.innerHTML =`<img src ="${response.data.condition.icon_url}"class="weather-icon"/>`;

    getForecast(response.data.city);
 }
 