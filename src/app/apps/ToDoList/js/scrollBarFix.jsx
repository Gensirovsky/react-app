function scrollBarFix() {
    let i = false
    return function () {
        const elem = document.querySelector(".todos-do")
        if (elem.clientHeight !== elem.scrollHeight && !i) {
            elem.style.paddingRight = parseFloat(getComputedStyle(elem).paddingRight) - 5 + "px"

            i = true
        }
        if (elem.clientHeight === elem.scrollHeight && i) {
            elem.style.paddingRight = parseFloat(getComputedStyle(elem).paddingRight) + 5 + "px"
            i = false
        }
    }
}

export default scrollBarFix()
