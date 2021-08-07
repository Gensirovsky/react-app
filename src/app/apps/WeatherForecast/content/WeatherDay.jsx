import React, { useContext } from 'react'
import temperature from '../img/temperature.svg'
import drop from '../img/drop.svg'
import umbrella from '../img/umbrella.svg'
import wind from '../img/wind.svg'
import weatherContext from '../Context.jsx'

export default function WeatherDay(props) {
    let weatherDay = props.weatherDay
    let weatherRound = weatherDay[5]
    const { daysOfWeek, weatherStatus } = useContext(weatherContext)

    function getTemp() {
        return Math.round(weatherRound.main.temp)
    }
    function getDrop() {
        return Math.round(weatherRound.main.humidity)
    }
    function getFall_out() {
        return Math.round((weatherRound.pop * 100))
    }
    function getWindSpeed() {
        return weatherRound.wind.speed
    }
    function selectDiv(event) {
        let target = event.target.closest('.weather-day-card')
        if (target.closest('.select-border')) {
            target.classList.remove('select-border')
        } else {
            document.querySelectorAll('.weather-day-card').forEach(el => el.classList.remove('select-border'))
            target.classList.add('select-border')
        }
    }
    function closeDetail() {
        const elem = document.querySelector('#weather-today-carousel')
        elem.style.transition = 'margin-left 0.5s'
        elem.style.marginLeft = '0'
    }

    return (
        <div id='weather-day-card-animation' className='weather-day-card-container'>
            <div className='weather-day-card' onClick={(e) => {
                closeDetail(),
                    props.setWeatherData(weatherDay),
                    selectDiv(e)
            }}>
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
                    <img className='weather-day-card__status-img' src={weatherStatus(weatherRound)} alt='sun'></img>
                    <h3 className='weather-day-card__title'>{daysOfWeek(weatherDay[0])}</h3>
                </div>
            </div>
        </div>
    )
}
