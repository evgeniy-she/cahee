window.onload = function () {
	let btn = document.querySelector('.menu-toggle');
	let menu = document.querySelector('.menu');
	let hamRotate = document.querySelector('.hamRotate');
	let ham1 = document.querySelector('.ham1');
	btn.addEventListener('click', function (e) {
		menu.classList.toggle('open');
		hamRotate.classList.toggle('active');
		ham1.classList.toggle('active');

	});
}

