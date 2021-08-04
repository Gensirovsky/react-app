import React, { useState, useEffect } from 'react'
import ReactDOM from 'react'
import Header from './header/Header.jsx'
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
    let [city, setCity] = useState('Lviv')
    let [weatherDataDay, setWeatherDataDay] = useState(null)
    let [weatherDataWeek, setWeatherDataWeek] = useState(null)
    const div = document.querySelector('#weather-today-carousel')

    function wDataHandler(data) {
        animationDown()
        setTimeout(() => {
            animationUp()
            setWeatherDataDay(data)
            setTimeout(() => {
                animationNormal()
            }, 100);
        }, 300);
    }

    function animationUp() {
        div.style.transition = 'margin-top 0s'
        div.style.marginTop = '-100%'
    }
    function animationNormal() {
        div.style.transition = 'margin-top 0.3s'
        div.style.visibility = 'visible'
        div.style.marginTop = '0'
    }
    function animationDown() {
        div.style.transition = 'margin-top 0.3s'
        div.style.marginTop = '100%'
        setTimeout(() => {
            div.style.visibility = 'hidden'
        }, 400)
    }

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
        let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=b54007d1a20d9e5b6402cbb67162c324`
        fetch(weatherURL)
            .then(res => {
                if (!res.ok) {
                    console.log(res.status)
                    throw Error(res.status);
                }
                return res.json()
            })
            .then(data => {
                setWeatherDataDay(data.list)
                setWeatherDataWeek(data.list)
                setCity(location)
            })
            .catch((err) => {
                errorDiv()
            })
    }, [location])

    return (
        <div className='weather-app' >
            <Header handleKeyPress={handleKeyPress} />
            <weatherContext.Provider value={{ daysOfWeek, weatherStatus }}>
                <WeatherToday weatherData={weatherDataDay} city={city} />
                <WeatherWeek weatherData={weatherDataWeek} setWeatherData={wDataHandler} />
            </weatherContext.Provider>
        </div>
    )
}



