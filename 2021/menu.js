$(document).ready(function () {
    $(".navbar-wrapper").load("menu.html", function () {
        $("a").each(function () {
            if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
                $(this).parents("li").addClass('active');
            }
        });
    });
});