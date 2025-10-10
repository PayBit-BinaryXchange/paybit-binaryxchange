<?php
// src/auth.php
session_start();

function getPDO(){
    $dir = __DIR__ . "/../db";
    if(!is_dir($dir)) mkdir($dir, 0755, true);
    $path = $dir . "/app.sqlite";
    $pdo = new PDO("sqlite:$path");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function userByUsernameOrEmail($pdo, $user){
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :u OR email = :u LIMIT 1");
    $stmt->execute([':u'=>$user]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function requireLogin(){
    if(empty($_SESSION['user_id'])){
        header("Location: index.php");
        exit;
    }
}

function loginUser($userRow){
    session_regenerate_id(true);
    $_SESSION['user_id'] = $userRow['id'];
    $_SESSION['username'] = $userRow['username'];
}
