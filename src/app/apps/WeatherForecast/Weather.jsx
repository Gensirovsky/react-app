import React, { useState, useEffect } from 'react'
import ReactDOM from 'react'
import Header from './header/Header.jsx'
import SearchBar from './header/SearchBar.jsx'
import WeatherToday from './content/WeatherToday.jsx'
import WeatherWeek from './content/WeatherWeek.jsx'


export default function Weather() {
    let [location, setLocation] = useState('Lviv')
    let [weatherData, setWeatherData] = useState(null)
    function handlerLocation(value) {
        setLocation(value)
    }
    useEffect(() => {
        let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=3ccdcc7d9418e33a6d5833089853f381`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => setWeatherData(data.list))
    }, [location])

    return (
        <div className='weather-app' >
            <Header value={location} handlerLocation={handlerLocation} />
            <WeatherToday weatherData={weatherData} />
            <WeatherWeek weatherData={weatherData} />
        </div>
    )

}



