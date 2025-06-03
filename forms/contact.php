<?php
// Replace with your email
$to = "tanujarawat451@gmail.com";

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Validate input
if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Please fill in all fields correctly.";
  exit;
}

// Construct email
$email_subject = "Contact Form: $subject";
$email_body = "You have received a new message from your website contact form.\n\n" .
              "Name: $name\n" .
              "Email: $email\n" .
              "Subject: $subject\n" .
              "Message:\n$message";

$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
  echo "success";
} else {
  http_response_code(500);
  echo "Something went wrong. Please try again later.";
}
?>