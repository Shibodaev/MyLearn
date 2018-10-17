$(function () {
	$("button").click(function () {
		$.get("ajax" + $(this).attr("data-ajax") + ".html", success);
	})
	function success(data) {
		$("#content").html(data);
	}
})

