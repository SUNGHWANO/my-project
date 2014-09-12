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

$(document).ready(function() {
	
	var lastScroll = 0;
	$('.swiper-slide').scroll( function() {		
		var after = $(this).scrollTop();
		if(after > lastScroll){			
			//console.log('down');
			lastScroll = after;
		}else{
			//console.log('up');
			lastScroll = after;
		}
		});
	
	
	var a = $('.menubarcontainer').offset();
	console.log(a);
	
});