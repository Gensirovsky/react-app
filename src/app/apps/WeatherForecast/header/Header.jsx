import React, { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import moon from '../img/moon.svg'

export default function Header(props) {

    return (
        <>
            <div className='city-​​not-found'>
                <p className=' slideSource'>
                    Сity ​​not found
                </p>
            </div>
            <div className="weather-app__header">

                <SearchBar handleKeyPress={props.handleKeyPress} />
                <img src={moon} alt="moon" className='weather-app__header-img' />
                <div className='weather-app__title'>
                    <h2>Weather</h2>
                </div>
            </div>
        </>
    )
}