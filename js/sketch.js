var currentFunction = 'bin';

function setup() {
}

function draw() {
	
}


function keyPressed() {
	if (keyCode === ENTER) {
		if(currentFunction == 'bin')
			bin_conv();
		else if (currentFunction == 'dec')
			dec_conv();
		else if (currentFunction == 'oct')
			oct_conv();
		else if (currentFunction == 'hex')
			hex_conv();
		else
			console.log("Click on at least one input field");
	}
}

function setf(x) {	
	currentFunction = x;
}