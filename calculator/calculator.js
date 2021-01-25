function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, current) => total + current , 0);           // first value 0 let sum = funtion(a, b){ return a + b;}
	
}

function multiply (array) {
	//return array.reduce((total, current) => total * current, 1);
	return array.length
		? array.reduce((accumulator, nextItem) => accumulator * nextItem)
		: 0;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
	if(n == 0) return 1;
	let product = 1;
	for(let i = n; i > 0; i--){
		product *= i;             // product = product * i
	}
	return product;	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}