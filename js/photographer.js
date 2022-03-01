document.addEventListener('DOMContentLoaded', function () {

  //Слайдер//
  let reviewsSlider = new Swiper(".reviews__slides-container", {
    // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
    slidesPerView: 1,
    // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
    grid: {
      rows: 1,
      fill: "row"
    }, //(от Swiper-а 7-ая версия)
    spaceBetween: 20,


    //Бесконечное листание страниц
    speed: 2000, //Интервал ожидания

    // autoplay: {
    //delay: 3000,Интервал ожидания
    //     disableOnInteraction: false,      
    // }, 


    pagination: {
      el: ".reviews .reviews__pagination",
      type: "fraction"
    },

    navigation: {
      nextEl: ".reviews__btn_next",
      prevEl: ".reviews__btn_prev"
    },

    //Стили для галереи
    breakpoints: {
      320: {
        slidesPerView: 1,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 30
      }, 

      581: {
        slidesPerView: 2,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 30
      },

      768: {
        slidesPerView: 3,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 32
      },

      1050: {
        slidesPerView: 4,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 35
      },

      1620: {
        slidesPerView: 5,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 35
      },

      1920: {
        slidesPerView: 6,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 35
      },

      2220: {
        slidesPerView: 7,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {
          rows: 1
        }, //(от Swiper-а 7-ая версия)
        spaceBetween: 50
      }
    },
  });

  

  //Скрываем часть услуг .prices__item//
  const list = document.getElementById('list-js');
const moreButton = document.getElementById('prices__button-js');
moreButton.addEventListener('click', function () {
  list.classList.toggle('full');
});


  
  /*Клик БУРГЕР*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function() {
    $('.burger').click(function() {
      $(this).toggleClass('open');
    })
  })




  // console.log(); находит в js-ce ошибку. Deftools
 // Модальное окно//
    const btns = document.querySelectorAll('.modalGo__link-js');
    const modalOverlay = document.querySelector('.modalGo-overlay ');
    const modals = document.querySelectorAll('.modalGo');

    btns.forEach((el) => {
      el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        const currentModal = document.querySelector(`[data-target="${path}"]`);
        const closeBtn = currentModal.querySelector('.modalGo__js-close');

        
        modals.forEach((el) => {
          el.classList.remove('modalGo--visible');
        });
      
        currentModal.classList.add('modalGo--visible');
        modalOverlay.classList.add('modalGo-overlay--visible');

        //Для modal__js-close 
        closeBtn.focus(); 
      });
    });

    // Реакция нажима в любом месте(выключатель окна) не удалять
    modalOverlay.addEventListener('click', (e) => {
      console.log(e.target);
      
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modalGo-overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modalGo--visible');
        });
      }
    });

    //Реакция нажима на Х(выключатель окна)
    modals.forEach((el) => {
      const closeBtn = el.querySelector('.modalGo__js-close');

      closeBtn.addEventListener('click', function () {
        modalOverlay.classList.remove('modalGo-overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modalGo--visible');
        });
      });
    });
      
    /*Модальное окно для Регистрации*/
      document.querySelector("#registration").onclick = function(){
    alert("Вы нажали на Регистрацию");
    }
  // -- Модальное окно -- //


  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function () {
    $('a[href^="#"]').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
      return false;
    })
  });
});