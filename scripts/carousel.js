$(document).ready(function(){
    $('#Nariai .container-3 .carousel').slick({
        rows: 2,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<span class="priv_arrow"><img src="../images/left button.svg" alt="previous"></i></span>',
        nextArrow: '<span class="next_arrow"><img src="../images/right button.svg" alt="next"></span>',
        
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    rows: 2,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    rows: 2,
                    arrows: false,
                    draggable: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    rows: 3,
                    arrows: false,
                    draggable: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });  
});
