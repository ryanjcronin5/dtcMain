<?php
header('Access-Control-Allow-Headers: accept');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: SELECT');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "main";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM feedback LIMIT 3";
$result = $conn->query($sql);

$feedbackData = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $feedbackData[] = $row;
    }
}
echo json_encode($feedbackData);
$conn->close();
?>