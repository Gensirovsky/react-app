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
            id: 1631222044156,
            name: "Купити продукти",
            depth: 1,
            children: null,
            mark: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222046008,
            name: "Донести продукти додому",
            depth: 1,
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222046983,
            name: "Приготувати продукти",
            depth: 1,
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222048185,
            name: "Поїсти",
            depth: 1,
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222049905,
            name: "Помити посуд",
            depth: 1,
            mark: ["secondary "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222050975,
            name: "Помити посуд",
            depth: 1,
            mark: ["main "],
            child: false,
            filtered: false,
            children: [
                {
                    id: 1631222051643,
                    name: "gg",
                    depth: 2,
                    mark: ["main "],
                    children: null,
                    child: true,
                    filtered: false,
                },
                {
                    id: 1631222052275,
                    name: "ff",
                    depth: 2,
                    mark: ["secondary ", "main "],
                    child: true,
                    filtered: false,
                    children: [
                        {
                            id: 1631222052812,
                            mark: ["secondary "],
                            name: "Донести продукти додому kdjshdnvnslkvkskcxzlk jekghke eg egne gengeng ergner g",
                            depth: 3,
                            child: true,
                            children: null,
                            filtered: false,
                        },
                        {
                            id: 1631222053345,
                            name: "Приготувати продукти",
                            depth: 3,
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
                todos={listToDo}
                isFiltered={isListFiltered}
                setListToDo={setListToDo}
            />
            <Menu
                marks={marks}
                setMarks={setMarks}
                list={listToDo}
                setListToDo={setListToDo}
                isFiltered={isListFiltered}
                setIsListFiltered={setIsListFiltered}
            />
        </div>
    )
}

export default TodoApp
