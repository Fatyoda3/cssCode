let a, b;

let greater = (a, b) => {
	// let bigger = a > b ? a : b;
	// return bigger;

	return a > b ? a : b;
};

console.log(greater(23, 5));

let sum = (a, b) => a + b;

function operation(a, b, op) {
	return op(a, b);
}

console.log(operation(5, 5, sum));
