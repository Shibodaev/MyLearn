"use strict"
//-------------------------------------
function nonUniqueElements(data) {
	data.filter(function(num,index,arr) {
		if (((((arr.indexOf(num) + 1) == arr[index]) && arr.lastIndexOf(num) != false)) == true) {
		data.push(arr[num]);
		
		}
	})
	// console.log(data);
};
// nonUniqueElements([1, 2, 4, 5, 2, 1]);
// nonUniqueElements([4, 2, 4, 5, 5, 1]);
nonUniqueElements([5, 5,5,5]);
// var assert = require('assert');
// var result;
// function nonUniqueElements(value,index,arr) {
// 	return arr[index] === arr.indexOf(value);
// };
// let a = [1, 2, 4, 5, 2, 1];
// nonUniqueElements.filter(arr)
// console.log(data);
//
//-------------------------------------
// function Accumulator(startingValue){
// 	this.read = function (value) {
// 		this.value = startingValue;
// 		startingValue = +prompt("value");
// 		this.value += startingValue
// 	}
// }
//
// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value);
// //-------------------------------------
// function Accumulator(startingValue) {
// 	this.value = startingValue;
//
// 	this.read = function() {
// 		this.value += +prompt('How much to add?', 0);
// 	};
//
// }
//
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);