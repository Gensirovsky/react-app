import React from 'react'

export default function searchBar(props) {
    return (
        <input value={props.value} onChange={event => props.handlerLocation(event.target.value)}/>
    )
}