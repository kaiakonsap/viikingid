
$(document).ready(function () {
    var zoomlevel=1;





        $("body").css({
            "-moz-transform":"scale("+zoomlevel+")",
            "-webkit-transform":"scale("+zoomlevel+")",
            "-o-transform":"scale("+zoomlevel+")",
            "-ms-transform":"scale("+zoomlevel+")"
        });

    $('p:empty').remove();
    $('.navbar-toggle').click(function (event) {
        event.preventDefault();

        if(!$('.accordion').is(':visible')) {
            $('.accordion').slideDown('fast');
        } else {
            $('.accordion').slideUp('fast');
        }
    });

    // Find all YouTube videos
    if(document.getElementById("image_content")){
    var $allVideos = $("iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width

        $fluidEl = $("#image_content");}
    else
    {
        var $allVideos = $("iframe[src^='http://www.youtube.com']"),

        // The element that is fluid width

            $fluidEl = $("#frame_content");
    }

// Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

// When the window is resized
    $(window).resize(function() {

        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

// Kick off one resize to fix all videos on page load
    }).resize();
});