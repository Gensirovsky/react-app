import React, { useState } from "react"
import TodoList from "./todo/TodoList.jsx"
import Menu from "./actions/Menu.jsx"

function Header() {
    return (
        <div className='todo-app__header'>
            <h2>To-do list</h2>
        </div>
    )
}

function TodoApp() {
    localStorage.setItem("MarksMenu", false)
    let [marks, setMarks] = useState([
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
    ])
    let [listToDo, setListToDo] = useState([
        {
            id: 1,
            name: "Купити продукти",
            children: null,
            mark: null,
            child: false,
            filtered: false,
        },
        {
            id: 2,
            name: "Донести продукти додому",
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 3,
            name: "Приготувати продукти",
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 4,
            name: "Поїсти",
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 5,
            name: "Помити посуд",
            mark: ["secondary "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 6,
            name: "Помити посуд",
            mark: ["main "],
            child: false,
            filtered: false,
            children: [
                {
                    id: 3,
                    name: "gg",
                    mark: ["main "],
                    children: null,
                    child: true,
                    filtered: false,
                },
                {
                    id: 4,
                    name: "ff",
                    mark: ["secondary ", "main "],
                    child: true,
                    filtered: false,
                    children: [
                        {
                            id: 2,
                            mark: ["secondary "],
                            name: "Донести продукти додому kdjshdnvnslkvkskcxzlk jekghke eg egne gengeng ergner g",
                            child: true,
                            children: null,
                            filtered: false,
                        },
                        {
                            id: 3,
                            name: "Приготувати продукти",
                            mark: ["secondary "],
                            child: true,
                            children: null,
                            filtered: false,
                        },
                    ],
                },
            ],
        },
    ])
    let [isListFiltered, setIsListFiltered] = useState(false)

    return (
        <div className='todo-app'>
            <Header />

            <TodoList
                list={listToDo}
                marks={marks}
                isFiltered={isListFiltered}
            />
            <Menu
                marks={marks}
                setMarks={setMarks}
                id={listToDo.length ? listToDo.length + 1 : 1}
                list={listToDo}
                setListToDo={setListToDo}
                isFiltered={isListFiltered}
                setIsListFiltered={setIsListFiltered}
            />
        </div>
    )
}

export default TodoApp
