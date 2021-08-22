import React from "react"
import add from "../img/add.svg"
import cancel from "../img/cancel.svg"
import folder from "../img/folder.svg"

function Menu() {
    return (
        <div className='todo-app__menu'>
            <div className='menu__container'>
                <div className='menu__add menu__button'>
                    <img src={add} alt='Add task' />
                    <div className='menu__text'>Add</div>
                </div>
                <div className='menu__remove menu__button'>
                    <img src={cancel} alt='Xancel' />
                    <div className='menu__text'>Cancel</div>
                </div>
                <div className='menu__forlders menu__button'>
                    <img src={folder} alt='Folder' />
                    <div className='menu__text'>Folder</div>
                </div>
            </div>
        </div>
    )
}

export default Menu
