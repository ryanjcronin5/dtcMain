<?php

header('Access-Control-Allow-Headers: accept');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Credentials: true');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "main";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = test_input($_POST['full_name']);
    $email = test_input($_POST['email']);
    $subject = test_input($_POST['subject']);
    $msg = test_input($_POST['message']);

    $stmt = $conn->prepare("INSERT INTO feedback (fullname, email, subject, msg, time) VALUES (?, ?, ?, ?, current_timestamp())");

    if (!$stmt) {
        echo "Error: " . $conn->error;
    } else {
        $stmt->bind_param("ssss", $fullName, $email, $subject, $msg);
        if ($stmt->execute()) {
            echo "Sent";
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    }
}

$conn->close();

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>
