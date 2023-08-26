const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
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
