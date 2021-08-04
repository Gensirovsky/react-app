import React, { useContext } from 'react'
import weatherContext from '../Context.jsx'


export default function WeatherHour(props) {
    const { weatherStatus } = useContext(weatherContext)

    return (
        <div className='weather-hour' onClick={() => props.handlerDetails(props.weatherDataHour)}>
            <div className='weather-hour__time'>{props.weatherDataHour.dt_txt.slice(11, 16)}</div>
            <div className='weather-hour__status-img'>
                <img src={weatherStatus(props.weatherDataHour)} alt="sun" />
            </div>
            <div className='weather-hour__temperature'>{Math.round(props.weatherDataHour.main.temp)}°С</div>
        </div>
    )
}