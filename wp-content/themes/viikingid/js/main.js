function panelSize() {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;

    $('.item').each(function () {

        $el = $(this);
        $el.css({'height': 'auto'});
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {

            // we just came to a new row.  Set all the heights on the completed row
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }

            // set the variables for the new row
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);

        } else {

            // another div on the current row.  Add it to the list and check if it's taller
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

        }
        console.log(currentTallest);
        // do the last row
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }

    });
}
$(document).ready(function () {
    $(window).resize(function () {
        panelSize();
        if ($(window).width() >= 600 && !$('.navbar-collapse').is(':visible')) {
            $('.navbar-collapse').slideDown('fast');
        }
        if ($(window).width() < 600 && !$('.navbar-collapse').is(':hidden')) {
            $('.navbar-collapse').slideUp('fast');
        }
    });
    $('.navbar-toggle').click(function (event) {
        event.preventDefault();

        if (!$('.navbar-collapse').is(':visible')) {
            $('.navbar-collapse').slideDown('fast');
        } else {
            $('.navbar-collapse').slideUp('fast');
        }
    });
    panelSize();
    $(window).on('load', function () {
        panelSize();
    });
});