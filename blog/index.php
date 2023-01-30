<?php 
    session_start();

    if (isset($_SESSION['email'])){
        header('location: login.php');
    }
    if (isset($_GET['logout'])) {
        # code...
        session_destroy();
        unset($_SESSION['email']);
        header('location: login.php');
    }
?>

<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
     rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>index</title>
</head>
<body style="background-color: aliceblue; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" >
    <div class="container">
            <div class="col align-self-center" >
                <H2>Welcome</H2>
            </div>
            <div class="content">
                   <!--login in userinformation-->
                   <?php if (isset($_SESSION['email']))?>
                    <p>welcome <strong><?php echo $_SESSION['username'] ?></strong></p>
                    <p><a href="index.php?logout='1'" style=color:red;>Logout</a></p>
            </div>
    </div> 
</body>
</html>