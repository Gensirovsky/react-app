import React from 'react'
import ReactDOM from 'react-dom'
import Weather from './Weather.jsx'
import './styles/weather-styles.scss'


function App() {
    return (
        <React.StrictMode>
            <Weather />
        </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.getElementById('weather-app'))
