
function scrollBarFix() {
	let i = false
	return function () {
		const elem = document.querySelector('.todo-app__todos');
		if (elem.clientHeight !== elem.scrollHeight && !i) {
			elem.style.paddingRight = parseFloat(getComputedStyle(elem).paddingRight) - 5 + 'px'
			i = true
		}
		if (elem.clientHeight === elem.scrollHeight && i) {
			elem.style.paddingRight = parseFloat(getComputedStyle(elem).paddingRight) + 5 + 'px'
			i = false
		}
	}
}

export default scrollBarFix()