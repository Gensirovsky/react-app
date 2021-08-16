import React from 'react'
import downArrow from '../img/down-arrow.svg'

function ListItem({ item, id }) {
    function checkboxHandler() {
        console.log(1)
    }

    let children = null
    if (item.children) {
        children = (
            <ul className='children'>
                {item.children.map(i => <ListItem item={i} key={i.id} />)}
            </ul>
        )
    }
    return (
        <li className={children ? 'parent todos-do' : 'todos-do'}>
            <div className='todos-do__container'>
                <input type='checkbox' className="todos-do__checkbox" id={id} onClick={() => checkboxHandler('label')} />
                <div className='todos-do__checkbox-label' id={'label-' + id}>
                    <label htmlFor={id}>{item.name}</label>
                </div>
                {children ? <div className='todos-do__btn-down'><img src={downArrow} /></div> : null}
                <div className='todos-do__line'></div>
                {children}
            </div>
        </li>
    )
}
function TodoList(props) {

    return (
        <ul className='todo-app__todos'>
            {props.list.map((item, i) => (
                <ListItem item={item} id={i} key={i} />
            ))}
        </ul>
    )
}

export default TodoList