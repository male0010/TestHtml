<?php require_once "connect.php";
$acc_username = mysqli_real_escape_string($con,$_POST['acc_username']);
$acc_password = mysqli_real_escape_string($con,$_POST['acc_password']);
$acc_name = mysqli_real_escape_string($con,$_POST['acc_name']);
$acc_lastname = mysqli_real_escape_string($con,$_POST['acc_lastname']);
$acc_email = mysqli_real_escape_string($con,$_POST['acc_email']);
$acc_phone = mysqli_real_escape_string($con,$_POST['acc_phone']);

$sql = "INSERT INTO account(`acc_username`, `acc_password`, `acc_name`, `acc_lastname`, `acc_email`, `acc_phone`) values ('$acc_username','$acc_password','$acc_name','$acc_lastname','$acc_email','$acc_phone')";
$result = mysqli_query($con,$sql);
 if ($result){
    echo "success";
 }
 else {
    echo "error";
 }
 ?>