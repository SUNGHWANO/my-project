/* autoscroll */
$(document).ready(function() {
	
	$(window).on('scroll', function() {
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
	$('.swiper-slide').on('scroll', function() {
		var after = $(this).scrollTop();
		if(after > lastScroll){			
			lastScroll = after;
			$('.footer').animate({height: 0},1);
			console.log('down');
		}else if(after < lastScroll){
			lastScroll = after;
			$('.footer').animate({height: '8%'},1);
			console.log('up');
		}
		});
	
});
/* innerscroll */



$(document).ready(function() {
	
	/*$(window).bind('scroll', scroll);
	
	var timer = setInterval(function(){
		scrollOK = true;
	}, 50);
	var scrollOK = true;
	var scrollFinish = 0;
	var requsetSet = true;
	
	function scroll(){
		if(scrollOK) {
			scrollOK = false;
			
			if($(this).scrollTop() > scrollFinish){
				if(requsetSet){
					$('.footer').animate({height: 0},1);		
				}
			}else if($(this).scrollTop() < scrollFinish){
				if(requsetSet){
					$('.footer').animate({height: '8%'},1);
				}
			}
			scrollFinish = $(this).scrollTop();
		}
	}
	
	scroll();*/
	
});