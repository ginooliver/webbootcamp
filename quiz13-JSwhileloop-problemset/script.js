var q1 = "Print all numbers between -10 and 19";
var q2 = "Print all even numbers between 10 and 40";
var q3 = "Print all odd numbers between 300 and 333";
var q4 = "Print all numbers divisible by 5 AND 3 between 5 and 50"

console.log(q1);

var q1Num = -10;

while (q1Num <= 19) {
	console.log(q1Num);
	q1Num++
}

console.log(q2);

var q2Num = 11;

while (q2Num <= 39) {
	if (q2Num % 2 === 0) {
		console.log(q2Num);
	}
	q2Num++
}

console.log(q3);

var q3Num = 301;

while (q3Num <= 332) {
	if (q3Num % 2 !== 0) {
		console.log(q3Num);
	}
	q3Num++
}

console.log(q4);

var q4Num = 6;

while (q4Num <= 49) {
	if ((q4Num % 5 == 0) && (q4Num % 3 == 0)) {
		console.log(q4Num);
	}
	q4Num++
}