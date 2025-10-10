<?php
require_once __DIR__ . '/../src/auth.php';
$pdo = getPDO();
requireLogin();

// fetch the user
$stmt = $pdo->prepare("SELECT id,username,email,created_at FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!doctype html><body>
<h2>Dashboard</h2>
<p>Welcome, <?=htmlspecialchars($user['username'])?> (<?=htmlspecialchars($user['email'])?>)</p>
<p>Member since <?=htmlspecialchars($user['created_at'])?></p>
<p><a href="logout.php">Logout</a></p>
</body></html>
