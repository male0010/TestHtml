<?php
require "connect.php";

$sql = "SELECT * FROM type INNER JOIN imggun ON type.id_type = imggun.id_type ";
$con = mysqli_connect($server, $username, $password, $db_name);
$result = mysqli_query($con,$sql);
$resultArray = array();
while ($row = mysqli_fetch_array($result)){
    $row['id_type']; // Column name
    $re = array(
        'id_type'   => $row['id_type'],
        'name_type' => $row['Name_type'],
        'Name_data' => $row['Name_data'],
        'id_data'   => $row['id_data'],
        'file_name' => $row['file_name'],
        'path'      => $row['path'],
        
     );  

    array_push($resultArray,$re);
}
echo json_encode($resultArray);


// $query = mysqli_query($con, $sql);
// if (!$query) {
//     printf("Error: %s\n", $con->error);
//     exit();
// }
// $resultArray = array();
// while ($result = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
//     array_push($resultArray, $result);
// }
// mysqli_close($con);

// echo json_encode($resultArray);





?>
