<?php require_once "connect.php";
$first_name = mysqli_real_escape_string($con,$_POST['first_name']);
$last_name = mysqli_real_escape_string($con,$_POST['last_name']);
$email = mysqli_real_escape_string($con,$_POST['email']);
$email2 = mysqli_real_escape_string($con,$_POST['email2']); 

$sql = "UPDATE  user SET `first_name`='$first_name',`last_name`='$last_name',`email`'$email2' WHERE email=$email";
$result = mysqli_query($con,$sql);

if ($result){
    echo "success";
}else{
    echo "fail";
}
?>