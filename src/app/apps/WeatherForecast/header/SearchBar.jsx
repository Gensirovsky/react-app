import React from 'react'
import location from '../img/location.svg'

export default function searchBar(props) {
    return (
        <div className='weather-app__search-bar'>
            <img className='image' src={location} />
            <input value={props.value} onChange={event => props.handlerLocation(event.target.value)} />
        </div>
    )
}