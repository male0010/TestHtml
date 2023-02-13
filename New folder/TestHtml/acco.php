<?php require_once "connect.php";
$email = $_POST['email'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];

$sql = "SELECT * FROM user('first_name','last_name','email') values ('$first_name','$last_name','$email')";
$result = mysqli_query($con,$sql);

if ($result){
    if (mysqli_num_rows($result)>0){
        while ($z  = mysqli_fetch_array($result)){
            $first_name = $z['first_name'];
            $last_name = $z['last_name'];
            $email = $z['email'];
        }
        echo json_encode(['status'=>"success",'first_name'=>$first_name,'last_name'=>$last_name,'email'=>$email]);
    }else{
        echo $sql;
    }
}else{
    echo "fail";
}
?>