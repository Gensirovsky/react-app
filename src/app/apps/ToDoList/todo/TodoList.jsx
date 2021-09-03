import React from "react"
import leftArrow from "../img/left-arrow.svg"
import scrollBarFix from "../js/scrollBarFix.jsx"
import submenu from "../img/submenu.svg"
import SubMenuTodo from "./SubMenuTodo.jsx"

function subMenuOpen(e) {
    document.querySelectorAll(".todos-do").forEach((el) => {
        el.style.marginLeft = "0"
    })

    const todosDiv = e.target.closest(".todos-do")
    todosDiv.style.marginLeft = "-100%"

    //close parent block and turn arrow
    const todosDivParent = todosDiv.querySelector(".todos-do__child")
    if (!todosDivParent) return
    if (!todosDivParent.classList.contains("visually-hidden")) {
        todosDivParent.classList.add("visually-hidden")
        todosDiv.querySelector(".todos-do__btn-down-img").style.transform =
            "rotate(0deg)"
    }
}

function checkboxHandler(e) {
    if (!e.target.checked) return
    let childrenCheckbox = e.target
        .closest(".todos-do__container")
        .querySelectorAll(".todos-do__checkbox")
    if (childrenCheckbox.length) {
        childrenCheckbox.forEach((el) => {
            el.checked = true
        })
    }
}
function ListItem({ item, isFiltered }) {
    if (item.filtered) return null
    let children = null
    if (!isFiltered) {
        if (item.children) {
            children = (
                <ul className='todos-do__child todos-do visually-hidden'>
                    {item.children.map((i) => (
                        <ListItem item={i} key={i.id} />
                    ))}
                </ul>
            )
        }
    }

    return (
        <li className='todos-do'>
            <div className='todos-do__container'>
                <label className='todos-do__checkbox-label checkbox-label'>
                    <input
                        type='checkbox'
                        className='todos-do__checkbox checkbox'
                        onChange={(e) => checkboxHandler(e)}
                    />
                    <span className='todos-do__checkbox-fake checkbox-fake'></span>
                    {item.name}
                </label>
                {children ? (
                    <div className='todos-do__btn-down'>
                        <img
                            src={leftArrow}
                            className='todos-do__btn-down-img'
                        />
                    </div>
                ) : (
                    <div className='todos-do__btn-down' />
                )}
                <div
                    className='todos-do__btn-menu'
                    onClick={(e) => subMenuOpen(e)}
                >
                    <img src={submenu} alt='' />
                </div>
                <div className='todos-do__line'></div>
                {children}
            </div>
            <SubMenuTodo item={item} />
        </li>
    )
}

function listOpenHandler(event) {
    if (!event.target.closest(".todos-do__btn-down")) return
    let target = event.target.closest(".todos-do__container")
    let children = target.parentNode.querySelector("ul")
    if (!children) return
    children.classList.toggle("visually-hidden")

    event.target.style.transition = "all .25s ease"
    event.target.style.transform = children.classList.contains(
        "visually-hidden"
    )
        ? "rotate(0deg)"
        : "rotate(-90deg)"
    scrollBarFix()
}
function TodoList(props) {
    return (
        <ul className='todo-app__todos' onClick={(e) => listOpenHandler(e)}>
            {props.list.map((item, i) => (
                <ListItem item={item} isFiltered={props.isFiltered} key={i} />
            ))}
        </ul>
    )
}

export default TodoList
//(event.target.src = require("../img/down-arrow.svg"))
