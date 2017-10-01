var answer = 7;

var userInput = Number(prompt("Guess a number: "))

if (userInput < answer) {
	alert("Too Low!")
}

else if (userInput > answer) {
	alert("Too High!")
}

else if (Number(userInput) === answer) { 
	alert("Correct!")
}

else {
	alert("Please enter a number!!!")
}