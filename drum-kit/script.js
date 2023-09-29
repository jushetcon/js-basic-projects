let buttons = document.querySelectorAll('.key')

buttons.forEach(function (button) {
	button.addEventListener('click', function () {
		let buttonSound = document.querySelector(`audio[data-key="${button.dataset.key}"]`)
		soundPlay(buttonSound)
		disappearingClass(button)
	})
})

window.addEventListener('keydown', function (e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	disappearingClass(key)
	soundPlay(audio)
})

function soundPlay(sound) {
	sound.currentTime = 0
	sound.play()
}

function disappearingClass(element) {
	element.classList.add('playing')
	setTimeout(function () {
		element.classList.remove('playing')
	}, 100)
}
