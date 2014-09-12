/* autoscroll */
$(document).ready(function() {
	
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});    
	        $('.footer').animate({height: 0});
	    }else if($(window).scrollTop()){
	    	$('.swiper-slide').css({'overflow':''});
	    	$('.footer').animate({height: '8%'});
	    }
	});
	
});
/* autoscroll */
/* innerscroll */
$(document).ready(function() {
	
	var lastScroll = 0;
	$('.swiper-slide').scroll(function() {		
		var after = $(this).scrollTop();
		if(after > lastScroll){			
			lastScroll = after;
			//$('.footer').animate({height: 0});
			console.log('down');
		}else if(after < lastScroll){
			lastScroll = after;
			//$('.footer').animate({height: '8%'});
			console.log('up');
		}
		});
	
});
/* innerscroll */
