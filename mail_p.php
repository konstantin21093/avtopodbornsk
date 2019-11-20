<?php
/*if( $_POST ){
    print_r($_POST);
    die;
}*/


if( $_POST ){
    
    $recepient = "avtopodbornsk54@yandex.ru";
    $sitename = "АвтоподборNSK";

    $name = trim($_POST["u_n_p"]);
    $phone = trim($_POST["u_p_p"]);
    $message = "Имя: $name \nТелефон: $phone \n";

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain;   charset=\"utf-8\"\n Form: $recepient");
    die;
}
?>
