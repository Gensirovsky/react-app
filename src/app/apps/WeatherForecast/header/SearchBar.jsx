import React from 'react'
import location from '../img/location.svg'

export default function searchBar(props) {
    return (
        <div className='weather-app__search-bar'>
            <img className='image' src={location} />
            <input type='text' placeholder='City' onKeyPress={event => props.handleKeyPress(event)} />
        </div>
    )
}