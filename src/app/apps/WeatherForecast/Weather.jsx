import React, { useState, useEffect } from 'react'
import ReactDOM from 'react'
import Header from './header/Header.jsx'
import SearchBar from './header/SearchBar.jsx'
import WeatherToday from './content/WeatherToday.jsx'
import WeatherWeek from './content/WeatherWeek.jsx'
import weatherContext from './Context.jsx'
import sun from './img/sun.svg'
import temperature from './img/temperature.svg'
import drop from './img/drop.svg'
import umbrella from './img/umbrella.svg'
import wind from './img/wind.svg'
import cloud from './img/cloud.svg'
import raining from './img/raining.svg'
import snowflake from './img/snowflake.svg'
import storm from './img/storm.svg'
import moon_2 from './img/moon_2.svg'



export default function Weather() {
    let [location, setLocation] = useState('Lviv')
    let [weatherData, setWeatherData] = useState(null)

    function weatherStatus(prps) {
        const time = prps.dt_txt.slice(11, 13);
        const id = prps.weather[0].id
        switch (true) {
            case id <= 299:
                return storm
            case id <= 599:
                return raining
            case id <= 700:
                return snowflake
            case id <= 799:
                return wind
            case id <= 800:
                return (time >= 6 && time < 21) ? sun : moon_2
            case id <= 1000:
                return cloud
        }
    }
    function daysOfWeek(prps) {
        const days = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        }
        return days[new Date(prps.dt_txt).getDay()]
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setLocation(e.target.value)
        }
    }

    function errorDiv() {
        const errDiv = document.querySelector('.slideSource')
        errDiv.classList.add('fade');

        setTimeout(() => {
            errDiv.classList.remove('fade');
        }, 4000)
    }
    useEffect(() => {
        let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=3ccdcc7d9418e33a6d5833089853f381`
        fetch(weatherURL)
            .then(res => {
                if (!res.ok) {
                    console.log(res.status)
                    throw Error(res.status);
                }
                return res.json()
            })
            .then(data => setWeatherData(data.list))
            .catch((err) => {
                errorDiv()
            })
    }, [location])

    return (
        <div className='weather-app' >
            <Header handleKeyPress={handleKeyPress} />
            <weatherContext.Provider value={{ daysOfWeek, weatherStatus }}>
                <WeatherToday weatherData={weatherData} city={location} />
                <WeatherWeek weatherData={weatherData} />
            </weatherContext.Provider>
        </div>
    )

}



