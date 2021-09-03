import React from "react"
import AddTodo from "./AddTodo.jsx"

import MenuDisplay from "./MenuDisplay.jsx"

function Menu({
    marks,
    setMarks,
    id,
    list,
    setListToDo,
    setIsListFiltered,
    isFiltered,
}) {
    return (
        <div className='todo-app__menu'>
            <div className='menu__container'>
                <MenuDisplay
                    marks={marks}
                    setMarks={setMarks}
                    setListToDo={setListToDo}
                    list={list}
                    setIsListFiltered={setIsListFiltered}
                />

                <AddTodo
                    id={id}
                    setListToDo={setListToDo}
                    marks={marks}
                    setMarks={setMarks}
                    isFiltered={isFiltered}
                />
            </div>
        </div>
    )
}

export default Menu
