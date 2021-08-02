import React from 'react'
import sun from '../img/sun.svg'
import cloud from '../img/cloud.svg'
import raining from '../img/raining.svg'
import snowflake from '../img/snowflake.svg'
import storm from '../img/storm.svg'
import wind from '../img/wind.svg'
import moon_2 from '../img/moon_2.svg'


export default function WeatherHour(props) {
    function weatherStatus() {
        const time = props.weatherDataHour.dt_txt.slice(11, 13);
        const id = props.weatherDataHour.weather[0].id
        switch (true) {
            case id <= 232:
                return storm
            case id <= 531:
                return raining
            case id <= 622:
                return snowflake
            case id <= 781:
                return wind
            case id <= 800:
                return (time >= 6 && time < 21) ? sun : moon_2
            case id <= 1000:
                return cloud
        }
    }
    return (
        <div className='weather-hour'>
            <div className='weather-hour__time'>{props.weatherDataHour.dt_txt.slice(11, 16)}</div>
            <div className='weather-hour__status-img'>
                <img src={weatherStatus()} alt="sun" />
            </div>
            <div className='weather-hour__temperature'>{Math.round(props.weatherDataHour.main.temp)}°С</div>
        </div>
    )
}