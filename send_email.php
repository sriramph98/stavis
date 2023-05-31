<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    
    $to = "sriramph9812@gmail.com";
    $subject = "New Quote Request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nMessage: $message";
    $headers = "From: enquiry@stavis.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
