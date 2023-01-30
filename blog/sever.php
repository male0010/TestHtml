<?php
    $servername = "localhost"; 
    $username = "root";
    $password = "";
    $dbname = "register";

    // Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn){
    die("connection fail" . mysqli_connect_error());
}

?>
