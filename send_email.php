<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $name = $input['name'];
    $email = $input['email'];
    $title = $input['title'];
    $message = $input['message'];

    $to = 'shyan.qiao@gmail.com';
    $subject = $title;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully';
    } else {
        echo 'Failed to send email';
    }
}
?>