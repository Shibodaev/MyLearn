"use strict";
/*
Получить случайное значение из массива
важность: 3
Напишите код для вывода alert случайного значения из массива:

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:

var rand = min + Math.floor(Math.random() * (max + 1 - min));
*/

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"], min = 0, max = arr.length;
function randomProperty(prop) {
	var rand = min + Math.floor(Math.random() * (max + 1 - min))
	alert(arr[rand]);
}
randomProperty();
