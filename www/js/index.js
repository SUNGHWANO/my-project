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
/* innerscroll */
$(document).ready(function() {
	
	var lastScroll = 0;
	$('.swiper-slide').scroll(function() {		
		var after = $(this).scrollTop();
		if(after > lastScroll){			
			$('.footer').animate({height: 0},"fast");
			//console.log('down');
			lastScroll = after;
		}else{
			$('.footer').animate({height: '8%'},"fast");
			//console.log('up');
			lastScroll = after;
		}
		});
	
});
/* innerscroll */
/* menuscroll */
$(document).ready(function() {
	
		var lastScroll = 0;
		$(window).scroll(function() {		
			var after = $(this).scrollTop();
			if(after > lastScroll){	
				$('.footer').animate({height: 0},"fast");
				//console.log('down');
				lastScroll = after;
			}else{
				$('.footer').animate({height: '8%'},"fast");
				//console.log('up');
				lastScroll = after;
			}
			});
	
});
/* menuscroll */
