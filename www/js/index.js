$(document).ready(function() {
	/* autoscroll */
	$(window).scroll(function() {
		//$('.swiper-slide').css({'overflow':'auto'});    
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});    
	    }else if ($(window).scrollTop() == 0) {
	    	$('.swiper-slide').css({'overflow':''});   
	    }else{
	    	$('.swiper-slide').css({'overflow':''});
	    	//$('.swiper-slide').css({'overflow':''});
	    	//$('.swiper-slide').css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
	    }   
	    
	});
	/* autoscroll */
	$('.swiper-scrollbar').mousedown(function(e){
		$('.topoption').css({'display':'none'});
		var reset = $('body').offset();
		$('html, body').animate({scrollTop : reset});
		});
	/* location */
	$('.search').click(function(){
		location.href="index11.html";
		});
	$('.my').click(function(){
		location.href="index11.html";
		});
});
