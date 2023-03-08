<?php
require "connect.php";

$sql = "SELECT * FROM imggun INNER JOIN subtype on imggun.id_subtype = subtype.id_subtype INNER JOIN type ON type.id_type = subtype.id_type WHERE 1;";
$con = mysqli_connect($server, $username, $password, $db_name);
$result = mysqli_query($con,$sql);
$resultArray = array();
while ($row = mysqli_fetch_array($result)){
    $row['id_type']; // Column name
    $re = array(
        'id_type'   => $row['id_type'],
        'name_type' => $row['Name_type'],
        'id_subtype' => $row['id_subtype'],
        'name_subtype' => $row['name_subtype'],
        'Name_data' => $row['Name_data'],
        'id_data'   => $row['id_data'],
        'file_name' => $row['file_name'],
        'path'      => $row['path'],
        
     );  

    array_push($resultArray,$re);
}
echo json_encode($resultArray);







?>