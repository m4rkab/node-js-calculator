// A simple node.js calculator
// by Emma Kane for CIS 371

//initiating readline
const readline = require('readline');
const rl = readline.createInterface (process.stdin, process.stdout);


//introducing our calculator
console.log('Welcome to calc.js, a simple calculator.');

//this will hold the current result so we will start it off at 0
let total = 0;

//starting the main loop
mainLoop();

//this is the main loop of the program
//it will ask for a number and then an operator
//these two items will be inserted into doOperation
//doOperation controls ending this loop
function mainLoop() {
rl.question("Please enter a number:", 
	number => { rl.question ("Enter operation (+-*/, q to quit):", 
	operator => {
		doOperation (number, operator);
    });
});
}
		
//this is the main function
//doOperation checks for errors and also does the mathematical work
//it will reinitialize the mainloop after every input except for q
function doOperation(num, op) {
	if (isNaN(num)) {
		console.log("That is not a valid number.")
		mainLoop();
	}
	else {
		if (op == '+') {
			total += parseFloat(num);
			console.log(`Current total: ${total}`)
			mainLoop();
		}
		else if (op == '-') {
			total = total - num;
			console.log(`Current total: ${total}`)
			mainLoop();
		}
		else if (op == '*') {
			total = total * num;
			console.log(`Current total: ${total}`)
			mainLoop();
		}
		else if (op == '/') {
			if (num == 0) {
				console.log("Can't divide by zero")
				mainLoop();
			}
			else {
				total = total / num;
				console.log(`Current total: ${total}`)
				mainLoop();
			}
		}
	else if (op == 'q') {
		console.log(`Final value: ${total}`)
		rl.close();
		return;
	}
	else {
		console.log('That is not a valid input.')
		mainLoop();
	}
}
}
