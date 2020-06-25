$(function(){
	$('.box1').fadeIn(2000, function() {
		$('.box1').fadeOut(2000, function() {
			$('.box1').css({
				'background-color': '#0000FF',
				'width': '200px',
				'height': '100px'
			}).fadeIn(2000);
			$('.box1').css({
				'background-color': '#0000FF',
				'width': '200px',
				'height': '100px'
			}).fadeOut(2000);
		});
	});
});