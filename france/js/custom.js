$(document).ready(function() {
    let sec06_sl = new Swiper('#section6 .swiper-container', {
        loop: true,
        speed: 500,
        autoplay: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 500,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            prevEl: '#section6 .slide_block .navigation .prev',
            nextEl: '#section6 .slide_block .navigation .next',
        },
    
        on: {
            slideChange: function () {
                var realActiveSlideIndex = this.realIndex;
                var activeSlideIndex = this.activeIndex;
    
                // 슬라이드 인덱스에 따라서 .book_txt 내용 변경
                var bookTxtElement = document.querySelector('.book_txt');
                var bookTxtContent = '';
    
                if (realActiveSlideIndex === 0) {
                    bookTxtContent = '<li>알파벳부터 기초 문장까지</li><li class="point">한 권으로 마스터!</li>';
                } else if (realActiveSlideIndex === 1) {
                    bookTxtContent = '<li>억지로 외울 필요 없이</li><li class="point">문장과 문법 자동 암기!</li>';
                } else if (realActiveSlideIndex === 2) {
                    bookTxtContent = '<li>충실한 구성과 부담 없는 분량,</li><li class="point">혼자서도 프랑스어 정복 가능! </li>';
                }
    
                // .book_txt 내용 변경
                bookTxtElement.innerHTML = bookTxtContent;
            }
        }
    });
    
});

$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    $(".scroll").text(wScroll);

    // 스크롤 top
    if ($(this).scrollTop() > 300){$('.gotop').show();} 
    else {$('.gotop').hide();}

    if (wScroll >= 1300 ) { $('.moon').addClass('active')}
    else if(wScroll >= 1800 ){$('.moon').removeClass('active')}

    // 빌딩 up
    if (wScroll >= 3300) {
        $('#section2 [class^="obj"]').addClass('activeUp');
    }

    // 말문이 트이다
    if (wScroll >= 5100) {
        $('#section3 .cont_2 .tit').addClass('active');
    }

    //section7 fixed
    if( wScroll >= $("#section7").offset().top && wScroll < 11500  ){
        $("#section7 .list").addClass("pos");
    } else {
        $("#section7 .list").removeClass("pos");
    }

    $("#section8").removeClass("pos");
    //section8 fixed
    if( wScroll >= 12400 && wScroll < 13800  ){
        $("#section8").addClass("pos");
    } else {
        $("#section8").removeClass("pos");
    }

    // section8 fixed
     if( wScroll >= 13500 ){
        $("#section9").addClass("active");
    } else {
        $("#section9").removeClass("active");
    }

    // section7 fixed 제거
    if( wScroll > 13100  ){
        $("#section7").css('position','relative');
    }

    // if( wScroll >= 13060 && wScroll < 15000 ){
    //     $('#section9').addClass('pos');
    //     $('#section9 .extend').addClass('active');
    //     // $("#section8").removeClass("pos");
    // } else {
    //     $('#section9').removeClass('pos');
    //     // $('#section9 .extend').removeClass('active');
    //     // $("#section8").removeClass("pos");
    // }

    if( wScroll >= 14000 ){
        $('#section10').addClass('active');
    } else {
        $('#section10').removeClass('active');
    }
    
});

$('.gotop').on('click',function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});