$(document).ready(function() {
	/* autoscroll */
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	        $('.swiper-slide').css({'overflow':'auto'});    
	    }else{
	    	$('.swiper-slide').css({'overflow':''});   	
	    }
	});
	/* autoscroll */
	
	/* innerscroll */
	$('.swiper-slide').bind('scroll', scroll);

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
						$('.topoption').css({'display':'none'});
						$('.footoption').css({'display':'none'});		
					}
				}else if($(this).scrollTop() < scrollFinish){
					if(requsetSet){		
						$('.topoption').css({'position':'fixed', 'top':'8%','display':''});
						$('.footoption').css({'display':''});
					}
				}
				scrollFinish = $(this).scrollTop();
			}
			 
			if($('.swiper-slide').scrollTop() == 0){
				 $('.topoption').css({'display':'none'});
			}
		}
		scroll();
	/* innerscroll */
});
