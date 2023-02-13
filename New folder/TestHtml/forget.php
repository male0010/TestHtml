<?php	require_once "connect.php";
$email = $_POST['email'];

$sql = "SELECT * FROM user where email = '$email'";
$result = mysqli_query($con,$sql);

if ($result) {
    if (mysqli_num_rows($result) > 0) {

        $to = $email;
        $subject = "จัดส่งข้อมูลให้ท่าน.....";

        $message = "แจ้งเปลียนรหัสผ่าน";

        // Always set content-type when sending HTML email
        $headers = "จัดส่งข้อมูลให้ท่าน" . $email . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: <male0@live.com>' . "\r\n";
        $headers .= 'Cc:male0@live.com' . "\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(['status' => "success", 'email' => $email]);
        } else {
            echo "fail";
        }
    }
    


}
?>