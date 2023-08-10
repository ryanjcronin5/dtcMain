<?php

include './php/conn.php';
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
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
