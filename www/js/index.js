/* autoscroll */
$(document).ready(function() {
	
	$(window).on('scroll', function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});    
	    }else if($(window).scrollTop()){
	    	$('.swiper-slide').css({'overflow':''});
	    }
	});
	
});
/* autoscroll */
/* innerscroll */
$(document).ready(function() {
	
	var lastScroll = 0;
	$('.swiper-slide').on('scroll', function() {
		var after = $(this).scrollTop();
		if(after > lastScroll){			
			lastScroll = after;
			$('.footer').animate({height: 0});
			console.log('down');
		}else if(after < lastScroll){
			lastScroll = after;
			$('.footer').animate({height: '8%'});
			console.log('up');
		}
		});
	
});
/* innerscroll */
