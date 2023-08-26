const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const add10 = document.querySelector('.add10')
const minus10 = document.querySelector('.minus10')
const reset = document.querySelector('.reset')
const value = document.getElementById('value')

increase.addEventListener('click', function () {
	value.innerHTML++
})

reset.addEventListener('click', function () {
	value.innerHTML = 0
})

decrease.addEventListener('click', function () {
	value.innerHTML--
})

add10.addEventListener('click', function () {
	value.innerHTML = Number(value.innerHTML) + 10
})

minus10.addEventListener('click', function () {
	value.innerHTML = Number(value.innerHTML) - 10
})

// let count = 0
// const value = document.querySelector('#value')
// const btns = document.querySelectorAll('.btn')

// btns.forEach(function (btn) {
// 	btn.addEventListener('click', function (e) {
// 		const styles = e.currentTarget.classList
// 		if (styles.contains('decrease')) {
// 			count--
// 		} else if (styles.contains('increase')) {
// 			count++
// 		} else {
// 			count = 0
// 		}
// 		value.textContent = count
// 	})
// })
