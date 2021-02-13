
// jQuery toggle burger function

;$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // Modal window DONATE
    $('.donateLink, a.finance-help__btn').click( function(event) {
        event.preventDefault();
        $('#Overlay').fadeIn(297, function(){
        $('#donatModal') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
        });
    });
    $('#donatModal__close, #Overlay, .donatModal__btn').click( function(){
        $('#donatModal').animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $('#Overlay').fadeOut(297);
        });
    });

    //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
    
//  sliders function
    if ($('.header-slider , .lost-slider').length) {
        $('.header-slider').slick({
            dots: true,
            arrows : false,
            infinite: true,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            cssEase: 'linear',
            appendArrows: false,
            pauseOnDotsHover: true
            });
    
        $('.lost-slider').slick({
            dots: false,
            arrows : true,
            infinite: true,
            lazyLoad: 'ondemand',
            speed: 1000,
            cssEase: 'linear'
        });
    }
    
    // read-more function

    $('.read-more').click(function(event) {
        $('.adopt__text, .back__description').toggleClass('short');
    });
     // To up window button
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
        $('.up-button').fadeIn();
        } else {
        $('.up-button').fadeOut();
        }
    });
});


//WebP support detection function

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});
const docWidth = document.documentElement.offsetWidth;
[].forEach.call(
    document.querySelectorAll('*'),
    function(el){
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);
