var todos = [];
var ask = "";

function newTodo(newEntry) {
	todos.push(newEntry);
}


function listTodo() {

	console.log("**********");
	todos.forEach(function(todo, ind) {
		console.log("[" + ind + "] " + todo);
	})
	console.log("**********");
	
}


function deleteTodo() {
	num = prompt("Please eneter which entry to delete: ");
	todos.splice(num, 1);
}

while (ask !== "quit") {
	ask = prompt("what do you want to do?");

	if (ask === "new") {
		newEntry = prompt("Enter todo: ");
		newTodo(newEntry);
	}

	else if (ask === "list") {
		listTodo();
	}

	else if (ask === "delete") {
		deleteTodo();
	}
}

