<?php
session_start();
include('db_connect.php');
$msg = false;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $user_name= $_POST['username'];
    $user_email= $_POST['useremail'];
    $user_password= $_POST['userpassword'];
    $user_re_password= $_POST['userrepassword'];

    if(!empty($user_name) && !empty($user_email) && !empty($user_password) && !is_numeric($user_name)){

        if($user_password === $user_re_password){
            $query = "insert into user (user, email, password) VALUES ('$user_name', '$user_email', '$user_password') ";
            mysqli_query($con, $query);
            header("Location: index.php");
        }
        else{
            $msg = "Password Not Matched";
        }
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp | Musify</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
<body>
    <header>
        <div class="left1">
            <div class="content">
                <form action="" method="post">
                    <h3>Sign Up</h3>
                    <div class="card">
                        <label for="name">Name: </label>
                        <input type="text" name="username" placeholder="Enter your Username" required>
                    </div>
                    <div class="card">
                        <label for="email">Email: </label>
                        <input type="email" name="useremail" placeholder="Enter your Email" required>
                    </div>
                    <div class="card">
                        <label for="password">Password: </label>
                        <input type="password" name="userpassword" placeholder="Enter your Password" required>
                    </div>
                    
                    <div class="card">
                        <label for="repassword">Password: </label>
                        <input type="password" name="userrepassword" placeholder="Confirm your Password" required>
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" ><span>Remember Me</span>
                    </div>
                    <p>Already have an Account? <a href="index.php">Login</a></p>
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