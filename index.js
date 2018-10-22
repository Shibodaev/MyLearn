"use strict";

var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

function salary(obj) {
	var num = 0, name = "";
	for (var key in obj) {
		if (obj[key] > num ) {
			num = obj[key];
			name = key;
		}
	}
	console.log(name);
}
salary(salaries)


