import React, { useState, useEffect } from "react"
import leftArrow from "../img/left-arrow.svg"
import documentImg from "../img/document.svg"
import scrollBarFix from "../js/scrollBarFix.jsx"
import submenu from "../img/submenu.svg"
import addImg from "../img/add.svg"
import SubMenuTodo from "./SubMenuTodo.jsx"

function subMenuOpen(e) {
    document.querySelectorAll(".todos-do").forEach((el) => {
        el.style.transition = "margin-left 0.25s ease"
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
function ListItem({ item, isFiltered, ...props }) {
    function listOpenHandler(event) {
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

    if (item.filtered) return null
    let children = null
    if (!isFiltered) {
        if (item.children) {
            children = (
                <ul className='todos-do__child todos-do visually-hidden'>
                    {item.children.map((i) => (
                        <ListItem
                            item={i}
                            key={i.id}
                            dragStartHandler={props.dragStartHandler}
                            dragLeaveHandler={props.dragLeaveHandler}
                            dragEndHandler={props.dragEndHandler}
                            dragOverHandler={props.dragOverHandler}
                            dropHandler={props.dropHandler}
                        />
                    ))}
                </ul>
            )
        }
    }
    return (
        <li
            className='todos-do'
            draggable={true}
            onDragStart={(e) => props.dragStartHandler(e, item)}
            onDragLeave={(e) => props.dragLeaveHandler(e, item)}
            onDragEnd={(e) => props.dragEndHandler(e)}
            onDragOver={(e) => props.dragOverHandler(e)}
            onDrop={(e) => props.dropHandler(e, item)}
        >
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
                    <div
                        className='todos-do__btn-down'
                        onClick={(e) => listOpenHandler(e)}
                    >
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

function TodoList({ todos, isFiltered, setListToDo }) {
    let [currentItem, setCurrentItem] = useState(null)
    let [currentElement, setCurrentElement] = useState(null)
    let [dragImg, setDragImg] = useState()

    useEffect(() => {
        let img = new Image()
        img.src = documentImg
        img.onload = () => setDragImg(img)
    }, [])

    function deleteCurrentTodo(todosArr, todo) {
        todosArr = todosArr
            .filter((item) => {
                return JSON.stringify(item) !== JSON.stringify(todo)
            })
            .map((item) => {
                if (item.children) {
                    return {
                        ...item,
                        children: deleteCurrentTodo(item.children, todo),
                    }
                } else {
                    return item
                }
            })
        return todosArr
    }
    function detphCounter() {
        let i = 0
        return function Counter(plus) {
            console.log(i)
            return plus ? ++i : --i
        }
    }
    function addCurrentTodo(todosArr, todo, parent, depthCounter) {
        depthCounter()
        todosArr = todosArr.map((item) => {
            depthCounter(true)

            if (JSON.stringify(item) === JSON.stringify(parent)) {
                depthCounter(true)
                return {
                    ...item,
                    children: item.children
                        ? [...item.children, { ...todo, child: true }]
                        : (item.children = [{ ...todo, child: true }]),
                }
            }
            if (item.children) {
                depthCounter(true)
                return {
                    ...item,
                    children: addCurrentTodo(item.children, todo, parent),
                }
            } else {
                depthCounter(false)
                return item
            }
        })
        return todosArr
    }

    function getTodoElement(e) {
        return e.target.closest(".todos-do")
    }

    function setLineBackGround(e, color) {
        return (e.target
            .closest(".todos-do")
            .querySelector(".todos-do__line").style.backgroundColor = color)
    }

    function dragStartHandler(e, item) {
        e.stopPropagation()
        setCurrentItem(item)
        setCurrentElement(getTodoElement(e))
        getTodoElement(e).style.opacity = "0.5"
        e.dataTransfer.setDragImage(dragImg, 0, 0)
    }

    function dragLeaveHandler(e) {
        setLineBackGround(e, "")
    }
    function dragEndHandler() {
        currentElement.style.opacity = ""
        setCurrentElement(null)
    }

    function dragOverHandler(e) {
        e.preventDefault()
        if (currentElement === getTodoElement(e)) return
        setLineBackGround(e, "#98C379")
    }

    function dropHandler(e, item) {
        e.stopPropagation()
        let counterFunc = detphCounter()
        function isOutside() {
            let outside = true
            item.children
                ? item.children.forEach((el) => {
                      if (el.id === currentItem.id) a = false
                  })
                : (outside = true)
            return outside
        }

        if (item !== currentItem && isOutside()) {
            let newList = deleteCurrentTodo(todos, currentItem)
            setListToDo(addCurrentTodo(newList, currentItem, item, counterFunc))
        }

        e.preventDefault()
        setLineBackGround(e, "")
    }

    return (
        <ul className='todo-app__todos'>
            {todos.map((item, i) => (
                <ListItem
                    item={item}
                    isFiltered={isFiltered}
                    key={i}
                    dragStartHandler={dragStartHandler}
                    dragLeaveHandler={dragLeaveHandler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    dropHandler={dropHandler}
                />
            ))}
        </ul>
    )
}

export default TodoList
