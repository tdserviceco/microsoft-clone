console.log('sliderJS by Ken Wheeler')
$(document).ready(function(){
  $('.main-hero-slider').slick({
    swipeToSlide: true,
    arrows: true,
    nextArrow: "<i class='fas fa-angle-right'></i>",
    prevArrow: "<i class='fas fa-angle-left'></i>"
  });
});