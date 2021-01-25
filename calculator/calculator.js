function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum ([a,b]) {
	let sum = a + b;
	return sum;
}

function multiply ([]) {
	let sum = [...a * b] ;
	return sum;
}

function power(a, b) {
	if(b === 0){
		return 1;
	}
	else{
		for(i = 0; i>= b; i++){
			sum *= a[i];
			let sum;
		}
	}return sum;
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}