
let searchInput = document.querySelector("#searchInput");
async function search() {
    if(searchInput.value=="")
    {
        alert(`Hey! please enter city in search bar.`)
    }
    else{
        try {
            let apiKey = "5f6aec734cd38503e2ae2b83bdcd5185";
            let map = document.querySelector("iframe");
            let showWeatherDiv = document.querySelector("#weatherDetailsDiv");
            let dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`);
            let getWeather = await dataFetch.json();
            map.src = `https://maps.google.com/maps?q=${searchInput.value}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
            let iconId = getWeather.weather[0].icon;
            let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
            let main_temp=Math.round(getWeather.main.temp-273.15);
            let min_temp=Math.round(getWeather.main.temp_min-273.15);
            let max_temp=Math.round(getWeather.main.temp_max-273.15);
            let feels_like=Math.round(getWeather.main.feels_like-273.15);
            let sunRise=new Date(getWeather.sys.sunrise * 1000).toLocaleTimeString();
            let sunSet=new Date(getWeather.sys.sunset * 1000).toLocaleTimeString();
            showWeatherDiv.innerHTML = `
                                    <h1 class="cityName">${getWeather.name},${getWeather.sys.country}</h1>
                                    <div id="temp">
                                        <img class="weatherIcon" src="${iconUrl}" alt="weather icon">
                                        <h1 class="currentTemp">${main_temp}°C</h1>
                                    </div>
                                    <div id="min-maxTemp">
                                        <div id="minTemp">
                                            <img class="tempImg" src="https://cdn-icons-png.flaticon.com/128/1312/1312331.png" alt="min-temp">
                                            <h3>Min-Temp:${min_temp}°C</h3>
                                        </div>
                                        <div id="maxTemp">
                                            <img class="tempImg" src="https://cdn-icons-png.flaticon.com/128/1312/1312332.png" alt="max-temp">
                                            <h3>Max-Tamp:${max_temp}°C</h3>
                                        </div>
                                    </div>
                                    <hr class="weatherHr" >
                                    <h4>Feels like : ${feels_like}°C, Clouds : ${getWeather.clouds.all}, Wind : ${getWeather.wind.speed}Km/h</h4>
                                    <hr class="weatherHr" >
                                    <div id="sunDetailsDiv">
                                        <div class="sunRise">
                                            <img class="sunImg" src="https://cdn-icons-png.flaticon.com/128/3222/3222792.png" alt="sun rise">
                                            <h3>Sunrise:${sunRise}</h3>
                                        </div>
                                        <div class="sunSet">
                                            <img class="sunImg" src="https://cdn-icons-png.flaticon.com/128/3222/3222795.png" alt="sun set">
                                            <h3>Sunset:${sunSet}</h3>
                                        </div>
                                    </div>
            `
            get5DaysForecastData(searchInput.value)
        } catch (error) {
            console.log(error);
        }
    }
};

async function get5DaysForecastData(city){
    try {
        let APIkey = "5f6aec734cd38503e2ae2b83bdcd5185";
        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`);
        let data = await res.json();
        console.log(data);
        let forecastDiv=document.querySelector("#fiveDaysForecastDiv");
        forecastDiv.innerHTML=`
        `;
        const filterdData=data.list.filter((item, index) => index % 8 === 0);
        filterdData.forEach(ele => {
            let date=new Date(ele.dt_txt).toLocaleDateString();
            let icon=`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`
            let temp=Math.round(ele.main.temp);
            let min_temp=Math.round(ele.main.temp_min);
            let max_temp=Math.round(ele.main.temp_max);
            forecastDiv.innerHTML+=`
                                <div id="forecastCard">
                                  <h4>${date}</h4>
                                  <div id="forecastTempDiv">
                                      <h2>${temp}°C</h2>
                                      <img src="${icon}" alt="">
                                  </div>
                                  <hr class="forecastHr">
                                  <h3 class="min-maxTempText">Min-Temp:${min_temp}°C</h3>
                                  <h3 class="min-maxTempText">Max-Temp:${max_temp}°C</h3>
                                </div>
            `
        });
    }
    catch (error){
        console.log(error)
    }
}


