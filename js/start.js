const startButton = document.getElementById('startButton');

const content = document.querySelector('.content');

startButton.addEventListener('click', () => {
	content.classList.remove('h');
	
	canvas.classList.add('h');
	startButton.classList.add('h');
});



