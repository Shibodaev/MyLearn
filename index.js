// Свойства объекта Sum
// У нас есть объект хранения зарплат нашей команды:
var salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
function summation(obj) {
	let sum = 0;
	if (obj != undefined) {
		for (var key in obj) {
			sum += obj[key];
		}
		console.log(sum)
	} else {
		return 0;
	}
}
summation(salaries);

// Напишите код, чтобы суммировать все зарплаты и хранить в
// переменной sum. Должно быть 390в приведенном выше примере.
