
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    $(".scroll").text(wScroll);

    if (wScroll >= 1300 ) { $('.moon').addClass('active')}
    else if(wScroll >= 1800 ){$('.moon').removeClass('active')}

    if (wScroll >= 3400) {
        $('#section2 [class^="obj"]').addClass('activeUp');
    }
});

