$(document).ready(function() {
	/* autoscroll */
	$(window).scroll(function() {
		$('.swiper-slide').css({'overflow':'auto'});    
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	    }else{
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
});
