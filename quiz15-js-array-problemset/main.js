function printReverse(list) {
	list.reverse().forEach(function(ent){
		console.log(ent);
	})
}

function isUniform(list) {
	// var falseFlag = 0;
	// list.forEach(function(ent, ind) {
	// 	if (ind <= (list.length-2)) {
	// 		console.log(ent + " " + list[ind+1]);
	// 		if (ent != list[ind+1]) {
	// 			falseFlag = 1;
	// 		}
	// 	}
	// })

	// if (falseFlag === 0) {
	// 	console.log(true);
	// }

	// else {
	// 	console.log(false);
	// }
	var first = list[0];

	for (i=1; i<list.length; i++) {
		if (first !== list[i]) {
			return false
		}
	}
	return true
}

function sumArray(list) {
	var total = 0;

	list.forEach(function(ent) {
		total += ent;
	})

	console.log(total);

	}


function max(list) {
	console.log(list.sort(function(a, b){return a-b}).reverse()[0]);
}