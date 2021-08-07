import React, { useState, useContext } from 'react'
import WeatherHour from './WeatherHour.jsx'
import Loader from '../header/Loader.jsx'
import WeatherHourDetail from './WeatherHourDetail.jsx'
import weatherContext from '../Context.jsx'


export default function WeatherDay(props) {
    let [detailsData, setDetailsData] = useState(null)
    const weatherToday = document.querySelector('#weather-today-carousel')
    const { daysOfWeek } = useContext(weatherContext)

    function handlerDetails(data) {
        setDetailsData(data)
        openDetail()
    }

    function openDetail() {
        weatherToday.style.transition = 'margin-left 0.5s'
        weatherToday.style.marginLeft = '-100%'
    }
    function closeDetail() {
        weatherToday.style.transition = 'margin-left 0.5s'
        weatherToday.style.marginLeft = '0'
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
    const screenWidth = window.screen.width
    const screenHeight = window.screen.height
    //if (screenWidth <= 992) null
    return (
        <div className='weather-app__weather-today-container'>
            <div className="weather-app__weather-today-carousel-container" id='weather-today-carousel'>
                <div className='weather-app__weather-today-content weather-app__carousel-content'>
                    <div className="weather-app__weather-today-title">
                        <h3 className='weather-app__weather-today-city'>{props.city}</h3>
                        <span className='weather-app__weather-today-day'>{props.weatherData ? daysOfWeek(props.weatherData[0]) : null}</span>
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
                <WeatherHourDetail hourDetail={detailsData} city={props.city} closeDetail={closeDetail} />
            </div>
        </div>

    )
}