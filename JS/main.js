//JS FACILITATED STYLE FUNCTIONS
//JS FACILITATED STYLE FUNCTIONS

//**JUMBOTRON Disappear on Scroll**//
$(document).ready(function () {
	$(window).bind('scroll', function(){
	console.log('your mom');
	var vPos = $(window).scrollTop();
	
	var tHeight = $('body').offset().top;
	
	var finalSize = tHeight - vPos;
	
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
			//'border-color': '#feece11a',
		});

	} else {
		$('#imgscrollOther').css({
			'color': '#292d3d',
			//'border-color': '#feece1'
		});
	}



	if (finalSize < -100) {
		$('#textscrollOther, #textscrollOther').css({
			'color': '#feece11a',
			//'border-color': '#feece11a',
		});

	} else {
		$('#textscrollOther, #textscrollOther').css({
			'color': '#292d3d',
			//'border-color': '#64445c',
		});
	}



	if (finalSize < -258) {
		$('#pinkAppear').css({
			'color': '#fedecb14'
		});

	} else {
		$('#pinkAppear').css({
			'color': '#fedecb'
		});
	}



	if (finalSize < -200) {
		$('.resButt').attr('id', 'buttTop');

	} else {
		$('.resButt').attr('id', 'buttNormal');	
	
	}

	if (finalSize < -200) {
		$('.indexButt').attr('id', 'indexButtTop');

	} else {
		$('.indexButt').attr('id', 'indexButtNormal');	
	
	}

	});
}); 

//**HEADER/NAV BAR Opacify on Scroll**//
$(document).ready(function () {
	$(window).bind('scroll', function(){

	var vPos = $(window).scrollTop();
	
	var tHeight = $('body').offset().top;
	
	var finalSize = tHeight - vPos;
	

	//change header class
	function checkScroll(){
	    var scrollY = $('.nav').height() * 2; //navbar px change point

	    console.log(finalSize);

	    console.log("scrolled");

	    console.log(scrollY);

	    
	    //($(window).scrollTop() > scrollY){
	    if (finalSize < -222) {
	        $('.nav').addClass("scrolled");
	    }else{
	        $('.nav').removeClass("scrolled");
	    }
	}


	if($('.nav').length > 0){
	    $(window).on("scroll load resize", function(){
	        checkScroll();
	    })
	}

	});
});



