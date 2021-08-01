import React, { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import moon from '../img/moon.svg'

export default function Header(props) {

    return (
        <div className="weather-app__header">
            <SearchBar value={props.value} handlerLocation={props.handlerLocation} />
            <img src={moon} alt="moon" className='weather-app__header-img' />
            <div className='weather-app__title'>
                <h2>Weather</h2>
            </div>
        </div>
    )
}