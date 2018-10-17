
$(function () {
	let obj = ["ajax.html", "ajax2.html", "ajax3.html", "ajax4.html"];
	$(".w-button").click(function (e) {
		let numId = e.target.id;
		console.log( numId);
		obj.forEach(function(item,i) {
			if (Number(numId == (i + 1)) ) {
				$.get(item, success);
			}
		})
	});

	function success(data) {
		$("#content").html(data);
	}
});


// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };
//
//
// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (obj[key] == typeof Number) {
// 			obj[key] *= obj[key];
// 		} else {
// 			obj = obj[key];
// 		}
// 	}
// 	alert(obj);
// }
//
// multiplyNumeric(menu);