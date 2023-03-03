<?php require "connect.php";
$acc_username = $_POST['acc_username'];
$acc_password = $_POST['acc_password'];
$sql = "SELECT * FROM account where acc_username = '$acc_username' and acc_password = '$acc_password' ";
$result = mysqli_query($con,$sql);

if ($result){
    if (mysqli_num_rows($result)>0){
        while ($z  = mysqli_fetch_array($result)){
            $acc_name = $z['acc_name'];
        }
        echo json_encode(['status'=>"success",'acc_username'=>$acc_username,'acc_name'=>$acc_name]);
    }else{
        echo $sql;
    }
}else{
    echo "fail";
}
?>