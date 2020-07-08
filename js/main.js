$('.menuToggle input').prop('checked', false).click(function () {
    if ($('.menuToggle input').is(':checked')) {
        $('body').toggleClass('no-scroll');
    } else {
        $('body').toggleClass('no-scroll');
    }
});