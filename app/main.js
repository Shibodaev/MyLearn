
var root = document.getElementById('root');
// Функция ТЕСТА
function whater(a,b,c) {
    assert(a===1, "Первое зачение" );
    assert(b===2, "Второе зачение" );
    assert(c===3, "Третье зачение" );
    assert(arguments.length === 5, " пять параметров");
    assert(arguments[0] === a, "верно!!!");
    assert(arguments[1] === b, "верно!!!");
    assert(arguments[2] === c, "верно!!!");
    assert(arguments[3] === 4, console.log(arguments[3]));
    assert(arguments[4] === 5, console.log(arguments[4]));
}
whater(1,2,3,4,5);

function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
window.onload = function() {
    assert(true, " Thetestsuiteis running.");
    assert(false, " Fail1 ");
};