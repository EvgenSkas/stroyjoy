<?
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");
    $to = "kashirina_1984@tut.by";
    $subject = 'Обратный звонок'; //Заголовок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Тип покрытия: '.$_POST['0'].'</p>
                    <p>Состояние: '.$_POST['1'].'</p>
                    <p>Тип крыши: '.$_POST['2'].'</p>
                    <p>Площадь крыши: '.$_POST['3'].'</p>
                    <p>Место нахождения: '.$_POST['4'].'</p>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Email: '.$_POST['email'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p>                                   
                </body>
            </html>'; //Текст сообщения
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <hoster@gmail.com>\r\n"; //Наименование и почта отправителя
    $send = mail($to, $subject, $message, $headers, '-f evgenskas@gmail.com'); //Отправка письма с помощью функции mail
    if($send) {
        echo "Сообщение отправлено! Скоро мы с вами свяжемся.Price";
    }
?>