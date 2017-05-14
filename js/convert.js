hex_value = ['A','B','C','D','E','F']
hex_index = [10, 11, 12, 13, 14, 15]

function decimal_converter (user_input, to_convert) {
	if(/^[0-9]+$/.test(user_input)) {
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
	} else {
		return "";
	}
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
	if(/^[0-1]+$/.test(user_input)) {
		var temp = to_decimal(user_input, 2)
		if(to_convert == 10)
			return temp;
		else if(to_convert == 8)	
			return (decimal_converter(temp, to_convert));
		else if(to_convert == 16)	
			return (decimal_converter(temp, to_convert));
	} else{
		return "";
	}
}

function octal_converter (user_input, to_convert) {
	if(/^[0-7]+$/.test(user_input)) {
		var temp = to_decimal(user_input, 8)
		if(to_convert == 10)
			return temp;
		else if(to_convert == 2)	
			return (decimal_converter(temp, to_convert));
		else if(to_convert == 16)	
			return (decimal_converter(temp, to_convert));
	}else{
		return "";
	}
}


function hex_converter (user_input, to_convert) {
	if((/^[a-f0-9]+$/i).test(user_input)) {
		user_input = String(user_input);
		user_input = user_input.toUpperCase()
		var hex_dec_bin = []

		// Converting each elements to 4 bit binary
		for(var i=0; i<user_input.length; i++) {
			if(hex_value.includes(user_input[i])) {
				var temp_index = hex_value.indexOf(user_input[i]);
				var temp_for_hex_a = user_input[i].replace(user_input[i], String(hex_index[temp_index]));
				hex_dec_bin.push(decimal_converter(parseInt(temp_for_hex_a), 2));
			} else {	
				// Making it 4-bit
				var temp_for_hex;
				temp_for_hex = decimal_converter(parseInt(user_input[i]), 2);
				if(temp_for_hex.length != 4) {
					diff = 4 - temp_for_hex.length;
					temp_for_hex = Array(diff+1).join("0") + temp_for_hex;
				}
				hex_dec_bin.push(temp_for_hex);
			}
		}
		var hex_dec_bin_string = hex_dec_bin.join("")
		temp = to_decimal(hex_dec_bin_string, 2)
		if(to_convert == 10)
			return temp;
		else 
			return (decimal_converter(temp, to_convert));
	} else {
		return "";
	}
}



/* ===== External Functions ====== */
function rev_aditya(str) {		// Reverse a string
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

