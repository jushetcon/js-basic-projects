let questionBtn = document.querySelectorAll('.question-btn')

questionBtn.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		let parent = e.currentTarget.parentElement.parentElement
		parent.classList.toggle('show-text')
	})
})
