let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(obj) {
	for(var key in obj ) {
		if(typeof obj[key] == "number") {
			obj[key] *= 2
		}
	}
}

multiplyNumeric(menu);
alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
// after the call
// menu = {
// 	width: 400,
// 	height: 600,
// 	title: "My menu"
// };