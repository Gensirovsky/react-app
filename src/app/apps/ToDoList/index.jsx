import React from 'react'
import ReactDOM from 'react-dom'
import './styles/todolist-styles.scss'
import TodoApp from './TodoApp.jsx'

function App() {
    return (
        <React.StrictMode>
            <TodoApp />
        </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.getElementById('todolist-app'))