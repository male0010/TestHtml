<?php require_once "connect.php";
$first_name = mysqli_real_escape_string($con,$_POST['first_name']);
$last_name = mysqli_real_escape_string($con,$_POST['last_name']);
$email = mysqli_real_escape_string($con,$_POST['email']);
$pass = mysqli_real_escape_string($con,$_POST['pass']);

$sql = "INSERT INTO user(`first_name`,`last_name`,`email`,`password`) values ('$first_name','$last_name','$email','$pass')";
$result = mysqli_query($con,$sql);

if ($result){
    echo "success";
}else{
    echo "fail";
}
?>