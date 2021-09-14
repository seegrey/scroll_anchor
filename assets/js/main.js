;(function ($){
    "use strict";

    $(document).ready(function() {
        $('#navNav a').bind('click', function(e) {
            e.preventDefault();

            let target = $(this).attr("href");

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function() {
                location.hash = target;
            });

            return false;
        });
    });

    $(window).scroll(function() {
        let scrollDistance = $(window).scrollTop();

        $('.block').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.nav a.active').removeClass('active');
                $('.nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

})(jQuery);