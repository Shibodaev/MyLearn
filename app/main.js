"use strict";
/*
Массивы!
Как получить последний элемент из произвольного массива?
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods.
*/
var goods = [2,1,3,5,4,9,8,7,6];

// for( var i = 0; i <= goods.length; i++ ) {
// 	if( i == goods.length - 1) {
// 		alert(goods[i]);
// 	}
// }
var lastElement = goods[goods.length - 1];
alert(lastElement);


