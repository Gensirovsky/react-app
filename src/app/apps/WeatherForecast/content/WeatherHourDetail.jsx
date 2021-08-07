import React, { useContext } from 'react'
import weatherContext from '../Context.jsx'
import temperature from '../img/temperature.svg'
import drop from '../img/drop.svg'
import umbrella from '../img/umbrella.svg'
import wind from '../img/wind.svg'
import cloud from '../img/cloud.svg'
import pressure from '../img/pressure.svg'


export default function WeatherHourDetail(props) {

    const { daysOfWeek, weatherStatus } = useContext(weatherContext)

    function Line() {
        return (
            <div className='weather-hour-detail__line'></div>
        )
    }
    if (!props.hourDetail) return null
    return (
        <div className='weather-hour-detail weather-app__carousel-content'>
            <div className="weather-hour-detail__detail">
                <div className="weather-hour-detail__temperature detail-p">
                    <div className="weather-hour-detail__image"><img src={temperature} alt="temperature" /></div>
                    <div className="weather-hour-detail__title">Temperature</div>
                    <div>Average {Math.round(props.hourDetail.main.temp)}°C</div>
                    <div>Feels like {Math.round(props.hourDetail.main.feels_like)}°C</div>
                </div>
                <div className="weather-hour-detail__wind detail-p">
                    <div className="weather-hour-detail__image"><img src={wind} alt="wind" /></div>
                    <div className="weather-hour-detail__title">Wind</div>
                    <div>Speed {props.hourDetail.wind.speed} m/s</div>
                </div>
                <div className="weather-hour-detail__pressure detail-p">
                    <div className="weather-hour-detail__image"><img src={pressure} alt="pressure" /></div>
                    <div className="weather-hour-detail__title">Pressure</div>
                    <div>{props.hourDetail.main.pressure} pressure unit "hPa"</div>
                </div>
                <div className="weather-hour-detail__humidity detail-p">
                    <div className="weather-hour-detail__image"><img src={umbrella} alt="umbrella" /></div>
                    <div className="weather-hour-detail__title">Humidity</div>
                    <div>{props.hourDetail.main.humidity}%</div>
                </div>
                <div className="weather-hour-detail__pop detail-p">
                    <div className="weather-hour-detail__image"><img src={drop} alt="drop" /></div>
                    <div className="weather-hour-detail__title">Precipitation</div>
                    <div>{props.hourDetail.pop}%</div>
                </div>
                <div className="weather-hour-detail__cloudy detail-p">
                    <div className="weather-hour-detail__image"><img src={cloud} alt="cloud" /></div>
                    <div className="weather-hour-detail__title">Cloudy</div>
                    <div>{props.hourDetail.clouds.all}%</div>
                </div>

            </div>
            <Line />
            <div className='weather-hour-detail__header-container'>
                <div className="weather-hour-detail__header">
                    <div className="weather-hour-detail__city">{props.city}</div>
                    <div className="weather-hour-detail__day">{daysOfWeek(props.hourDetail)}</div>
                    <div className="weather-hour-detail__date">{props.hourDetail.dt_txt.slice(0, 11)}</div>
                    <div className="weather-hour-detail__time">{props.hourDetail.dt_txt.slice(11, 16)}</div>

                </div>
                <div className="weather-hour-detail__img-status">
                    <div className="weather-hour-detail__img">
                        <img src={weatherStatus(props.hourDetail)} alt="" /></div>
                </div>
            </div>
            <span className='close' onClick={() => props.closeDetail()}></span>
        </div>
    )
}