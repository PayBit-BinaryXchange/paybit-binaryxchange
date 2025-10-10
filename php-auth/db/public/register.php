<?php
require_once __DIR__ . '/../src/auth.php';
$pdo = getPDO();
$message = '';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $u = trim($_POST['username'] ?? '');
    $e = trim($_POST['email'] ?? '');
    $p = $_POST['password'] ?? '';

    if($u === '' || $e === '' || $p === ''){
        $message = "Fill all fields.";
    } else {
        // simple uniqueness check
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE username=? OR email=?");
        $stmt->execute([$u,$e]);
        if($stmt->fetchColumn() > 0){
            $message = "Username or email exists.";
        } else {
            $pw = password_hash($p, PASSWORD_DEFAULT);
            $stmt = $pdo->prepare("INSERT INTO users (username,email,password) VALUES (?,?,?)");
            $stmt->execute([$u,$e,$pw]);
            header("Location: index.php?registered=1");
            exit;
        }
    }
}
?>
<!doctype html>
<html><body>
<h2>Register</h2>
<?php if($message) echo "<p style='color:red'>".htmlspecialchars($message)."</p>"; ?>
<form method="post">
<label>Username: <input name="username"></label><br>
<label>Email: <input name="email" type="email"></label><br>
<label>Password: <input name="password" type="password"></label><br>
<button>Register</button>
</form>
<p><a href="index.php">Login</a></p>
</body></html>
