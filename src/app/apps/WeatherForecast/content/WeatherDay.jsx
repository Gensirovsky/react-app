import React from 'react'
import sun from '../img/sun.svg'
import temperature from '../img/temperature.svg'
import drop from '../img/drop.svg'
import umbrella from '../img/umbrella.svg'
import wind from '../img/wind.svg'


export default function WeatherDay() {
    return (
        <div className='weather-day-card'>
            <div className='weather-day-card__temperature incard'>
                <div className='card-img-container'>
                    <img src={temperature} alt="temperature" />
                </div>
                <span>30°C</span>
            </div>
            <div className='weather-day-card__drop incard'>
                <div className='card-img-container'><img src={drop} alt="drop" /></div>
                <span>65%</span>
            </div>
            <div className='weather-day-card__humidity incard'>
                <div className='card-img-container'><img src={umbrella} alt="umbrella" /></div>
                <span>82%</span>
            </div>
            <div className='weather-day-card__wind incard'>
                <div className='card-img-container'><img src={wind} alt="wind" /></div>
                <span>10km/h</span>
            </div>
            <div className='weather-day-card__status'>
                <img className='weather-day-card__status-img' src={sun} alt='sun'></img>
                <h3 className='weather-day-card__title'>Monday</h3>
            </div>

        </div>
    )
}