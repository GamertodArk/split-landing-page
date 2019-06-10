let container = document.querySelector('.container');
let right = document.querySelector('.split.right');
let left = document.querySelector('.split.left');

right.addEventListener('mouseover', e => {
	container.classList.add('hover-right');
});

right.addEventListener('mouseleave', e => {
	container.classList.remove('hover-right');
});

left.addEventListener('mouseover', e => {
	container.classList.add('hover-left');
});

left.addEventListener('mouseleave', e => {
	container.classList.remove('hover-left');
});