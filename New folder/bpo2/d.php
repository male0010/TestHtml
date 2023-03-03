<?php
require "connect.php";
$con = mysqli_connect($server, $username, $password, $db_name);

$query = mysqli_query($con, $sql);
if (!$query) {
    printf("Error: %s\n", $con->error);
    exit();
}
$resultArray = array();
while ($result = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
    array_push($resultArray, $result);
}
mysqli_close($con);

echo json_encode($resultArray);
