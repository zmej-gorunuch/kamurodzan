$('.menu__menu-toggle input').prop('checked', false).click(function () {
    if ($('.menu__menu-toggle input').is(':checked')) {
        $('body').toggleClass('no-scroll');
    } else {
        $('body').toggleClass('no-scroll');
    }
});