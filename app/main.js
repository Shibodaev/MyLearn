"use strict";

/*
Создайте функцию find(arr, value),
которая ищет в массиве arr значение value и возвращает его номер,
если найдено, или -1, если не найдено.
*/

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }   
    }
    return -1;
};
var arr = ["test", 2, 1.5, false];
console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1 
