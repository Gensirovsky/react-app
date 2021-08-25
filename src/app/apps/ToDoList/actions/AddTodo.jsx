import React from "react"
import cancel from "../img/cancel.svg"

function AddTodo({ marks, id, setListToDo }) {
    function closeMarks(e) {
        if (e.target.id === "cls")
            document.querySelector("#markCls").hidden = true
    }
    function addTodoHandler(e) {
        e.preventDefault()
        const todoName = e.target.elements.todoName.value
        const todoMarks = Array.from(
            document.querySelectorAll(".add-mark")
        ).map((el) => el.innerHTML)
        let todo = {
            id,
            name: todoName,
            chechead: false,
            mark: todoMarks,
            children: null,
        }
        setListToDo((prev) => [...prev, todo])
        e.target.elements.todoName.value = ""
        console.log(todo)
    }
    return (
        <div className='menu__add'>
            <form
                action=''
                className='menu__add__form'
                onSubmit={(e) => addTodoHandler(e)}
                name='addTodo'
            >
                <div className='menu__add__container'>
                    <input
                        type='text'
                        placeholder='Add task'
                        className='menu__add__input'
                        name='todoName'
                        autoComplete='off'
                    />
                    <input
                        type='submit'
                        value='Add'
                        className='menu__add__submit'
                    />
                </div>
                <input
                    type='button'
                    value='Marks'
                    className='menu__add__marks'
                    onClick={() => {
                        let marksDiv = document.querySelector("#markCls")
                        marksDiv.hidden = false
                        marksDiv.focus()
                    }}
                />
                <div
                    hidden
                    className='menu__add__marks-list'
                    onClick={(e) => closeMarks(e)}
                    id='markCls'
                >
                    <div className='marks-list__btn-close'>
                        <img src={cancel} alt='close' id='cls' />
                    </div>
                    <h3 className='marks-list__title'>Marks</h3>
                    <ul className='marks-list__marks-list'>
                        {marks.map((el, i) => {
                            return (
                                <li key={i}>
                                    <span
                                        onClick={(e) =>
                                            e.target.classList.toggle(
                                                "add-mark"
                                            )
                                        }
                                    >
                                        {el}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
