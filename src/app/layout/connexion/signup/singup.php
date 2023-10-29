<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $first_name = $_POST['first_name'];
  $email = $_POST['email'];
  $phone_num = $_POST['phone_num'];
  $birthday = $_POST['birthday'];
  $genre = $_POST['genre'];
  $password = $_POST['password'];
  $last_name = $_POST['last_name'];
  echo "<h1>Name: $first_name</h1><br>";
  echo "Email: $email<br>";
}
?>





