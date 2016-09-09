var link = document.querySelector(".company-feedback-btn");
var popup = document.querySelector(".modal-content-write");
var close = popup.querySelector(".modal-close-btn");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=email]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-show");
	login.focus();
});

close.addEventListener("click", toggleForm);

window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show"); }}
});

function toggleForm(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-show");
	login.focus();
}

var mapOpen = document.querySelector(".company-contacts-map");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".modal-close-btn-map");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.toggle("show-map");
});

mapClose.addEventListener("click", toggleFormMap);

window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (mapPopup.classList.contains("show-map")) {
			mapPopup.classList.remove("show-map"); }}
});

function toggleFormMap(event) {
	event.preventDefault();
	mapPopup.classList.toggle("show-map");
}