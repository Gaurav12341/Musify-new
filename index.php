<?php

    session_start();

    include('db_connect.php');
    $msg=false;

    if (isset($_POST['username'])){
        $user_name = $_POST['username'];
        $user_password = $_POST['userpassword'];

        $query = "select * from user where user = '".$user_name."' AND password = '".$user_password."' limit 1";

        $result = mysqli_query($con, $query);

        if(mysqli_num_rows($result)==1){
            header('Location: welcome.php');
        }
        else{
            $msg = "Incorrect Username or Password";
        }
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Musify</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
<body>
    <header>
        <div class="left1">
            <div class="content">
                <form action="" method="post">
                    <h3>Login</h3>
                    <div class="card">
                        <label for="name">Name: </label>
                        <input type="text" name="username" placeholder="Enter your Username" required>
                    </div>
                    <div class="card">
                        <label for="password">Password: </label>
                        <input type="password" name="userpassword" placeholder="Enter your Password" required>
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" ><span>Remember Me</span>
                    </div>
                    <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
                </form>
            </div>
        </div>

        <div class="right1">
            <img src="login_png.jpg" alt="">
            <!-- <h3>Incorrect Username or Password</h3> -->
            <?php
            echo ('<h3>'.$msg.'</h3>');         
               ?>
        </div>
    </header>
</body>
</html>