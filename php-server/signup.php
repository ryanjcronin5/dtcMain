<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "main";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");

    if ($stmt) {
        $stmt->bind_param("sss", $username, $email, $password);
        if ($stmt->execute()) {
            $response = ['message' => 'Signup successful'];
        } else {
            $response = ['message' => 'Error signing up'];
        }
        $stmt->close();
    } else {
        $response = ['message' => 'Error preparing statement'];
    }
} else {
    $response = ['message' => 'Invalid request'];
}

echo json_encode($response);
$conn->close();
?>
