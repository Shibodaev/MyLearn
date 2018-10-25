"use strict"
//Есть ladder объект, который позволяет идти вверх и вниз:
let ladder = {
	step: 0,
	up() {
		this.step++;
	},
	down() {
		this.step--;
	},
	showStep: function() { // shows the current step
		alert( this.step );
	}
};
// Измените код upи, down чтобы сделать цепочку цепочек, например:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.
ladder.up().up().down().showStep(); // 1