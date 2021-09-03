import React from "react"
import cancel from "../img/cancel.svg"

export default function MarksMenu({ marks, divId, setMarks }) {
    function closeMarks(e) {
        if (e.target.id === "cls")
            document.querySelector("#" + divId).hidden = true
        e.stopPropagation()
    }
    function addMarkHandler(e) {
        e.preventDefault()
        const mark = e.target.elements.inputMark.value
        setMarks((prev) => [...prev, mark])
        document.querySelector("#" + divId).hidden = false
        document.querySelector("#" + divId).focus()
    }

    return (
        <div
            hidden
            className='marks-list'
            id={divId}
            onClick={(e) => closeMarks(e)}
        >
            <div className='marks-list__btn-close'>
                <img src={cancel} alt='close' id='cls' />
            </div>
            <h3 className='marks-list__title'>Marks</h3>
            <form
                className='marks-list__mark-add'
                onSubmit={(e) => addMarkHandler(e)}
            >
                <input
                    type='input'
                    name='inputMark'
                    placeholder='Add mark'
                    autoComplete='off'
                    className='marks-list__mark-add-npt'
                />
                <input
                    type='submit'
                    value='Add'
                    className='marks-list__mark-add-btn'
                />
            </form>
            <ul className='marks-list__marks-list'>
                {marks.map((el, i) => {
                    return (
                        <li key={i}>
                            <span
                                onClick={(e) =>
                                    e.target.classList.toggle("add-mark")
                                }
                            >
                                {el}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
