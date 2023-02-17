<?php
$server ="localhost";
$username = "root";
$password ="";
$db_name = "gun";

$con = mysqli_connect($server, $username, $password, $db_name);
mysqli_set_charset($con, "utf8"); //เชื่อมต่อกับฐานข้อมูล
// mysqli_query($con,"SET time_zone='+07:00'");
if ($con->connect_error) {
  echo("Connection failed: " . $con->connect_error);
}
?>