var todos = [];
var ask = "";

function newTodo(newEntry) {
	todos.push(newEntry);
}


function listTodo() {
	console.log(todos);
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
}

