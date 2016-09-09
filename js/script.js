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
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-close-btn");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.mapToggle("modal-content-showmap");
});

mapClose.addEventListener("click", mapToggle);

window.addEventListener("keydown", function(event) {
	    if(event.keyCode == 27) {
	    if (mapPopup.classList.contains("modal-content-showmap")) {
        	mapPopup.classList.remove("modal-content-showmap"); }}
});

function mapToggle(event) {
	event.preventDefault();
	mapPopup.classList.mapToggle("modal-content-show");
}