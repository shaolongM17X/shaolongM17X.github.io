$(function() {
	var $arrow_button = $("#arrow");
	$arrow_button.click(function() {
		$arrow_button.toggleClass("transformed");
		$(".master-view").toggleClass("width-eighty");

	});
});