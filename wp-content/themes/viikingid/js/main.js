
$(document).ready(function () {
    $('p:empty').remove();
    $('.navbar-toggle').click(function (event) {
        event.preventDefault();

        if(!$('.accordion').is(':visible')) {
            $('.accordion').slideDown('fast');
        } else {
            $('.accordion').slideUp('fast');
        }
    });
});