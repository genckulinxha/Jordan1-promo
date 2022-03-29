$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	console.log(wScroll);
	$('.for').css({
		'transform' : 'translate('+ wScroll/4 +'%, 0px)'
	})
	$('.log').css({
		'transform' : 'translate(0px, '+ wScroll/6 +'%)'
	})
	$('.s2').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	})
	if (wScroll >= 400) {
		$('.m').css("opacity","1");
		console.log("fade")
	}else{
		$('.m').css("opacity","0");
	}
})

$(document).ready ( function () {
	$('.menu-burger').on('click', function() {
	  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
	  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
	});
});
