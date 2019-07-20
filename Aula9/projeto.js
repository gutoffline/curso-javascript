$(document).ready(function(){
    $('#slider').nivoSlider();
    $('.galeria').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});