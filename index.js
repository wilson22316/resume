jQuery(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".header").addClass("header--active");
            $('.nav_link').addClass("nav_link--active");
        } else {
            $(".header").removeClass("header--active");
            $(".nav_link").removeClass("nav_link--active");

        }
    });

    $('.burgerbtn').click(function () {
        $('#Burger').toggleClass('crossline')
    })

    $('.cover_content').hover(function () {
        $('.cover_content').toggleClass('cover_show')
    })

    $('.cover_content2').hover(function () {
        $('.cover_content2').toggleClass('cover_show')
    })
});