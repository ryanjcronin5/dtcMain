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
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    if ($stmt) {
        $stmt->bind_param("s", $username);
        if ($stmt->execute()) {
            $stmt->store_result();
            if ($stmt->num_rows === 1) {
                $stmt->bind_result($hashedPassword);
                $stmt->fetch();
                if (password_verify($password, $hashedPassword)) {
                    $response = ['message' => 'Login successful'];
                } else {
                    $response = ['message' => 'Invalid password'];
                }
            } else {
                $response = ['message' => 'User not found'];
            }
        } else {
            $response = ['message' => 'Error executing query'];
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