$(document).ready(function() {
		$("#container").css("height",$(window).height()+"px");
		$(".slider").phslider({'animation_time':400,'easing':'easeInOutQuint','animation':'slide','title_time':370,'title_easing':'easeInOutBack','controls':true,'autoplay':false});
})