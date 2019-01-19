$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    margin: 16,
    animateOut: 'fadeOut',
    center: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  });
});