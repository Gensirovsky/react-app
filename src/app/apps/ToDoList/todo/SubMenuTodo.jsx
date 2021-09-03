import React from "react"
import trashBin from "../img/trashBin.svg"
import leftArrow from "../img/left-arrow.svg"
import cancel from "../img/cancel.svg"

function SubMenuTodo({ item }) {
    function subMenuMarkers(e) {
        return e.target
            .closest(".todos-do__sub-menu")
            .querySelectorAll(".todos-do__sub-menu-mark")
    }
    function delTodo(e) {
        e.target.closest(".todos-do").remove()
    }
    function delMarkers(e) {
        subMenuMarkers(e).forEach((el) => {
            el.classList.contains("cls-mark") ? el.remove() : null
        })
    }
    function marklist(markers) {
        return markers.map((el, id) => {
            return (
                <span
                    className='todos-do__sub-menu-mark'
                    onClick={(e) => {
                        e.target.classList.toggle("cls-mark")
                    }}
                    key={id}
                >
                    {el}
                </span>
            )
        })
    }
    function subMenuClose(e) {
        subMenuMarkers(e).forEach((el) => {
            el.classList.remove("cls-mark")
        })
        e.target.closest(".todos-do").style.marginLeft = "0"
    }
    return (
        <div className='todos-do__sub-menu'>
            <div className='todos-do__sub-menu-content'>
                {item.mark ? (
                    marklist(item.mark)
                ) : (
                    <div className='todos-do__sub-menu-without-content'>
                        empty
                    </div>
                )}
            </div>
            <div
                className='todos-do__sub-menu-btn-del todos-do__sub-menu-btn'
                onClick={(e) => {
                    delMarkers(e)
                }}
            >
                <img src={trashBin} alt='' title='Remove todo' />
            </div>
            <div
                className='todos-do__sub-menu-btn-del-todo todos-do__sub-menu-btn'
                onClick={(e) => {
                    delTodo(e)
                }}
            >
                <img src={cancel} alt='' title='Remove marks' />
            </div>
            <div
                className='todos-do__sub-menu-btn-cls todos-do__sub-menu-btn'
                onClick={(e) => subMenuClose(e)}
            >
                <img src={leftArrow} alt='' />
            </div>
        </div>
    )
}

export default SubMenuTodo
