// Menu add no-scroll
$('.menu__menu-toggle input').prop('checked', false).click(function () {
    if ($('.menu__menu-toggle input').is(':checked')) {
        $('body').toggleClass('no-scroll');
    } else {
        $('body').toggleClass('no-scroll');
    }
});

// Open mobile menu
$('.mobile_menu').click(function(e){
    e.preventDefault();
    $('.header__menu .mobile_menu_list').slideToggle();
});