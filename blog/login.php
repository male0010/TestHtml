<?php include('sever.php')?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
     rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Login</title>
</head>
<body style="background-color: aliceblue; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" >
    <div class="card" style="background-color: rgb(78, 198, 225);margin: 10%;width: 18rem;border-radius: 10%;padding: 10px;" >
        <div class="row">
          <div class="col align-self-center" >
            <h1>Sign in</h1>
            <div class="mb-3">
                <label for="email" class="form-label" style="background-color: aliceblue; border-radius: 10%;">Email</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style="background-color: aliceblue; border-radius: 10%;">Password</label>
                <input type="password" class="form-control" id="password" placeholder="*********">
            </div>
            
            <button type="submit" class="col" id="border">Login</button>  <button class="col align-self-end" id="border"><a href="Register.php">register</a></button> 

          </div>

        </div>
      </div>
    
</body>
</html>