"use strict";
/*
Создайте функцию multiplyNumeric, которая получает
объект и умножает все численные свойства на 2. Например:
P.S. Для проверки на число используйте функцию:
function isNumeric(n) {
return !isNaN(parseFloat(n)) && isFinite(n)
}
*/

var menu = {
	width: 200,
	height: 300,
	title: "My menu"
};
function multiplyNumeric(object) {
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			if (isNumeric(object[key])) {
				object[key] *= 2;
			} else {
				return object[key];
			}
		}
	}
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
};
multiplyNumeric(menu);
console.log(menu);

/*после вызова
menu = {
	width: 400,
	height: 600,
	title: "My menu"
};*/

