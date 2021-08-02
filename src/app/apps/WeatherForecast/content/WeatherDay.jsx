import React from 'react'
import sun from '../img/sun.svg'
import temperature from '../img/temperature.svg'
import drop from '../img/drop.svg'
import umbrella from '../img/umbrella.svg'
import wind from '../img/wind.svg'
import cloud from '../img/cloud.svg'
import raining from '../img/raining.svg'
import snowflake from '../img/snowflake.svg'
import storm from '../img/storm.svg'




export default function WeatherDay(props) {
    let weatherDay = props.weatherDay
    let weatherRound = weatherDay[5]
    function weatherStatus() {

        const id = weatherDay[0].weather[0].id
        console.log(weatherDay)
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
                return sun
            case id <= 1000:
                return cloud
        }
    }
    function getTemp() {
        return Math.round(weatherRound.main.temp)
    }
    function getDrop() {
        return Math.round(weatherRound.main.humidity)
    }
    function getFall_out() {
        return (weatherRound.pop * 100)
    }
    function getWindSpeed() {
        return weatherRound.wind.speed
    }
    const DaysOfWeek = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    }

    return (
        <div className='weather-day-card'>
            <div className='weather-day-card__temperature incard'>
                <div className='card-img-container'>
                    <img src={temperature} alt="temperature" />
                </div>
                <span>{getTemp()}°C</span>
            </div>
            <div className='weather-day-card__drop incard'>
                <div className='card-img-container'><img src={drop} alt="drop" /></div>
                <span>{getDrop()}%</span>
            </div>
            <div className='weather-day-card__humidity incard'>
                <div className='card-img-container'><img src={umbrella} alt="umbrella" /></div>
                <span>{getFall_out()}%</span>
            </div>
            <div className='weather-day-card__wind incard'>
                <div className='card-img-container'><img src={wind} alt="wind" /></div>
                <span>{getWindSpeed()}m/s</span>
            </div>
            <div className='weather-day-card__status'>
                <img className='weather-day-card__status-img' src={weatherStatus()} alt='sun'></img>
                <h3 className='weather-day-card__title'>{DaysOfWeek[props.dayNum]}</h3>
            </div>

        </div>
    )
}
