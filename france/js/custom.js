$(document).ready(function() {
    $("#section1").addClass('open');

    setTimeout(function() {
        $("#section1").removeClass('open');
        $("#section1").addClass('play');
    }, 2000); 

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
    if (wScroll >= $("#section3").offset().top - 100 ) {
        $('#section3 .cont_2 .tit').addClass('active');
    }
    
    // 도서 내지 
    if ( wScroll >= 1000 ) {
        $('#book li').removeClass('active');
        $('#book li:nth-child(1)').addClass('active');
    } 

    if ( wScroll >= 10200 ) {
        $('#book li').removeClass('active');
        $('#book li:nth-child(2)').addClass('active');
    } 
    
    if ( wScroll >= 10400 ) {
        $('#book li').removeClass('active');
        $('#book li:nth-child(3)').addClass('active');
    }

    //section3 fixed
    if( wScroll >= $("#section3").offset().top - 100 && wScroll < 5600  ){
        $("#section3").addClass("pos");
    } else {
        $("#section3").removeClass("pos");
    }

    //section7 fixed
    if( wScroll >= $("#section7").offset().top - 200 && wScroll < 11500  ){
        $("#section7").addClass("pos");
    } else {
        $("#section7").removeClass("pos");
    }

    //section8 fixed
    $("#section8").removeClass("pos");
    if( wScroll >= $("#section8").offset().top  && wScroll < 14000  ){
        $("#section8").addClass("pos");
    } else {
        $("#section8").removeClass("pos");
    }

    // section9 animation
     if( wScroll >= 13500 ){
        $("#section9").addClass("active");
    } else {
        $("#section9").removeClass("active");
    }

    // section10 animation
    if( wScroll >= $("#section10").offset().top + 100 ){
        $('#section10').addClass('active');
    } else {
        $('#section10').removeClass('active');
    }
});

$('.gotop').on('click',function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});