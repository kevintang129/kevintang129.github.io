//script to create image grid
var elements = document.getElementsByClassName("column");
var i;

function one() {
	for(i = 0; i < elements.length; i++){
		elements[i].style.flex = "97.6%";
	}
}

function two() {
	for(i = 0; i < elements.length; i++){
		elements[i].style.flex = "48.8%";
	}
}

function four() {
	for(i = 0; i < elements.length; i++){
		elements[i].style.flex = "24.4";
	}
}

//script for buttons
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
