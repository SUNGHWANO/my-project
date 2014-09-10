/* autoscroll */
$(document).ready(function() {
	$('.swiper-slide').css({'overflow':'auto'});
	
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	    }else{
	    	//$('.swiper-slide').css({'overflow':''});
	    }
	});
	
});
/* autoscroll */