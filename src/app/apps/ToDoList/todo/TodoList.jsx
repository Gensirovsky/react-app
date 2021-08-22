import React from 'react'
import downArrow from '../img/down-arrow.svg'
import scrollBarFix from '../js/scrollBarFix.jsx'

function ListItem({ item }) {

    function checkboxHandler(e) {
        if (!e.target.checked) return
        let childrenCheckbox = e.target.closest('.todos-do__container').querySelectorAll('.todos-do__checkbox')
        if (childrenCheckbox.length) {
            childrenCheckbox.forEach(el => {
                el.checked = true
            })
        }
    }

    let children = null
    if (item.children) {
        children = (
            <ul className='todos-do__child todos-do' hidden>
                {item.children.map(i => <ListItem item={i} key={i.id} />)}
            </ul>
        )
    }
    return (
        <li className={'todos-do'}>
            <div className='todos-do__container'>
                <label className='todos-do__checkbox-label'>
                    <input type="checkbox" className='todos-do__checkbox' onChange={(e) => checkboxHandler(e)} />
                    <span className="todos-do__checkbox-fake"></span>
                    {item.name}
                </label>
                {children ? <div className='todos-do__btn-down'><img src={downArrow} /></div> : null}
                <div className='todos-do__line'></div>
                {children}
            </div>
        </li>
    )
}
function TodoList(props) {
    function listOpenHandler(event) {
        if (!event.target.closest('.todos-do__btn-down')) return
        let target = event.target.closest('.todos-do__container')
        let children = target.parentNode.querySelector('ul')
        if (!children) return

        event.target.style.transform = children.hidden ? 'rotate(-90deg)' : 'rotate(0deg)'
        children.hidden = !children.hidden

        scrollBarFix()
    }

    return (
        <ul className='todo-app__todos' onClick={(e) => listOpenHandler(e)}>
                {props.list.map((item, i) => (
                    <ListItem item={item} key={i} />
                ))}
        </ul>
    )
}

export default TodoList