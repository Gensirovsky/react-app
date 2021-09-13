import React from "react";
import add from "../img/add.svg";
import cancel from "../img/cancel.svg";
import search from "../img/search.svg";
import downArrow from "../img/down-arrow.svg";
import folder from "../img/folder.svg";
import MarksMenu from "./MarksMenu.jsx";

export default function MenuDisplay({
    marks,
    setMarks,
    list,
    setListToDo,
    setIsListFiltered,
}) {
    function addTodoHanler() {
        marksMenuHandler(false);
        const menu = document.querySelector(".menu__container");
        menu.style.marginLeft = "-100%";
    }
    function openFilterHander(e) {
        if (e.target.closest(".menu__filter-content")) {
            e.currentTarget.style.marginTop =
                -e.currentTarget.offsetHeight / 2 + "px";
        } else if (e.target.closest("#filterCls")) {
            e.currentTarget.style.marginTop = 0 + "px";
        }
    }

    //filter to-do-list
    function filterHandler(e, todos) {
        e.preventDefault();
        let filter = e.target.elements.filterValue.value;
        if (!filter.length) return;

        filter += " ";

        function filterFunc(todos) {
            return todos.map((el) => {
                if (el.children && el.mark?.includes(filter)) {
                    return {
                        ...el,
                        children: filterFunc(el.children),
                    };
                }
                if (el.children && !el.mark?.includes(filter)) {
                    filterFunc(el.children);
                }
                if (el.mark?.includes(filter)) {
                    return el;
                }

                return { ...el, filtered: true };
            });
        }
        console.log(filterFunc(todos));
        setIsListFiltered(true);
        setListToDo(filterFunc(todos));
    }

    //filter reset
    function filterClear(list) {
        setIsListFiltered(false);
        setListToDo(
            list
                .map((el) => {
                    if (el.child) return null;
                    else {
                        return { ...el, filtered: false };
                    }
                })
                .filter((el) => {
                    return el != null;
                })
        );
    }

    // open/close marksMenu
    function marksMenuHandler(open = true) {
        let marksDiv = document.querySelector("#marks-list");
        marksDiv.hidden = !open;
        marksDiv.querySelector(".marks-list__mark-add-npt").focus();
    }

    return (
        <>
            <div className="menu__main-item-container">
                <div
                    className="menu__add-button menu__button"
                    onClick={() => addTodoHanler()}
                >
                    <div className="menu__content">
                        <img src={add} alt="Add task" />
                        <div className="menu__text"></div>
                    </div>
                </div>

                <div className="menu__filter menu__button">
                    <div
                        className="menu__filter-container"
                        onClick={(e) => openFilterHander(e)}
                    >
                        <div className="menu__content menu__filter-content">
                            <img src={search} alt="filter" />
                            <div className="menu__text"></div>
                        </div>
                        <div className="filter__container">
                            <form onSubmit={(e) => filterHandler(e, list)}>
                                <input
                                    className="filter__input"
                                    type="text"
                                    name="filterValue"
                                    autoComplete="off"
                                />
                                <button
                                    type="submit"
                                    className="filter__submit"
                                >
                                    <img src={search} alt="search" />
                                </button>
                                <div
                                    className="filter__clear"
                                    onClick={() => filterClear(list)}
                                >
                                    <img src={cancel} alt="" />
                                </div>
                            </form>

                            <div className="filter__close">
                                <img
                                    src={downArrow}
                                    alt="close filter"
                                    id="filterCls"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="menu__forlders menu__button"
                    onClick={() => {
                        marksMenuHandler();
                    }}
                >
                    <div className="menu__content">
                        <img src={folder} alt="Folder" />
                        <div className="menu__text"></div>
                    </div>
                    <MarksMenu
                        marks={marks}
                        setMarks={setMarks}
                        divId={"marks-list"}
                    />
                </div>
            </div>
        </>
    );
}
