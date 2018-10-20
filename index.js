// Напишите функцию, isEmpty(obj)которая возвращает,
// true если объект не имеет свойств, falseиначе.

var schedule = {};
function isEmpty(obj) {
	for ( var key in obj ) {
		if (obj != undefined) return false;
	}
	return true;
}
alert(isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false