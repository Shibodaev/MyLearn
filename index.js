"use strict";

var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};
function sum(obj) {
	let summa = 0;
	for (var key in obj) {
		summa += obj[key]
	}
	console.log(summa);
}
sum(salaries);