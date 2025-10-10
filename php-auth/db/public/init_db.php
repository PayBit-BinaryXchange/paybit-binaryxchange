<?php
require_once __DIR__ . '/../src/auth.php';
$pdo = getPDO();

$pdo->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

$exists = $pdo->query("SELECT COUNT(*) FROM users")->fetchColumn();
if($exists == 0){
    $pw = password_hash('TestPass123!', PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->execute(['demo','demo@example.com',$pw]);
    echo "DB created and demo user inserted. Username: demo  Password: TestPass123!";
} else {
    echo "DB already has users.";
}
