
/* Framework Perso */

// Quick call of querySelector

const $ = function() {
	return document.querySelector(...arguments);
};

// Cross Browser implementation of Event Listener
// obj = HTMLElement
// event = string (exemple : click, change, ...)
// func = function(event) { ... }

const _addEventListener = function(obj, event, func) {
	// W3C
    if(obj.addEventListener) {
		obj.addEventListener(event, func, false);
		return true;
	}
	// Microsoft model
	else if(obj.attachEvent) {
		return obj.attachEvent("on"+ event, func);
	}
};

// Système de message d'Alerte

const Alert = function(message) {
	$('#alert input.message').value = message;
	$('#alert').classList.toggle("active");
	setTimeout(function() { $('#alert').classList.toggle("active"); }, 3000);
};
