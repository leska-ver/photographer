"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);//Теперь за нажатие кнопки отвечает js

  async function formSend(e) {//e-mail
    e.preventDefault();

    let error = formValidate(form);//Ищет ошибки в емайл адресе

    //Для отправки формы
    let formData = new FormData(form);
    // formData.append('image', formImage.files[0]);

    if (error === 0) {
      form.classList.add('_sending');//Оповести пользователя что ошибок нет
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();   
        form.classList.remove('_sending');     
      } else {
          alert("Ошибка");
          form.classList.remove('_sending');
      }      
    } else {
      alert('Заполните обязательные поля')
    }
    // -//- Для отправки формы
  }

  function formValidate(form) {
    let error = 0;
    let formReg = document.querySelectorAll('._reg');//Поле обязательного заполнения

    for (let index = 0; index < formReg.length; index++) {
      const input = formReg[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {//Ставим в само поле емайл адреса(.form__input) Всем инпутам .form__input._error css Цвет ошибки
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  //Вспомогательные функции
  function formAddError(input) {//Добавляет
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {//Удаляет
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  //Функция теста email, проверяем правильность написания емайл адреса
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\]w+)*(\.\w{2,8})+$/.test(input.value);
  }

  //Покажет пользователю его картинку которую он отправляет
    var reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };
    reader.onerror = function (e) {
      alert('Ошибка');
    };
});