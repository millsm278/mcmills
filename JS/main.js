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

	if (finalSize < -100) {
		$('#imgscrollOther').css({
			'color': '#feece11a',
			'border-color': '#feece11a',
		});

	} else {
		$('#imgscrollOther').css({
			'color': '#feece1',
			'border-color': '#feece1'
		});
	}


	if (finalSize < -100) {
		$('#textscrollOther, #textscrollOther').css({
			'color': '#feece11a',
			'border-color': '#feece11a',
		});

	} else {
		$('#textscrollOther, #textscrollOther').css({
			'color': '#64445c',
			'border-color': '#64445c',
		});
	}

	//if (finalSize < -70) {
	//	$('#textscrollOther, #textscrollOther').css({
	//		'color': 'hsla(22, 96%, 89%, .10)',
	//		'border-color': 'hsla(22, 96%, 89%, .10)'
	//	});

	//} else {
	//	$('#textscrollOther, #textscrollOther').css({
	//		'color': 'hsla(22, 96%, 89%, 1)',
	//		'border-color': 'hsla(22, 96%, 89%, 1)'
	//	});
	//}

	if (finalSize < -200) {
		$('.resButt').attr('id', 'buttTop');

	} else {
		$('.resButt').attr('id', 'buttNormal');

		
	}

	});
	
}); 


