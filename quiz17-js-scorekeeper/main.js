var input = 5;
var p1sc = 0;
var p2sc = 0;
var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");
var playto = document.getElementById("playto");
var p1button = document.querySelector("#p1click");
var p2button = document.querySelector("#p2click");
var resetbutton = document.querySelector("#reset");
var inputBox = document.querySelector("input");
var gameover = false;

function gameoverstat() {
	if (p1sc >= input || p2sc >= input) {
		gameover = true;
		if (p1sc > p2sc) {
			p1score.classList.add("winner");
			return	
		}
		p2score.classList.add("winner");
	}
}

function reset() {
	p1sc = 0;
	p2sc = 0;
	p1score.textContent = p1sc;
	p2score.textContent = p2sc;
	p1score.classList.remove("winner");
	p2score.classList.remove("winner");
	gameover = false;	
}


inputBox.addEventListener("change", function(){
	input = inputBox.value;
	playto.textContent = input;
	reset();
});


p1button.addEventListener("click", function(){
	if (gameover){return;}
	p1sc++;
	p1score.textContent = p1sc;
	gameoverstat();
});


p2button.addEventListener("click", function(){
	if (gameover){return;}
	p2sc++;
	p2score.textContent = p2sc;
	gameoverstat();
});

resetbutton.addEventListener("click", reset);