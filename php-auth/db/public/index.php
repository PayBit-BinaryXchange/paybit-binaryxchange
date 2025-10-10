<?php
require_once __DIR__ . '/../src/auth.php';
$pdo = getPDO();
$error = '';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $user = trim($_POST['username'] ?? '');
    $pass = $_POST['password'] ?? '';

    if($user === '' || $pass === ''){
        $error = "Enter username/email and password.";
    } else {
        $row = userByUsernameOrEmail($pdo, $user);
        if($row && password_verify($pass, $row['password'])){
            loginUser($row);
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Invalid credentials.";
        }
    }
}
$registered = isset($_GET['registered']);
?>
<!doctype html>
<html><body>
<h2>Login</h2>
<?php if($registered) echo "<p style='color:green'>Registration successful. Please login.</p>"; ?>
<?php if($error) echo "<p style='color:red'>".htmlspecialchars($error)."</p>"; ?>
<form method="post">
<label>Username or Email: <input name="username" value=""></label><br>
<label>Password: <input name="password" type="password"></label><br>
<button>Login</button>
</form>
<p><a href="register.php">Register</a></p>
</body></html>
