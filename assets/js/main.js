//alert('Hello World!');
/* --- Loading Web Page with Fade on Browser Load --- */
$(document).ready(function() {
    $('#landingVol1').fadeIn(1500);
    $('#landingVol2').fadeIn(1500);
    $('#pubDetailPage1').fadeIn(1500);
    $('#pubDetailPage2').fadeIn(1500);
    $('#about').fadeIn(1500);
  });
/* --- End of Web Page with Fade on Browser Load --- */

/* --- Init Carousel Image Slider ---*/
$(document).ready(function () {
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});

/* --- Removing Scroll Direction and Pagination on Scroll --- */
$(window).scroll(function() {

 if ($(this).scrollTop()>300)
  {
     $('#scrollDirection').fadeOut();
  }
 else
  {
   $('#scrollDirection').fadeIn();
  }
});
/* --- End of Removing Scroll Direction and Pagination on Scroll --- */
