/* autoscroll */
$(document).ready(function() {
	
	$(window).scroll(function() {
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
	
	$('.swiper-slide').on("scrollstart",function(){
		   alert("스크롤 시작");
		 
		});
		
	
});
/* innerscroll */
