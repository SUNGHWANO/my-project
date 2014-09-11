/* autoscroll */
$(document).ready(function() {
	
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});
	    }else{
	    	$('.swiper-slide').css({'overflow':''});
	    }
	});
	
});
/* autoscroll */