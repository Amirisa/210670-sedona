var link = document.querySelector(".order-btn");
var popup = document.querySelector(".order-form-choise");

var arrive = popup.querySelector("[name=date-arrive]");
var depart = popup.querySelector("[name=date-depart]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=chidren]");

var form = document.querySelector(".order-form-choise");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("order-form-choise-show");
  popup.classList.remove("modal-error");
	arrive.focus();
});

form.addEventListener("submit", function(evt) {
	if (!arrive.value || !depart.value || !adult.value || !children.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} 
});
