import React, { useContext } from 'react'
import weatherContext from '../Context.jsx'
import temperature from '../img/temperature.svg'
import drop from '../img/drop.svg'
import umbrella from '../img/umbrella.svg'
import wind from '../img/wind.svg'
import cloud from '../img/cloud.svg'

export default function WeatherHourDetail(props) {

    const { daysOfWeek, weatherStatus } = useContext(weatherContext)

    function Line() {
        return (
            <div className='weather-hour__line'></div>
        )
    }
    if (!props.hourDetail) return null
    return (
        <div className='weather-hour-detail weather-app__carousel-content'>
            <div className="weather-hour-detail__detail">
                <div className="weather-hour-detail__temperature detail-p">
                    <div className="weather-hour-detail__temperature-image detail-img">
                        <img src={temperature} alt="temperature" />
                    </div>
                    <div className="weather-hour-detail__temperature-title">Temperature</div>
                    <div>Average {props.hourDetail.main.temp}°C</div>
                    <div>Feels like {props.hourDetail.main.feels_like}°C</div>
                </div>
                <div className="weather-hour-detail__wind detail-p">
                    <div className="weather-hour-detail__wind-image detail-img"></div>
                    <div className="weather-hour-detail__wind-title">Wind</div>
                    <div>Speed {props.hourDetail.wind.speed} m/s</div>
                </div>
                <div className="weather-hour-detail__pressure detail-p">
                    <div className="weather-hour-detail__pressure-image detail-img"></div>
                    <div className="weather-hour-detail__pressure-title">Pressure</div>
                    <div>{props.hourDetail.main.pressure} pressure unit "hPa"</div>
                </div>
                <div className="weather-hour-detail__pop detail-p">
                    <div className="weather-hour-detail__pop-image detail-img"><img src={drop} alt="drop" /></div>
                    <div className="weather-hour-detail__pop-title">Precipitation probability</div>
                    <div>{props.hourDetail.pop}%</div>
                </div>
                <div className="weather-hour-detail__cloudy detail-p">
                    <div className="weather-hour-detail__cloudy-image detail-img"></div>
                    <div className="weather-hour-detail__cloudy-title">Cloudy</div>
                    <div>{props.hourDetail.clouds.all}%</div>
                </div>
                <div className="weather-hour-detail__humidity detail-p">
                    <div className="weather-hour-detail__humidity-image detail-img"><img src={umbrella} alt="umbrella" /></div>
                    <div className="weather-hour-detail__humidity-title">Humidity</div>
                    <div>{props.hourDetail.main.humidity}%</div>
                </div>
            </div>
            <Line />
            <div className="weather-hour-detail__header">
                <div className="weather-hour-detail__city">{props.city}</div>
                <div className="weather-hour-detail__day">{daysOfWeek(props.hourDetail)}</div>
                <div className="weather-hour-detail__date">{props.hourDetail.dt_txt.slice(0, 10)}</div>
            </div>
            <Line />
            <div className="weather-hour-detail__img-status">
                <div className="weather-hour-detail__img">
                    <img src={weatherStatus(props.hourDetail)} alt="" /></div>
            </div>
        </div>
    )
}