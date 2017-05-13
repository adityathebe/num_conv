hex_value = ['A','B','C','D','E','F']
hex_index = [10, 11, 12, 13, 14, 15]

function decimal_converter (user_input, to_convert) {
	var result = [];
	var rem;
	while(user_input > 0) {
		rem = (user_input % to_convert);
		user_input = Math.floor(user_input / to_convert)

		// Assigning respective alphabets for HexaDecimal
		if(to_convert == 16) {
			for(var i=10; i<16;i++) {
				if(rem == i) {
					rem = hex_value[i-10];
				}
			}
		}
		result.push(rem)
	}
	output = result.reverse();
	var outputString = output.join("");
	return outputString;
}

function to_decimal (user_input,to_convert) {
	var user_input_rev = rev_aditya(String(user_input));
	var output = 0;
	var power = 0;
	for (var i=0 ; i<user_input_rev.length; i++) {
		output = output + parseInt(user_input_rev[i] * Math.pow(to_convert,power) );
		power++;
	}
	return output;
}

function binary_converter (user_input, to_convert) {
	var temp = to_decimal(user_input, 2)
	if(to_convert == 10)
		return temp;
	else if(to_convert == 8)	
		return (decimal_converter(temp, to_convert));
	else if(to_convert == 16)	
		return (decimal_converter(temp, to_convert));
}

function octal_converter (user_input, to_convert) {
	var temp = to_decimal(user_input, 8)
	if(to_convert == 10)
		return temp;
	else if(to_convert == 2)	
		return (decimal_converter(temp, to_convert));
	else if(to_convert == 16)	
		return (decimal_converter(temp, to_convert));
}


/* ===== External Functions ====== */
function rev_aditya(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function aditya() {
	alert('hello');
} 	 
