<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $message = $_POST['message'];

  // Send email
  $to = 'sriramph9812@gmail.com'; // Replace with the recipient's email address
  $subject = 'New email from form';
  $body = "Name: $name\n\nMessage: $message";

  $headers = "From: sender@example.com"; // Replace with the sender's email address

  if (mail($to, $subject, $body, $headers)) {
    $response = array('success' => true);
  } else {
    $response = array('success' => false);
  }

  header('Content-Type: application/json');
  echo json_encode($response);
}
?>
