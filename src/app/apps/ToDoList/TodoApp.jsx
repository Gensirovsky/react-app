import React, { useState } from "react";
import TodoList from "./todo/TodoList.jsx";
import Menu from "./actions/Menu.jsx";

function Header() {
    return (
        <div className="todo-app__header">
            <h2>To-do list</h2>
        </div>
    );
}

function TodoApp() {
    localStorage.setItem("MarksMenu", false);
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
    ]);
    let [listToDo, setListToDo] = useState([
        {
            id: 1631222044156,
            name: "Піти в магазин",
            depth: 1,
            mark: ["shop "],
            child: false,
            filtered: false,
            children: [
                {
                    id: 1631222051647,
                    name: "Купити чай",
                    depth: 2,
                    mark: null,
                    children: null,
                    child: true,
                    filtered: false,
                },
                {
                    id: 1631222051617,
                    name: "Купити цукор",
                    depth: 2,
                    mark: null,
                    children: null,
                    child: true,
                    filtered: false,
                },
                {
                    id: 1631222052215,
                    name: "Купити ПРОФЕСІЙНІ інструменти для приготування чаю",
                    depth: 2,
                    mark: ["shop "],
                    child: true,
                    filtered: false,
                    children: [
                        {
                            id: 1631222052812,
                            mark: null,
                            name: "Чайник",
                            depth: 3,
                            child: true,
                            children: null,
                            filtered: false,
                        },
                        {
                            id: 1631222053345,
                            name: "Чайна ложка",
                            depth: 3,
                            mark: null,
                            child: true,
                            children: null,
                            filtered: false,
                        },
                        {
                            id: 1631222053347,
                            name: "Чашка",
                            depth: 3,
                            mark: null,
                            child: true,
                            children: null,
                            filtered: false,
                        },
                    ],
                },
            ],
        },
        {
            id: 1631222046008,
            name: "Закип'ятити воду у чайнику",
            depth: 1,
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222046983,
            name: "Посмістити чай у чашку",
            depth: 1,
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222048185,
            name: "Насипати цукор у чашку",
            depth: 1,
            mark: ["main "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222049905,
            name: "Залити чай окропом",
            depth: 1,
            mark: ["secondary "],
            children: null,
            child: false,
            filtered: false,
        },
        {
            id: 1631222050975,
            name: "Не обпектися",
            depth: 1,
            mark: ["main "],
            child: false,
            filtered: false,
            children: false,
        },
        {
            id: 1631222050976,
            name: "Насолоджуватися чаєм",
            depth: 1,
            mark: ["main "],
            child: false,
            filtered: false,
            children: false,
        },
    ]);
    let [isListFiltered, setIsListFiltered] = useState(false);

    return (
        <div className="todo-app">
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
    );
}

export default TodoApp;
