$(document).ready(function(){
    var owl = $("#owl1");
    var owl2 = $("#owl2");
    var owl3 = $("#owl3");
    var owl4 = $("#owl4");

    owl.owlCarousel({
        pagination : false,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile :[479,1] // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    });
    owl2.owlCarousel({
        pagination : false,
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile :[479,1] // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl2.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl2.trigger('owl.prev');
    });
    owl3.owlCarousel({
        pagination : false,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1150,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile :[479,1] // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl3.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl3.trigger('owl.prev');
    });
    owl4.owlCarousel({
        pagination : false,
        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1150,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile :[479,1] // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl4.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl4.trigger('owl.prev');
    })

})