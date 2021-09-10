import React, { useState, useEffect } from "react"
import leftArrow from "../img/left-arrow.svg"
import documentImg from "../img/document.svg"
import scrollBarFix from "../js/scrollBarFix.jsx"
import submenu from "../img/submenu.svg"
import SubMenuTodo from "./SubMenuTodo.jsx"
import depth from "../img/depth.svg"

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

// add a check mark to all children checkbox
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
    // rotate button-arrow after click
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

        // so that the scroll bar does not displace the contents
        scrollBarFix()
    }

    if (item.filtered) return null
    let children = null
    if (!isFiltered) {
        if (item.children && item.children.length) {
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

    // Load drag-image
    useEffect(() => {
        let img = new Image()
        img.src = documentImg
        img.onload = () => setDragImg(img)
    }, [])

    // delete currentItem, before adding it to dropItem
    function deleteCurrentTodo(todosArr, todo) {
        todosArr = todosArr
            .filter((item) => {
                return item.id !== todo.id
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

    function addCurrentTodo(todosArr, todo, parent) {
        todosArr = todosArr.map((item) => {
            if (item.id === parent.id) {
                // Add currentItem 'todo' in item.children 'parent'
                return {
                    ...item,
                    children: item.children
                        ? [
                              ...item.children,
                              { ...todo, child: true, depth: item.depth + 1 },
                          ]
                        : (item.children = [
                              { ...todo, child: true, depth: item.depth + 1 },
                          ]),
                }
            }
            if (item.children) {
                if (!item.children.length) {
                    return { ...item, children: null }
                }
                return {
                    ...item,
                    children: addCurrentTodo(item.children, todo, parent),
                }
            } else {
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

    function dropHandler(e, dropItem) {
        e.preventDefault()
        e.stopPropagation()
        console.log(dropItem)
        //  if (dropItem != currentItem && currentItem outside his parent && depth < 4)
        //  then Add currentItem in dropItem
        if (
            dropItem !== currentItem &&
            isOutside() &&
            getSumDepth(currentItem, dropItem) < 4
        ) {
            let itemDeletedArr = deleteCurrentTodo(todos, currentItem)
            setListToDo(addCurrentTodo(itemDeletedArr, currentItem, dropItem))
        }
        setLineBackGround(e, "")

        //currentItem outside his parent?
        function isOutside() {
            let outside = true
            dropItem.children
                ? dropItem.children.forEach((el) => {
                      if (el.id === currentItem.id) outside = false
                  })
                : (outside = true)
            return outside
        }

        function getSumDepth(currentObj, dropObj) {
            let SumLevel = 0
            function depthCurrentObjObj(obj) {
                let level = 1
                if (obj.children) {
                    level++
                    obj.children.forEach((el) => {
                        let depth = depthCurrentObjObj(el) + 1
                        level = Math.max(depth, level)
                    })
                }
                return level
            }
            SumLevel += depthCurrentObjObj(currentObj) + dropObj.depth
            return SumLevel
        }
    }

    return (
        <ul className='todo-app__todos'>
            <div
                className='todo-app__depth-cls'
                style={currentElement ? { display: "" } : { display: "none" }}
                onDragOver={(e) => {
                    e.preventDefault()
                }}
                onDrop={(e) => {
                    //move the item to the first level
                    e.preventDefault()
                    if (currentItem.depth === 1) return
                    let itemDeletedArr = deleteCurrentTodo(todos, currentItem)
                    setListToDo([
                        { ...currentItem, depth: 1 },
                        ...itemDeletedArr,
                    ])
                }}
            >
                <div className='todo-app__depth-cls-img'>
                    <img src={depth} alt='first level' />
                </div>
            </div>
            {todos.map((item) => (
                <ListItem
                    item={item}
                    isFiltered={isFiltered}
                    key={item.id}
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
