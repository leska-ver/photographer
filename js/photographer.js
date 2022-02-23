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


  //Маска телефона//
  var selector = document.querySelector("input[type='tel']"); //Всем input с атрибутом type со значением tel
  var im = new Inputmask("+7 (999)-999-99-99"); //Задали внешний вид маски

  //С помощью метода .mask инициализировали этот плагин и натравили его на selector-ы input[type='tel']
  im.mask(selector);

  //Валидация телефона//
  //Первый аргумент передаём селектор т.е html с классом form
  new JustValidate('.recording__form', {
    //Второй аргумент передаём его(form) правила
    rules: {
      name: { //data-validate-field="name"
        required: true, //Это означает поле обязательное для заполнение
        minLength: 2,
        maxLenght: 30
      },
      tel: { //data-validate-rules="phone"
        required: true, //Это означает поле обязательное для заполнение
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          // console.log(phone)
          return Number(phone) && phone.length === 10
        }
      },
      mail: { //data-validate-field="mail"
        required: true, //Это означает поле обязательное для заполнение
        email: true //Проверяет сама себя на валидность, например @ на месте
      },
    },
    //От проверяющего дополнен код
    messages: { //Извещает об ошибке
      tel: {
        required: 'Укажите ваш телефон'
      },
      name: 'Как вас зовут?',
      mail: 'Укажите ваш e-mail',
      text: 'Ваш Instagram'
    },
    colorWrong: '#FF5C00' //цвет сообщений валидации(ошибки фразы) и бордера
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