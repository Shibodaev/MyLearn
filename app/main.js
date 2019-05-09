"use strict";
/*
Создайте калькулятор для введённых значений
важность: 4 
Напишите код, который:

1) Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
2) Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
3) При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
4) Выводит сумму всех значений массива
*/
;(function calculator(prop) {
    var arr = [];
    var empty = 0;
    var number = prompt('Введите число', 0);
    if (!isNaN(parseFloat(number)) && isFinite(number)) {
        arr.push(number);
        calculator();
    } else if (typeof number == "string" || number == null) {
        for(var i = 0; i < arr.length; i++){
           empty += +arr[i];
        }
        alert(empty);
        return false;
    } else {
        return false;
    }
    arr.push(number);
})();