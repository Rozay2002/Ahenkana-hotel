<?php
$check_in_date = $_POST['check_in_date'];
$check_out_date = $_POST['check_out_date'];
$adult = $_POST['adult'];
$children = $_POST['children'];
$rooms = $_POST['rooms'];




$email_from = 'acheamfourtophotel@gmail.com';

$email_subject = 'New room booked';


$email_body = "Check in date: $check_in_date.\n". 
"Check out date: $check_out_date.\n". 
"Adult: $adult.\n". 
"Children: $children.\n". 
"Rooms: $rooms.\n";

$to = 'robertassaw2002@gmail.com';

$headers = "From: $email_from ";

/*
 mail ("$to,$email_subject,$email_body,$headers");
 */

header("Location: index.html");


            
?>
