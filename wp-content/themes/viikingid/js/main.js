
$(document).ready(function () {
    var open=$(".current_page_item").find(".children");
    var open2=$(".current_page_parent").find(".children");
    var open3=$(".current_page_ancestor ").find(".children");
    open.css("display",["block "]);
    open2.css("display",["block "]);
    open3.css("display",["block "]);
    $('p:empty').remove();
});