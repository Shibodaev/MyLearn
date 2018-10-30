"use strict"
//-------------------------------------
function nonUniqueElements(data) {
	var result = [];
	data.filter(function(num,index,arr) {
		if(!(arr.indexOf(num) == index) || !(arr.lastIndexOf(num) == index) && true ){
			result.push(arr[num])
		}
	})
	console.log(result);
};

nonUniqueElements([1,2,4,5,2,1]);
nonUniqueElements([1,5,2,5,1]);
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