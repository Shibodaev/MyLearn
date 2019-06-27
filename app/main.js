'use strict'
var btn = document.getElementById("btn");

function sum(...args) {
    args.reduce(acom, num){
        acom += num;
    }
    return args;
}




// Assert функция
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
// window.onload = function () {
//     assert(true, " Thetestsuiteis running.");
//     assert(false, " Fail1 ");
// };


// ;(function (){


//     var form = document.forms["form"],
//     btn = form.getElementsByClassName("btn"),
//     checkbox = document.getElementById("checkbox"), 
//     messageHelp = document.getElementById("mannagerHelp"),
//     input = form.getElementsByTagName("input");

//     function FormValidate(message){
//         this.click = () => {
//             alert(this.message);
//         }
//     }

//     var button = new FormValidate("Привет");

//     btn.addEventListener("click", button.click);

//     // var message = {
//     //     required: 'This field is required',
//     //     min: 'This field should contain at least %rule% characters',
//     //     max: 'This field should not contain more than %rule% characters',
//     //     match: 'This field shold countain a valid %rule%'
//     // };
// })();







// var Validator = (function () {
//     'use strict';

//     var _createMessage = function (message, settings) {
//         for (var key in settings) {
//             message = message.replace('%' + key + '%', settings[key]);
//         }
//         return message;
//     };

//     // http://youmightnotneedjquery.com/#deep_extend
//     var _extend = function (out) {
//         out = out || {};

//         for (var i = 1; i < arguments.length; i++) {
//             var obj = arguments[i];

//             if (!obj)
//                 continue;

//             for (var key in obj) {
//                 if (obj.hasOwnProperty(key)) {
//                     if (typeof obj[key] === 'object')
//                         out[key] = _extend(out[key], obj[key]);
//                     else
//                         out[key] = obj[key];
//                 }
//             }
//         }

//         return out;
//     };

//     var regExps = {
//         email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
//         url: /^((https?):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
//         numbers: /^\d+(\.\d{1,2})?$/,
//         digits: /[0-9]*$/,
//         letters: /[a-z][A-Z]*$/
//     };

//     var messages = {
//         required: 'This field is required',
//         min: 'This field should contain at least %rule% characters',
//         max: 'This field should not contain more than %rule% characters',
//         match: 'This field shold countain a valid %rule%'
//     };

//     var Validate = function (element, options) {
//         var defaults = {
//             regExps: regExps,
//             messages: messages
//         };

//         this.options = _extend({}, defaults, options);
//         this.element = element;
//         this.regExps = regExps;
//     };

//     var fn = Validate.prototype;

//     fn.validate = function () {
//         var isValid = true;

//         this.value = this.element.value.trim();
//         this.length = this.value.length;

//         for (var rule in this.options.rules) {
//             var param = this.options.rules[rule];

//             if (!this[rule](param)) {
//                 isValid = false;
//                 this.message = _createMessage(this.options.messages[rule], { rule: param, data: this.value });
//                 this.options.onError.call(this);
//                 break;
//             }
//         }

//         if (isValid) {
//             this.options.onSuccess.call(this);
//         }
//     };

//     fn.required = function () { return this.length > 0; };
//     fn.min = function (param) { return this.length >= param; };
//     fn.max = function (param) { return this.length <= param; };
//     fn.match = function (param) { return this.regExps[param].test(this.value); };

//     return {
//         init: Validate,
//         fn: fn
//     };
// })();


















// var Validator = (function () {
// 'use strict'
//     var form = document.forms["form"],
//         checkbox = document.getElementById("checkbox"),
//         formGroup = form.getElementsByClassName('form-group'),
//         formInput = form.getElementsByTagName('input'),
//         btn = form.elements.button;

//     var  Validate = function(regExps){ 
//         (formInput.hasAttribute(type) ? (formInput.getAttribute("email")) 
//             formInput.value.typef.toString()
//         : 
//     }


//     var regExps = {
//         email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
//         url: /^((https?):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
//         numbers: /^\d+(\.\d{1,2})?$/,
//         digits: /[0-9]*$/,
//         letters: /[a-z][A-Z]*$/
//       };


//     var messages = {
//         min: "Введено минимальное количество символов < 8",
//         min: "Введено максимальное количество символов > 100",
//         required: "Заполните поля обязательные для заполнения - (*)"
//     }

// })();
// // btn.addEventListener("click", Validate);

// // alert(use.myData())
// // alert(use2.myData())



// // // Функция ТЕСТА
// // function assert(value, desc) {
// //     var li = document.createElement("li");
// //     li.className = value ? "pass" : "fail";
// //     li.appendChild(document.createTextNode(desc));
// //     document.getElementById("results").appendChild(li);
// // }
// // window.onload = function () {
// //     assert(true, "Тестовый набор работает.");
// //     assert(false, "Fail = Ошибка 1");
// // };


























// // function whatsMyContext() {
// //     return this;
// // }
// // assert(whatsMyContext() === window , 'Проверяю чему равен this ');
// // var getMyThis = whatsMyContext;
// // var ninja = {
// //     getMyThis : whatsMyContext
// //  }
// //  assert(getMyThis() === window , 'Проверяю чему равен this вызовом функции getMyThis');
// //  assert(ninja.getMyThis() === ninja , 'Проверяю чему равен this вызовом функции getMyThis');
// //  var ninja2 = {
// //     getMyThis : whatsMyContext
// //  }
// //  assert(ninja2.getMyThis() === ninja2 , 'Проверяю чему равен this вызовом функции getMyThis');



// // function infiltrate(person) {
// //     assert(person === 'gardener', `Проверил что является ли переменная верной через ${person}`);
// //     assert(arguments[0] === 'gardener', `Проверил что является ли переменная верной через ${arguments[0]}`);
// //     arguments[0] = 'ninja';


// //     assert(person === 'ninja', `Проверил что является ли переменная верной через ${person}`)
// //     assert(arguments[0] === 'ninja', `Проверил что является ли переменная верной через ${arguments[0]}`);

// //     person = "gardener";

// //     assert(person === 'gardener', `Проверил что является ли переменная верной через ${person}`)
// //     assert(arguments[0] === 'gardener', `Проверил что является ли переменная верной через ${arguments[0]}`);

// // }
// // infiltrate('gardener');


// // function sum(...arr) {
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         console.log(arr);
// //         sum += arr[i];
// //     }
// //     alert(sum);
// //     return sum;
// // }
// // assert(sum(1, 2) === 3, "Верно!!!");
// // assert(sum(1, 2, 3) === 6, "Верно!!!");
// // assert(sum(1, 2, 3, 4) === 10, "Верно!!!");


// // function sum() {
// //     let sum = 0;
// //     for (let i = 0; i < arguments.length; i++) {
// //         sum += arguments[i];
// //     }
// //     alert(sum);
// //     return sum;
// // }
// // assert(sum(1, 2) === 3, "Верно!!!");
// // assert(sum(1, 2, 3) === 6, "Верно!!!");
// // assert(sum(1, 2, 3, 4) === 10, "Верно!!!");
