
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    $(".scroll").text(wScroll);

    // 스크롤 top
    if ($(this).scrollTop() > 300){$('.gotop').show();} 
    else {$('.gotop').hide();}

    if (wScroll >= 1300 ) { $('.moon').addClass('active')}
    else if(wScroll >= 1800 ){$('.moon').removeClass('active')}

    if (wScroll >= 3400) {
        $('#section2 [class^="obj"]').addClass('activeUp');
    }
});

$('.gotop').on('click',function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});