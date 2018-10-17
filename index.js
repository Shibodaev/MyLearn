$(function () {
	$(".w-button").click(function (e) {
		let numId = Number(e.target.id);
		if (numId == 1) {
			$.get("ajax.html", success);
		}
		if (numId == 2) {
			$.get("ajax2.html", success)
		}
		if (numId == 3) {
			$.get("ajax3.html", success)
		}
		if (numId == 4) {
			$.get("ajax4.html", success)
		}
	})
	function success(data) {
		$('#content').html(data);
	}
});


