jQuery.noConflict();
jQuery(function () {
    var zoomlevel=1;





    jQuery("body").css({
            "-moz-transform":"scale("+zoomlevel+")",
            "-webkit-transform":"scale("+zoomlevel+")",
            "-o-transform":"scale("+zoomlevel+")",
            "-ms-transform":"scale("+zoomlevel+")"
        });

    jQuery('p:empty').remove();
    jQuery('.navbar-toggle').click(function (event) {
        event.preventDefault();

        if(!jQuery('.accordion').is(':visible')) {
            jQuery('.accordion').slideDown('fast');
        } else {
            jQuery('.accordion').slideUp('fast');
        }
    });
    if(jQuery("div").hasClass("imgmap")){
var height=jQuery(window).height();
var width=jQuery(window).width();
        jQuery('.imgmap').css('height',height);
        jQuery('.imgmap').css('width',width);

    }
    if(jQuery("div").hasClass("scrollableArea")){
var data=document.getElementById("data");
        jQuery('.scrollableArea').append('<ol>'+data.innerHTML+'</ol>');
    }
    // Find all YouTube videos
    if(document.getElementById("image_content")){
    var $allVideos = jQuery("iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width

        $fluidEl = jQuery("#image_content");}
    else
    {
        var $allVideos = jQuery("iframe[src^='http://www.youtube.com']"),

        // The element that is fluid width

            $fluidEl = jQuery("#frame_content");
    }

// Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        jQuery(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

// When the window is resized
    jQuery(window).resize(function() {

        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = jQuery(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

// Kick off one resize to fix all videos on page load
    }).resize();
});
window.onload = function ()
    {
        if(jQuery("div").hasClass("imgmap")){

            // This one is important, many browsers don't reset scroll on refreshes
            // Reset all scrollable panes to (0,0)
            jQuery('div.imgmap').scrollTo( 500,50 );
            // Reset the screen to (0,0)
            jQuery.scrollTo( 0,0 );
            jQuery("#top").hoverIntent(function()
            {
                jQuery('div.imgmap').animate({scrollTop:'0'}, 'slow');
            })
            jQuery("#bottom").hoverIntent(function()
            {
                var scrollBottom =  jQuery('div.imgmap').scrollTop()+ jQuery(window).height();
                jQuery('div.imgmap').animate({scrollTop:scrollBottom}, 'slow');
            })
            jQuery("#left").hoverIntent(function()
            {

                jQuery('div.imgmap').animate({scrollLeft:'0'}, 'slow');
            })
            jQuery("#right").hoverIntent(function()
            {
                var leftPos = jQuery('div.imgmap').scrollLeft()+ jQuery(window).width();
                jQuery('div.imgmap').animate({scrollLeft:leftPos}, 'slow');
            })



        }
    }
jQuery(window).on('beforeunload', function() {
    jQuery(window).scrollTop(0);
    jQuery.scrollTo( 0,0 );

});
