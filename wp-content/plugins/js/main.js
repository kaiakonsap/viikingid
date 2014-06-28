$.noConflict();
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
    if(jQuery("div").hasClass("scrollableArea")){

        jQuery('.scrollableArea').append('<ol><li class="cloud" id="area1"><p><a href="#">Desc1</a></p></li><li  class="cloud" id="area2"><p><a href="#">Desc2</a></p></li></ol>');
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