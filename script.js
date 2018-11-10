var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement()
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement()
	}
}

function removeParentElement() {
event.target.parentElement.remove()
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


var deleteButton = document.getElementsByClassName("delete");
var i;
for (i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", removeParentElement)
}


function createListElement() {
	var li = document.createElement("li");
	var addButton = document.createElement("button");
	addButton.appendChild(document.createTextNode("Delete"));
	addButton.onclick = removeParentElement;
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(addButton);
	ul.appendChild(li);
	input.value = "";
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}