$(function(){
	$(".nav>li").mouseover(function(){
	$(".nav>li").children(".sub").stop().slideDown()
	$(".sub_back").stop().slideDown()
	});
	$(".nav>li").mouseout(function(){
	$(".nav>li").children(".sub").stop().slideUp()
	$(".sub_back").stop().slideUp()
	});

	setInterval(function(){
		$(".slideWrap>ul").animate({"marginTop":-660}, function(){
			$(".slideWrap>ul>li:first").appendTo(".slideWrap>ul")
			$(".slideWrap>ul").css("marginTop", 0);
		});
	}, 3000);

});