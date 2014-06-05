$(document).ready(function () {

    var owl3 = $("#owl3");


    owl3.owlCarousel({
        pagination: false,
        navigation: false,
        autoPlay: true,
        stopOnHover: true,
        lazyLoad: true,
        items: 7, //10 items above 1000px browser width
        itemsDesktop: [1300, 6], //5 items between 1000px and 901px
        itemsDesktopSmall: [1100, 5], // betweem 900px and 601px
        itemsTablet: [840, 3], //2 items between 600 and 0
        itemsMobile: [590, 1] // itemsMobile disabled - inherit from itemsTablet option
    });


})