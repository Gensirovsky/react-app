import React from 'react'
import WeatherHour from './WeatherHour.jsx'
import Loader from '../header/Loader.jsx'

export default function WeatherDay(props) {
    function SmallLine() {
        return (
            <div className='weather-hour__line weather-hour__line--small'></div>
        )
    }
    function Line() {
        return (
            <div className='weather-hour__line'></div>
        )
    }
    console.log(props.weatherData)
    return (
        <div className='weather-app__weather-today'>
            <SmallLine />
            {props.weatherData ? props.weatherData.map((el, index) => {
                return [<WeatherHour weatherDataHour={el} key={index} />,
                index != 7 ? <Line key={index + 2} /> : null]
            }) : <Loader />}
            <SmallLine />
        </div>
    )
}