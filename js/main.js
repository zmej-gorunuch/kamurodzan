$('.menuToggle input').click(function () {
    if ($('body').css('overflow') !== 'hidden') {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'visible');
    }
});