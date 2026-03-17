<?php
$fullname = $_POST['Fullname'];
$mail = $_POST['email'];
$password = $_POST['pass'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$conn = new mysqli('localhost', 'root', '', 'toh');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration (fname, mail, password) VALUES (?, ?, ?)");
    if ($stmt === false) 
    {
        die('Prepare failed: ' . $conn->error);
    }
    $stmt->bind_param("sss", $fullname, $mail, $hashed_password);
    $stmt->execute();
    echo "Registration successful";
    $stmt->close();
    $conn->close();
}
?>
