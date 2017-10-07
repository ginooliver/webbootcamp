var button = document.querySelector("button");

var body = document.querySelector("body");

// var isPurple = false;

button.addEventListener("click", function(){
	body.classList.toggle("purple");
	// if (isPurple === false){
	// 	body.style.background = "purple";	
	// }
	
	// else {
	// 	body.style.background = "white";
	// }
	// isPurple = !isPurple;
});