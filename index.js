// Есть ladder объект, который позволяет идти вверх и вниз:


// САМ НЕ РЕШИЛ
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() { // shows the current step
		alert( this.step );
		return this;
	}
};
// Теперь, если нам нужно сделать несколько вызовов в
// последовательности, вы можете сделать это следующим образом:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
//Измените код up и, down чтобы сделать цепочку цепочек, например:
ladder.up().up().down().showStep(); // 1