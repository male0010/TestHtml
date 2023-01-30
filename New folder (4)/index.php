<?php
if (isset($_POST['btn'])) {

    $to = $_POST['to'];
    $sub = $_POST['sub'];
    $mes = $_POST['mes'];

    $send = mail($to, $sub, $mes);
    if ($send) {
        $ret = "Mesaage send";
    } else {
        $ret = "Mesaage not send";
    }
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send Emiil</title>
    <!-- CSS only -->

    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>

<body>
    <div class=" container mt-5">
        <p class=" text-center"><?php echo $ret; ?></p>
        <form action="" method="post" class="mt-5">
            <input type="text" placeholder="Email" class=" form-control" name="to"><br>
            <input type="text" placeholder="Subject" class=" form-control" name="sub"><br>
            <input type="text" placeholder="Message" class=" form-control" name="mes"><br>
            <input type="submit" value="Send Mail" class=" btn btn-primary" name="btn">
        </form>

    </div>
</body>

</html>
