$(document).ready(function() {
    "use strict";

    /* Page Pre Loading */
    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });



    //Initiat WOW JS
    new WOW().init();

    $(document).on("click", "#search-button", function(event) {
        $("#searchtickets").toggle();
    });


    /*for smooth scroll of anchors in same page*/
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });

    /* Theme color change*/
    var theme_settings = $(".theme-settings").find(".theme-color");
    theme_settings.on('click', function() {
        var val = $(this).attr('data-color');
        $('#style_theme').attr('href', 'css/' + val + '.css');
        console.log(val);
        theme_settings.removeClass('theme-active');
        theme_settings.addClass('theme-active');
        return false;
    });
    $(".theme-click").on('click', function() {
        $("#switcher").toggleClass("active");
        return false;
    });


    /*Back-To-Top*/
    if (true) {
        if ($('.back-to-top').length) {
            var scrollTrigger = 1000, // px
                backToTop = function() {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.back-to-top').addClass('show');
                    } else {
                        $('.back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function() {
                backToTop();
            });
            $('.back-to-top').on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }


    /*owl */
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: false,
                dots: true,
            },
            600: {
                nav: false,
                dots: true
            },
            1000: {
                nav: true,
                dots: false,
                loop: false
            }
        }

    });
    // executes when HTML-Document is loaded and DOM is ready


    $(".navbar-nav").clone().prependTo("#off-canvas");

    $(function() {
        $(document).trigger("enhance");
    });

    // BX Slider
    $(function() {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true
        });
    });

});