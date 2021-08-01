import React from 'react'
import WeatherDay from './WeatherDay.jsx'

export default function WeatherWeek() {
    return (
        <div className='weather-app__weather-week'>
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />

        </div>
    )
}