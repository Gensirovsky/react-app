import React from "react"
import AddTodo from "./AddTodo.jsx"
import add from "../img/add.svg"
import cancel from "../img/cancel.svg"
import folder from "../img/folder.svg"

function Menu({ marks, id, setListToDo }) {
    function MenuDisplay() {
        return (
            <>
                <div className='menu__main-item-container'>
                    <div className='menu__add menu__button'>
                        <img src={add} alt='Add task' />
                        <div className='menu__text'>Add</div>
                    </div>
                    <div className='menu__remove menu__button'>
                        <img src={cancel} alt='Cancel' />
                        <div className='menu__text'>Cancel</div>
                    </div>
                    <div className='menu__forlders menu__button'>
                        <img src={folder} alt='Folder' />
                        <div className='menu__text'>Mark</div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='todo-app__menu'>
            <div className='menu__container'>
                <AddTodo marks={marks} id={id} setListToDo={setListToDo} />
            </div>
        </div>
    )
}

export default Menu
