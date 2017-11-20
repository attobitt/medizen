/*!
 * LoveHub - Multipurpose Non-Profit Theme
 * Copyright 1994-2015 ForBetterWeb.com
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".menu-extra").removeClass("hide");
        $(".navbar-custom .navbar-brand .logo").removeClass("hide");
        $(".navbar-custom .navbar-brand .logo-white").addClass("hide");
    } else {
        $(".menu-extra").addClass("hide");
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-custom .navbar-brand .logo-white").removeClass("hide");
        $(".navbar-custom .navbar-brand .logo").addClass("hide");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 64)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 65
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
