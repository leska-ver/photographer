document.addEventListener('DOMContentLoaded', function () {


  


  //Слайдер
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Плавный скролл по якорям. В любое место можно кинуть.
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    })
  });


  
});