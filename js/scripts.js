// Video Player Handler
const video = document.getElementById("myVideo");
const btn = document.getElementById("playPauseBtn");

video.addEventListener("click", () => {
	if (video.paused) {
		video.play();
		btn.style.opacity = "0"
	} else {
		video.pause();
		btn.textContent = "▶";
		btn.style.opacity = "1"
	}
});
btn.addEventListener("click", () => {
	if (video.paused) {
		video.play();
		btn.style.opacity = "0"
	} else {
		video.pause();
		btn.textContent = "▶";
		btn.style.opacity = "1"
	}
});

// Recent News Tab Handler
function openTab(event, tabId, group) {
	var tabContents = document.querySelectorAll(".tab-content[data-group='" + group + "']");
	var tabLinks = document.querySelectorAll(".tab-container[data-group='" + group + "'] .tab");
	
	tabContents.forEach(content => content.classList.remove("active"));
	tabLinks.forEach(tab => tab.classList.remove("active"));
	
	document.getElementById(tabId).classList.add("active");
	event.currentTarget.classList.add("active");
}

// Popup Tab Heading Handler
let changeText = document.getElementById('dynamic-text');
let registerTab = document.getElementById('register')
let logInTab = document.getElementById('login');
let forgetTab = document.getElementById('forget');
registerTab.addEventListener('click', function(){
	changeText.innerText = "REGISTER";
})
logInTab.addEventListener('click', function(){
	changeText.innerText = "LOGIN";
})
forgetTab.addEventListener('click', function(){
	changeText.innerText = "FORGET";
})

new WOW().init();

$(document).ready(function() {	
	// new WOW().init();
	// Slider Handler
	$('#server-media-slider').owlCarousel({
		loop: true,
		center: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000,
		navText: ['<i class="fa-light fa-arrow-left"></i>','<i class="fa-light fa-arrow-right"></i>'],
		responsive: {
			0 : {
				items: 1,
				margin: 20,
			},
			768 : {
				items: 2,
				center: false,
				margin: 30,
			},
			1024 : {
				items: 3,
				margin: 50,
			},
			1200 : {
				margin: 70,
			}
		}
		
	});


	
		
});
