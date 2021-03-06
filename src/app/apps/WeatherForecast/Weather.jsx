import React, { useState, useEffect } from "react"
import Header from "./header/Header.jsx"
import WeatherToday from "./content/WeatherToday.jsx"
import WeatherWeek from "./content/WeatherWeek.jsx"
import weatherContext from "./Context.jsx"
import sun from "./img/sun.svg"
import wind from "./img/wind.svg"
import cloud from "./img/cloud.svg"
import raining from "./img/raining.svg"
import snowflake from "./img/snowflake.svg"
import storm from "./img/storm.svg"
import moon_2 from "./img/moon_2.svg"

export default function Weather() {
    let [location, setLocation] = useState("Lviv")
    let [city, setCity] = useState("Lviv")
    let [weatherDataDay, setWeatherDataDay] = useState(null)
    let [weatherDataWeek, setWeatherDataWeek] = useState(null)
    const weatherToday = document.querySelector("#weather-today-carousel")
    let [selectedDay, setSelectedDay] = useState(null)
    let [isWork, setIsWord] = useState(false)

    function wDataHandler(data) {
        let today = weatherDataWeek.slice(0, 8)
        if (data[0].dt_txt === selectedDay) {
            animationDiv(weatherToday, () => setWeatherDataDay(today))
            setSelectedDay(weatherDataWeek[0].dt_txt)
            return
        }
        animationDiv(weatherToday, () => setWeatherDataDay(data))
        setSelectedDay(data[0].dt_txt)
    }

    function animationDiv(elem, func) {
        const marginLeft = window
            .getComputedStyle(elem, null)
            .getPropertyValue("margin-left")
        if (parseInt(marginLeft) < 0) {
            func()
            return
        }
        if (isWork) return
        setIsWord(true)
        setTimeout(() => {
            setIsWord(false)
        }, 750)

        function animationUp() {
            elem.style.transition = "margin-top 0s"
            elem.style.marginTop = "-100%"
        }
        function animationNormal() {
            elem.style.transition = "margin-top 0.3s"
            elem.style.marginTop = "0"
        }
        function animationDown() {
            elem.style.transition = "margin-top 0.3s"
            elem.style.marginTop = "100%"
        }
        animationDown()
        setTimeout(() => {
            animationUp()
            func()
            setTimeout(() => {
                animationNormal()
            }, 100)
        }, 300)
    }

    function weatherStatus(prps) {
        const time = prps.dt_txt.slice(11, 13)
        const id = prps.weather[0].id
        switch (true) {
            case id <= 299:
                return storm
            case id <= 599:
                return raining
            case id <= 700:
                return snowflake
            case id <= 799:
                return wind
            case id <= 800:
                return time >= 6 && time < 21 ? sun : moon_2
            case id <= 1000:
                return cloud
        }
    }

    function daysOfWeek(prps) {
        const days = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        }
        return days[new Date(prps.dt_txt).getDay()]
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            let locationNormalCase = e.target.value
                .split("")
                .map((el, i) => (i === 0 ? el.toUpperCase() : el.toLowerCase()))
                .join("")
            setLocation(locationNormalCase)
        }
    }

    function updateAnimation() {
        document
            .querySelectorAll(".weather-day-card-animation")
            .forEach((el) => {
                el.classList.remove("select-border")
                el.classList.add("opacity")
                setTimeout(() => {
                    el.classList.remove("opacity")
                }, 500)
            })
        animationDiv(
            document.querySelector("#weather-today-carousel"),
            () => {}
        )
    }

    function errorDiv() {
        const errDiv = document.querySelector(".slideSource")
        errDiv.classList.add("fade")

        setTimeout(() => {
            errDiv.classList.remove("fade")
        }, 4000)
    }

    useEffect(() => {
        let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=b54007d1a20d9e5b6402cbb67162c324`
        fetch(weatherURL)
            .then((res) => {
                if (!res.ok) {
                    console.log(res.status)
                    throw Error(res.status)
                }
                return res.json()
            })
            .then((data) => {
                setWeatherDataDay(data.list)
                setWeatherDataWeek(data.list)
                setCity(location)
                updateAnimation()
            })
            .catch((err) => {
                errorDiv()
            })
    }, [location])

    return (
        <div className='weather-app'>
            <Header handleKeyPress={handleKeyPress} />
            <weatherContext.Provider value={{ daysOfWeek, weatherStatus }}>
                <WeatherToday weatherData={weatherDataDay} city={city} />
                <WeatherWeek
                    weatherData={weatherDataWeek}
                    setWeatherData={wDataHandler}
                />
            </weatherContext.Provider>
        </div>
    )
}
