import React from 'react'
import WeatherDay from './WeatherDay.jsx'
import Loader from '../header/Loader.jsx'

export default function WeatherWeek(props) {
    const weatherData = props.weatherData
    function getWeatherArr() {
        let weatherDayArr = []
        if (weatherData) {
            let day = new Date(props.weatherData[0].dt_txt).getDay()
            for (let i = 0; i < weatherData.length - 8; i++) {
                let newDay = new Date(weatherData[i].dt_txt).getDay()
                if (day === newDay) continue
                day = newDay
                weatherDayArr.push(<WeatherDay weatherDay={weatherData.slice(i, i + 8)} dayNum={day} key={i} />)
                i + 8
            }
        }
        return weatherDayArr
    }


    return (
        !weatherData ? null :
            <div className='weather-app__weather-week'>
                {getWeatherArr()}
            </div>
    )
}