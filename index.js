"use strict";
// Создать калькулятор
// важность: 5решение
// Создайте объект calculatorтремя способами:
//
// 	read() запрашивает два значения и сохраняет их как свойства объекта.
// sum() возвращает сумму сохраненных значений.
// mul() умножает сохраненные значения и возвращает результат.
// 	let calculator = {
// 	// ... your code ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() )
// https://javascript.info/object-methods
// моё решение
// let calculator = {
// 	sum() {
// 		return this.a + this.b;
// 	},
//
// 	mul() {
// 		return this.a * this.b;
// 	},
//
// 	read() {
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	}
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


let calculator = {
	a : +prompt( "a?", " " ),
	b : +prompt( "b?", " " ),
	read() {
		this.a;
		this.b;
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	}
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );