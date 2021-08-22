import React, { useState } from "react"
import TodoList from "./todo/TodoList.jsx"
import Menu from "./actions/Menu.jsx"

const listToDo = [
    {
        id: 1,
        name: "Купити продукти",
        children: null,
    },
    {
        id: 2,
        name: "Донести продукти додому",
        children: null,
    },
    {
        id: 3,
        name: "Приготувати продукти",
        children: null,
    },
    {
        id: 4,
        name: "Поїсти",
        children: null,
    },
    {
        id: 5,
        name: "Помити посуд",
        children: null,
    },
    {
        id: 6,
        name: "Помити посуд",
        children: [
            {
                id: 3,
                name: "gg",
                children: null,
            },
            {
                id: 4,
                name: "ff",
                children: [
                    {
                        id: 2,
                        name: "Донести продукти додому kdjshdnvnslkvkskcxzlk jekghke eg egne gengeng ergner g",
                        children: null,
                    },
                    {
                        id: 3,
                        name: "Приготувати продукти",
                        children: null,
                    },
                ],
            },
        ],
    },
]

function Header() {
    return (
        <div className='todo-app__header'>
            <h1>To-do list</h1>
        </div>
    )
}

function TodoApp() {
    return (
        <div className='todo-app'>
            <Header />
            <TodoList list={listToDo} />
            <Menu />
        </div>
    )
}

export default TodoApp
