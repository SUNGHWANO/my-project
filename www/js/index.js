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
			console.log('dd');
			if($(this).scrollTop() > scrollFinish){
				if(requsetSet){
					
					//$('.footer').slideUp('fast');
					//$('.middle').css({'height':'92%'});	
					
					$('.menubarcontainer').css({'display':'none'});
					$('.footer').css({'display':'none'});
					
				}
			}else if($(this).scrollTop() < scrollFinish){
				if(requsetSet){
					//$('.footer').slideDown('fast');
					//$('.middle').css({'height':'81%'});			
					$('.menubarcontainer').css({'position':'fixed', 'top':'8%','display':''});
					$('.footer').css({'display':''});
				}
			}
			scrollFinish = $(this).scrollTop();
		}
	}
	
	scroll();
	
	
	
	
});
/* innerscroll */



$(document).ready(function() {
	
/*	$(window).bind('scroll', scroll);
	
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
					//$('.footer').animate({height: '0'},60);		
					$('.footer').slideUp('fast');
				}
			}else if($(this).scrollTop() < scrollFinish){
				if(requsetSet){
					//$('.footer').animate({height: '8%'},60);
					$('.footer').slideDown('fast');
				}
			}
			scrollFinish = $(this).scrollTop();
		}
	}
	
	scroll();*/
	
});