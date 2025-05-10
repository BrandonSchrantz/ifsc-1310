$(document).ready(function() {

    $('.gallery').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.gallery-sec').slick({
      slidesToShow: 2,
      slidesToScroll: 2
    });


});