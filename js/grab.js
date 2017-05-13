var binary = document.getElementById('bin-val')
var decimal = document.getElementById('dec-val')
var octal = document.getElementById('oct-val')
var hexDecimal = document.getElementById('hex-val')

function bin_conv() {
	octal.value = binary_converter(binary.value, 8);
	decimal.value = binary_converter(binary.value, 10);
	hexDecimal.value = binary_converter(binary.value, 16);
}

function dec_conv() {
	octal.value = decimal_converter(decimal.value, 8);
	binary.value = decimal_converter(decimal.value, 2);
	hexDecimal.value = decimal_converter(decimal.value, 16);
}

function oct_conv() {
	binary.value = octal_converter(octal.value, 2);
	decimal.value = octal_converter(octal.value, 10);
	hexDecimal.value = octal_converter(octal.value, 16);
}

function hex_conv() {
	binary.value = octal_converter(octal.value, 2);
	decimal.value = octal_converter(octal.value, 10);
	hexDecimal.value = octal_converter(octal.value, 16);
}