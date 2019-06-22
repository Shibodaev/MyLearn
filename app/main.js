
var root = document.getElementById('root');

function ForEach(list, callback){
    for(var i = 0; i < list.length; i++ ){
        callback.call(list[i],i);
    }
}
var weapons = [
    {key1: '1'},
    {key2: '2'},
    {key3: '3'},
];
ForEach(weapons, function(index){
    assert(this === weapons[index], "Работает");
})





// // Функция ТЕСТА
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
// window.onload = function () {
//     assert(true, "Тестовый набор работает.");
//     assert(false, "Fail = Ошибка 1");
// };