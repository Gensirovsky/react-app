import React, { useState } from 'react'
import WeatherHour from './WeatherHour.jsx'
import Loader from '../header/Loader.jsx'
import WeatherHourDetail from './WeatherHourDetail.jsx'

export default function WeatherDay(props) {
    let [detailsData, setDetailsData] = useState(null)

    function handlerDetails(data) {
        setDetailsData(data)
    }

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
    return (
        <div className='weather-app__weather-today-container'>
            <div className="weather-app__weather-today-carousel-container">
                <WeatherHourDetail hourDetail={detailsData} className='weather-app__weather-today-detail' />
                <div className='weather-app__weather-today-content weather-app__carousel-content'>
                    <div className="weather-app__weather-today-title">
                        <h3 className='weather-app__weather-today-city'>{props.city}</h3>
                        <div className='weather-app__weather-today-date'>{props.weatherData ? props.weatherData[0].dt_txt.slice(0, 10) : null}</div>
                    </div>
                    <div className='weather-app__weather-today'>
                        <SmallLine />
                        {props.weatherData ? props.weatherData.slice(0, 8).map((el, index) => {
                            return [<WeatherHour weatherDataHour={el} handlerDetails={handlerDetails} key={index} />,
                            index != 7 ? <Line key={index + 2} /> : null]
                        }) : <Loader />}
                        <SmallLine />
                    </div>
                </div>
            </div>
        </div>
    )
}