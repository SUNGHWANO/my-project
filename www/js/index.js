$(document).ready(function(){
	
	var swiper_scrollbar_offset_top = $('.menubar').offset().top;
	console.log(swiper_scrollbar_offset_top);
	
	var swiper_scrollbar = function(){
		var scroll_top = $(window).scrollTop(); 
		console.log(scroll_top);
		if (scroll_top > swiper_scrollbar_offset_top) { 
			$('.swiper-scrollbar').css({ 'position': 'fixed', 'top':0 });
		} else {
			$('.swiper-scrollbar').css({ 'position': 'relative' }); 
		}   
	};
	
	swiper_scrollbar();
	
	$(window).scroll(function() {
		swiper_scrollbar();
	});

});