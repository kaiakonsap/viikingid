$(document).ready(function(){
    var owl = $("#owl1");
    var owl2 = $("#owl2");
    var owl3 = $("#owl3");
    var owl4 = $("#owl4");

    owl.owlCarousel({
        pagination : false,
		navigation: true,
        items : 6, //10 items above 1000px browser width
        itemsDesktop : [1200,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile :[479,1] // itemsMobile disabled - inherit from itemsTablet option
    });

    owl2.owlCarousel({
                pagination : false,
		navigation: true,
        singleItem:true
    });

    owl3.owlCarousel({
        pagination : false,
		navigation: true,
        singleItem:true
    });

    owl4.owlCarousel({
           pagination : false,
		navigation: true,
        singleItem:true
    });



})