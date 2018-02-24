$(document).ready(function () {
	$(window).bind('scroll', function(){
	console.log('your mom');
	var vPos = $(window).scrollTop();
	//
	var tHeight = $('body').offset().top;
	//
	var finalSize = tHeight - vPos;
	//
	console.log(finalSize);

	if (finalSize < -70) {
		$('#imgscroll').css({
			'color': 'hsla(22, 96%, 89%, .10)',
			'border-color': 'hsla(22, 96%, 89%, .10)'
		});

	} else {
		$('#imgscroll').css({
			'color': 'hsla(22, 96%, 89%, 1)',
			'border-color': 'hsla(22, 96%, 89%, 1)'
		});


	}

	});
	
}); 
