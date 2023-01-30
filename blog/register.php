<?php include('sever.php')?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
     rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>register</title>
</head>
<body style="background-color: aliceblue; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" >
   
    <div class="col" style="background-color: rgb(78, 198, 225);margin: 20%;width: 18rem;border-radius: 5%;padding: 10px;" >
        <div class="container">
          <div class="col align-self-center" >
            <h1>Register</h1>
            <form action="register_db.php">
            <div class="mb-3">
                <label for="username" class="form-label" style="background-color: aliceblue; border-radius: 10%;">Username</label>
                <input type="text" class="form-control" id="username" >
            </div>
                
                <div class="mb-3">
                    <label for="email"class="form-label" style="background-color: aliceblue; border-radius: 10%;">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="password_1"class="form-label" style="background-color: aliceblue; border-radius: 10%;">password</label>
                    <input type="text" class="form-control" id="password_1">
                </div>
                <div class="mb-3">
                    <label for="password_2"class="form-label" style="background-color: aliceblue; border-radius: 10%;">confirm password</label>
                    <input type="text" class="form-control" id="password_2">
                </div>
                <div class="mb-3">
                    <button type="submit" id="border" class="col" >Register</button>
                </div>
                <p>Already a member? <a href="login.php">Sign in</a></p>
            </form>

          </div>

        </div>
    </div>
    
</body>
</html>