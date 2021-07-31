import React, { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import moon from '../img/moon.svg'

export default function Header() {
    let [location, setLocation] = useState('Kyiv')

    function handlerLocation(value) {
        setLocation(value)
    }
    return (
        <div>
            <SearchBar value={location} handlerLocation={handlerLocation} />
            <img src={moon} alt="moon" />
        </div>
    )
}