"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);//Теперь за нажатие кнопки отвечает js

  async function formSend(e) {//e-mail
    e.preventDefault();

    let error = 0;//Ищет ошибки в POST

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

  //Вспомогательные функции
  function formAddError(input) {//Добавляет
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {//Удаляет
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  
});