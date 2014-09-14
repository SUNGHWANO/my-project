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
		
	/* select */
		$(document).ready(function(){
			
			$('body').click(function(){
			var won = 1;
			var a = $('.swiper-slide')[0].className;
			var aa = a.split(' ')[1];
			if(aa == 'swiper-slide-visible'){
			won = 1;	
			}	
			var a2 = $('.swiper-slide')[1].className;
			var aa2 = a2.split(' ')[1];
			if(aa2 == 'swiper-slide-visible'){
			won = 2;		
			}
			var a3 = $('.swiper-slide')[2].className;
			var aa3 = a3.split(' ')[1];
			if(aa3 == 'swiper-slide-visible'){
			won = 3;
			}
			var a4 = $('.swiper-slide')[3].className;
			var aa4 = a4.split(' ')[1];
			if(aa4 == 'swiper-slide-visible'){
			won = 4;
			}
			console.log(won);
			
			if(won == 1){
				$('.menubar')[0].innerHTML = '자장면, 치킨, 피자 등...';
			}else if(won == 2){
				$('.menubar')[0].innerHTML = '커피, 샐러드, 차 등...';
			}else if(won == 3){
				$('.menubar')[0].innerHTML = '맥주, 소주, 막걸리 등...';
			}else{
				$('.menubar')[0].innerHTML = '미용, 패션, 쇼핑 등...';
			}
			
			});
			
		});
	/* select */
});
