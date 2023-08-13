<?php

include './php/conn.php';
header('Access-Control-Allow-Headers: accept');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
$user = $_POST['full_name'];
echo ("Hello from server: $user");


#if ($_SERVER["REQUEST_METHOD"] == "POST") {
#    $fullName = test_input($_POST['full_name']);
#    $email = test_input($_POST['email']);
#    $subject = test_input($_POST['subject']);
#    $msg = test_input($_POST['message']);
#}

#function test_input($data) {
#    $data = trim($data);
#    $data = stripslashes($data);
#    $data = htmlspecialchars($data);
#    return $data;
#}
?>
