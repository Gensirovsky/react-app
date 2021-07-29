import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar.jsx'

function App() {
    let [location, setLocation] = useState('Kyiv')

    function handlerLocation(value) {
        setLocation(value)
    }
    return (
        <div className='weather-app'>
            <SearchBar value={location} handlerLocation={handlerLocation}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('weather-app'))
