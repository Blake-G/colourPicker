
function colourPicker() {
	// console.log($(".colour-picker"));
	var text = $(".colour-picker").find(".colour-picker-text");
	var palette = $(".colour-picker").find(".colour-picker-palettet");
	var preview = $(".colour-picker").find(".colour-picker-preview");

	$(text).on("keyup", function() {
		var input = $(this).val();
		// could call something like 'fixInvalidInput' here to readjust any input under 0 or over 255 in the input element
		getTextColour(input);
	});

	function getTextColour(input) {
		var valid = checkValidColour(input);
		if (valid) {
			// console.log(valid);		
		}
	}

	function checkValidColour(input) {
		var colour = {};
		var labels = ["r", "g", "b", "a"];
		// check that the given input is in one of the following forms
		// check for rgb
		var rgb_regex = /(rgb\(\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*\))|([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3})/;
		// var rgb_regex = /rgb\(([0-9]{1,3}), ([0-9]{1,3}), ([0-9]{1,3})\)/;

		// ([01]?[0-9]?[0-9]?|[2][0-5]?[0-5]?)    x3

		var rgb = input.match(rgb_regex);

		if (rgb) {
			// test if the statement contains 'rgb(...)'
			var re = /rgb\(.*\)/;
			var brackets = re.test(rgb);
			
			if (brackets) {
				console.log(rgb);
				var colours = rgb[0].match(/([0-9]{1,3})/g);
				console.log(colours);
				
				for (var i = 0; i < colours.length; i++) {
					if (parseInt(colours[i]) > 255) {
						colour[labels[i]] = 255;
					} else {
						colour[labels[i]] = parseInt(colours[i]);
					}
				}
				console.log(colour);
			} else {

			}
			
			// colour = {
			// 	type: "rgb",
			// 	input: rgb.input,
			// };
			// var colours = ["r", "g", "b"];
			// var values = rgb[0].split(",");
			// var value = {};
			// for (var i = 0; i < values.length; i++) {
			// 	console.log(values[i]);
			// 	if (parseInt(values[i]) > 255) {
			// 		value[i] = 255;
			// 	} else {
			// 		value[i] = parseInt(values[i]);
			// 	}
			// }
			// console.log(colour);
			
			// return colour;
		}

		// var rgba_regex = new RegExp("(rgba\(\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[01]?\.[0-9]{1}\s*\))|([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[01]?\.[0-9]{1})");
		// check for rgba

		// check for 3-hex #FFF

		// check for 6-hex #FFFFFF
	}
}

$(document).ready(function() {
	colourPicker();
});