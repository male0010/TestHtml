<?php require "connect.php";
$user = $_POST['user'];
$pass = $_POST['pass'];
$sql = "SELECT * FROM user where email = '$user' and password = '$pass' ";
$result = mysqli_query($con,$sql);

if ($result){
    if (mysqli_num_rows($result)>0){
        while ($z  = mysqli_fetch_array($result)){
            $first_name = $z['first_name'];
            $last_name = $z['last_name'];
        }
        echo json_encode(['status'=>"success",'first_name'=>$first_name,'last_name'=>$last_name]);
    }else{
        echo $sql;
    }
}else{
    echo "fail";
}
?>