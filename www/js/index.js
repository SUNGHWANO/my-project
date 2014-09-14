$(document).ready(function() {
	/* autoscroll */
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});    
	        $('body').css({'overflow':'hidden'}).bind('touchmove', function(e){e.preventDefault()});
	    }else{
	    	$('.swiper-slide').css({'overflow':''});   	
	    	$('.topoption').css({'display':'none'});
	    	$('body').unbind('touchmove');
	    }
	});
	/* autoscroll */
});
