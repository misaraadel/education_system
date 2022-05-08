$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    if (window.matchMedia('(min-width: 1000px)').matches)
    {
        $('.toggler').click(function(){
            $('.toggler').toggleClass('active');
            $('.side-nav').toggleClass('acitve-nav');
            $('.navbar').toggleClass('active-navbar');
            $('.main-content').toggleClass('active-main');
            $('.side-nav .navbar-nav .nav-item .collapse').removeClass('show');
            $('.side-nav .navbar-nav .nav-item .nav-link').attr('aria-expanded', 'false')
        });

        $('.side-nav .navbar-nav .nav-item').click(function(){
            $('.toggler').removeClass('active');
            $('.side-nav').removeClass('acitve-nav');
            $('.navbar').removeClass('active-navbar');
            $('.main-content').removeClass('active-main');
        });
    }

    if (window.matchMedia('(max-width: 999px)').matches)
    {
        $('.toggler').click(function(){
            $('.toggler').toggleClass('active');
            $('.side-nav').toggleClass('acitve-nav');
        });
    }

    $('.filter-btn').click(function(){
        $('.filter-modal').toggleClass('active-filter');
    });

    $('.filter-modal .overlay').click(function(){
        $('.filter-modal').removeClass('active-filter');
    });

    $('.filter-modal .remove-btn').click(function(){
        $('.filter-modal').removeClass('active-filter');
    });

    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
            $(this).addClass( "fa-eye-slash" );
            $(this).removeClass( "fa-eye" );
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
            $(this).removeClass( "fa-eye-slash" );
            $(this).addClass( "fa-eye" );
        }
    });
});