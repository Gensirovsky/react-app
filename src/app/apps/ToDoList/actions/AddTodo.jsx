import React from "react"
import cancel from "../img/cancel.svg"
import MarksMenu from "./MarksMenu.jsx"

function AddTodo({ setListToDo, marks, setMarks, isFiltered }) {
    function closeMenuAdd() {
        const menu = document.querySelector(".menu__container")
        menu.style.marginLeft = "0"
    }
    function addTodoHandler(e) {
        e.preventDefault()
        const todoName = e.target.elements.todoName.value
        if (!todoName.length) return
        const todoMarks = Array.from(document.querySelectorAll(".add-mark")).map((el) => el.innerHTML + " ")
        let todo = {
            id: Date.now(),
            name: todoName,
            depth: 1,
            mark: todoMarks.length ? todoMarks : null,
            child: false,
            children: null,
            filtered: isFiltered,
        }
        console.log(todo)
        setListToDo((prev) => [...prev, todo])
        e.target.elements.todoName.value = ""
    }
    return (
        <div className='menu__add'>
            <div className='menu__add__main-container'>
                <form action='' className='menu__add__form' onSubmit={(e) => addTodoHandler(e)} name='addTodo'>
                    <input
                        type='text'
                        placeholder='Add task'
                        className='menu__add__input menu__add__npt'
                        name='todoName'
                        autoComplete='off'
                    />
                    <input type='submit' value='Add' className='menu__add__submit menu__add__npt' />
                </form>
                <div
                    className='menu__add__marks'
                    onClick={() => {
                        let marksDiv = document.querySelector("#menu-add-marks-list")
                        marksDiv.hidden = false
                        marksDiv.focus()
                    }}
                >
                    <div className='menu__add__marks-title'>Marks</div>
                    <MarksMenu marks={marks} setMarks={setMarks} divId={"menu-add-marks-list"} />
                </div>
                <div className='menu__add__close' onClick={() => closeMenuAdd()}>
                    <img src={cancel} alt='close' />
                </div>
            </div>
        </div>
    )
}

export default AddTodo
