<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('info@fls.guru', 'От клиента из сайта ФОТОГРАФ');
//Кому отправить
$mail->addAddress('lyaisan.333@yandex.ru');
//Тема письма
$mail->Subject = 'Привет! Это "Клиент из сайта https://shopping.com"';


//Тело письма
$body = '<h1>Встречай супер письмо!</h1>';

if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['tel']))){
  $body.='<p><strong>Телефон*:</strong> '.$_POST['tel'].'</p>';
}
if(trim(!empty($_POST['comment-paket']))){
  $body.='<p><strong>Пакет услуг:</strong> '.$_POST['comment-paket'].'</p>';
}
if(trim(!empty($_POST['comment-kol']))){
  $body.='<p><strong>Количество участников:</strong> '.$_POST['comment-kol'].'</p>';
}
if(trim(!empty($_POST['comment-data']))){
  $body.='<p><strong>Примерная дата:</strong> '.$_POST['comment-data'].'</p>';
}
if(trim(!empty($_POST['comment-insta']))){
  $body.='<p><strong>Ваш Instagram:</strong> '.$_POST['comment-insta'].'</p>';
}

  $mail->Body = $body;

  //Отправляем
  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены!';
  }  
    

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
  ?>