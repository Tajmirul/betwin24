$(document).ready(function () {

    /* magnificPopup img view */
    // $('.popup-image').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    /* magnificPopup video view */
    // $('.popup-video').magnificPopup({
    //     type: 'iframe'
    // });

    //for menu active class
    // $('.portfolio-menu button').on('click', function (event) {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });

    // WOW active
    // new WOW().init();

    // slick slider for banner 
    // $('.banner-slider').slick({
    //     prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
    //     nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
    //     // dots: true,
    //     autoplay: true
    // });

    // my code ----------------------------------------------------------------------

    // open menu --------------------------
    // $('.navigation > ul > li').hover(function() {
    //     console.log($(this).children('ul.submenu'));
    //     console.log(3434)


    //     $(this).children('ul').slideDown(200);
    // });

    // $('.nav ul li').blur(function() {
    //     $(this).children('ul').slideUp(200);
    // });
    

    // game filter ----------------------------
    $('.side-bar a').click(filter);

    // all popup ----------------------------
    $('.open-popup').click(function(event) {

        $('.popup-container').show();
        $($(this).data('popup')).fadeIn(200);
        $('.overlay').fadeIn(200);

        event.preventDefault();
    });
    $('.overlay, .close-popup').click(function() {

        $('.popup-container').hide();
        $('.popup').fadeOut(200);
        $('.overlay').fadeOut(200);

    });













});


// game filter function

function filter(event) {

    // adding active class to clicked side-bar item
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    // hideing all element
    $('.all-match').hide();

    // show filtered elements
    $($(this).data('show')).show();


    event.preventDefault();

};
