/* autoscroll */
$(document).ready(function() {
	
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});
	        $('.middle').css({'height':'92%'});
	    }else{
	    	$('.swiper-slide').css({'overflow':''});
	    	$('.middle').css({'height':'81%'});
	    }
	});
	
});
/* autoscroll */