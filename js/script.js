new WOW().init();
$('.slick-carousel').slick({
    autoplay: true,
    speed: 300,
    infinite: true,
    slidesToShow: 1, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: true, // Adds the dots on the bottom
    // adaptiveHeight: true
});

$(document).ready(function () {
    $("div.cool-tab-menu>div.list-group>div").hover(function (e) {
        e.preventDefault();
        $(this).siblings('div.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.cool-tab>div.cool-tab-content").removeClass("active");
        $("div.cool-tab>div.cool-tab-content").eq(index).addClass("active");
    });
    
    // toggle main banner
    jQuery(".navbar-toggler-icon").click(function () {
        jQuery(".main-banner").toggleClass("toggle-wraper");
    });
    
});