$(document).ready(function () {
    $(".header-top-mb .header-container-mb .btn-nav").click(function () {
        $(".header .main-menu").toggle();
    });
    $(".owl-doctor-1").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });
});
