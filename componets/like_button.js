// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { liked: false };
// 	}

// 	render() {
// 		if (this.state.liked) {
// 			return 'You liked this.';
// 		}

// 		return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like');
// 	}
// }

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

// DUMP JS

// Globals
var dropdowns = document.getElementsByClassName('main-nav__item');
var xhr = new XMLHttpRequest();
var content = document.getElementById('content');

// Animations on start
gsap.from('.sidebar__content', { opacity: 0, duration: 1, x: -50 });
gsap.from('.sidebar__footer', { opacity: 0, duration: 1, x: -50 });
gsap.from('.content', { opacity: 0, duration: 1, delay: 1, y: -50 });

// Function for active state
document.getElementById('main-nav__list').addEventListener('click', function (e) {
	var href = e.target.attributes.href.textContent;
	// gsap.to('.content', { opacity: 0, duration: 1, delay: 1, y: -50 });

	if (e.target && e.target.matches('li a')) {
		e.stopPropagation();

		xhr.onload = function () {
			// if(href === )

			if (this.status === 200) {
				content.innerHTML = xhr.responseText;
			} else {
				console.warn('Did not recieve 200 OK');
			}
		};
		xhr.open('get', href);
		xhr.send();

		gsap.from('.content', { opacity: 0, duration: 1, y: -50 });
		gsap.kill();

		for (var i = 0; i < dropdowns.length; i++) {
			if (dropdowns[i].classList.contains('active')) {
				dropdowns[i].classList.remove('active');
			}
		}
		if (e.target.matches('#commissionsID')) {
			document.querySelector('.dropdown-content').classList.add('show');
		} else {
			document.querySelector('.dropdown-content').classList.remove('show');
		}
		e.target.classList.add('active');
	}
});

// Mobile toggle
document.getElementById('hamburger').addEventListener('click', function (e) {
	document.querySelector('.main-nav ').classList.toggle('show-flex');
});