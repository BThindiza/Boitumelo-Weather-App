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
 function formatDate(timestamp){
   let minutes =date.getMinutes();
   let hours = date.getHours();
   let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day = days[date.getDay()];
   return `${day} ${hours}:${minutes}`;
 }

 function searchCity(city){
   let apiKey = "3t1a5685d95o5fd95bdaaac3a43d5083";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(refreshWeather);
 }
  function handleSearchSubmit(event){
   event.preventDefault();
   let searchInput = document.querySelector("#search-form-input");
   searchCity(searchInput.value);
 }

 function formatDate(){
   let date = new Date(timestamp*1000);
   let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
   return days[date.getDay()];
 }
 function getForecast(city){
   let apiKey = "3t1a5685d95o5fd95bdaaac3a43d5083";
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
axios(apiUrl).then(displayForecast); 
}
 