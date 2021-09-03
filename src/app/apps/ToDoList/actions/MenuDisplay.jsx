import React from "react"
import add from "../img/add.svg"
import cancel from "../img/cancel.svg"
import search from "../img/search.svg"
import downArrow from "../img/down-arrow.svg"
import folder from "../img/folder.svg"
import MarksMenu from "./MarksMenu.jsx"

export default function MenuDisplay({
    marks,
    setMarks,
    list,
    setListToDo,
    setIsListFiltered,
}) {
    function addButtonHanler() {
        const menu = document.querySelector(".menu__container")
        menu.style.marginLeft = "-100%"
    }
    function openFilterHander(e) {
        if (e.target.closest(".menu__filter-content")) {
            e.currentTarget.style.marginTop =
                -e.currentTarget.offsetHeight / 2 + "px"
        } else if (e.target.closest("#filterCls")) {
            e.currentTarget.style.marginTop = 0 + "px"
        }
    }
    function filterHandler(e, todos) {
        e.preventDefault()
        let filter = e.target.elements.filterValue.value
        if (!filter.length) return

        filter += " "
        let filteredTodos = []
        function filterFunc(todos) {
            todos.forEach((el) => {
                if (el.children && el.mark?.includes(filter)) {
                    filteredTodos.push(el)
                    return filterFunc(el.children)
                }
                if (el.children && !el.mark?.includes(filter)) {
                    return filterFunc(el.children)
                }
                if (el.mark?.includes(filter)) {
                    filteredTodos.push(el)
                    return
                }
                filteredTodos.push({ ...el, filtered: true })
                return
            })
        }
        filterFunc(todos)
        setIsListFiltered(true)
        setListToDo(filteredTodos)
    }
    function filterClear(list) {
        setIsListFiltered(false)
        setListToDo(
            list
                .map((el) => {
                    console.log(el)
                    if (el.child) return null
                    else {
                        console.log({ ...el, filtered: false })
                        return { ...el, filtered: false }
                    }
                })
                .filter((el) => {
                    return el != null
                })
        )
    }

    return (
        <>
            <div className='menu__main-item-container'>
                <div
                    className='menu__add-button menu__button'
                    onClick={() => addButtonHanler()}
                >
                    <div className='menu__content'>
                        <img src={add} alt='Add task' />
                        <div className='menu__text'>Add</div>
                    </div>
                </div>

                <div className='menu__filter menu__button'>
                    <div
                        className='menu__filter-container'
                        onClick={(e) => openFilterHander(e)}
                    >
                        <div className='menu__content menu__filter-content'>
                            <img src={search} alt='filter' />
                            <div className='menu__text'>Filter</div>
                        </div>
                        <div className='filter__container'>
                            <form onSubmit={(e) => filterHandler(e, list)}>
                                <input
                                    className='filter__input'
                                    type='text'
                                    name='filterValue'
                                    autoComplete='off'
                                />
                                <button
                                    type='submit'
                                    className='filter__submit'
                                >
                                    <img src={search} alt='search' />
                                </button>
                                <div
                                    className='filter__clear'
                                    onClick={() => filterClear(list)}
                                >
                                    <img src={cancel} alt='' />
                                </div>
                            </form>

                            <div className='filter__close'>
                                <img
                                    src={downArrow}
                                    alt='close filter'
                                    id='filterCls'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='menu__forlders menu__button'
                    onClick={() => {
                        let marksDiv = document.querySelector("#marks-list")
                        marksDiv.hidden = false
                        marksDiv.focus()
                    }}
                >
                    <div className='menu__content'>
                        <img src={folder} alt='Folder' />
                        <div className='menu__text'>Mark</div>
                    </div>
                    <MarksMenu
                        marks={marks}
                        setMarks={setMarks}
                        divId={"marks-list"}
                    />
                </div>
            </div>
        </>
    )
}
