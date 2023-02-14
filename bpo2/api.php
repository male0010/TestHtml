<?php
require "connect.php";
$sql = "SELECT * FROM imggun";
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

if($query){
    echo json_encode (['status' => "success",$resultArray]);
}
else {
    echo "fail";
}

?>