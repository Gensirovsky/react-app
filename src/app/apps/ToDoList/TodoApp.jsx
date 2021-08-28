import React, { useState } from "react"
import TodoList from "./todo/TodoList.jsx"
import Menu from "./actions/Menu.jsx"

const allMarks = [
    "main",
    "secondary",
    "last",
    "chell",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "chell",
    "chell",
    "chell",
    "chell",
    "chell",
    "chell",
    "chell",
    "chell",
]

function Header() {
    return (
        <div className='todo-app__header'>
            <h2>To-do list</h2>
        </div>
    )
}

function TodoApp() {
    let [listToDo, setListToDo] = useState([
        {
            id: 1,
            name: "Купити продукти",
            children: null,
            mark: null,
        },
        {
            id: 2,
            name: "Донести продукти додому",
            mark: "main",
            children: null,
        },
        {
            id: 3,
            name: "Приготувати продукти",
            mark: "main",
            children: null,
        },
        {
            id: 4,
            name: "Поїсти",
            mark: "main",
            children: null,
        },
        {
            id: 5,
            name: "Помити посуд",
            mark: "secondary",
            children: null,
        },
        {
            id: 6,
            name: "Помити посуд",
            mark: null,
            children: [
                {
                    id: 3,
                    name: "gg",
                    mark: "main",
                    children: null,
                },
                {
                    id: 4,
                    name: "ff",
                    mark: "secondary main",
                    children: [
                        {
                            id: 2,
                            name: "Донести продукти додому kdjshdnvnslkvkskcxzlk jekghke eg egne gengeng ergner g",
                            children: null,
                        },
                        {
                            id: 3,
                            name: "Приготувати продукти",
                            mark: "secondary",
                            children: null,
                        },
                    ],
                },
            ],
        },
    ])
    return (
        <div className='todo-app'>
            <Header />
            <TodoList list={listToDo} />
            <Menu
                marks={allMarks}
                id={listToDo.length ? listToDo.length + 1 : 1}
                setListToDo={setListToDo}
            />
        </div>
    )
}

export default TodoApp
