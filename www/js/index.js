$(document).ready(function() {
	/* autoscroll */
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});    
	    }else{
	    	$('.swiper-slide').css({'overflow':''});   	
	    	$('.topoption').css({'display':'none'});
	    }
	});
	/* autoscroll */
	$('.swiper-scrollbar').mousedown(function(e){
		$('.topoption').css({'display':'none'});
		var reset = $('body').offset();
		$('html, body').animate({scrollTop : reset.top}, 500);
		});
});
