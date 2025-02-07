<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="media/home/florian.png" />
  <title>Florian Llimos</title>
  <link rel="stylesheet" href="style.css">
</head>
<?php

    require_once("component/database.php");
    require_once("background.php");
    require_once("component/header.php");

?>

<form method="POST" class="form-login">
    <div class="bloc-form">
        <input type="email" name="email" id="email" placeholder="Adresse e-mail" required>
    </div>
    <div class="bloc-form">
        <input type="password" name="password" id="password" placeholder="Mot de passe" required>
    </div>
    <button type="submit" class="btn-login">Me connecter</button>

    <?php

    if (!empty($_POST)) {
        if (isset($_POST["email"], $_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
            if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                $sql = "SELECT * FROM users WHERE email = :email";
                $query = $db->prepare($sql);
                $query->bindValue(":email", $_POST["email"], PDO::PARAM_STR);
                $query->execute();
                $user = $query->fetch();
                if ($user && password_verify($_POST["password"], $user["password"])) {
                    session_start();
                    $_SESSION["user"] = [
                        "id" => $user["id"],
                        "name" => $user["name"],
                        "email" => $user["email"]
                    ];
                    header("Location: admin.php");
                    exit();
                } else {
                    echo "<span class='error'>Le mot de passe et / ou l'adresse e-mail sont incorrects.</span>";
                }
            } else {
                echo "<span class='error'>Le mot de passe et / ou l'adresse e-mail sont incorrects.</span>";
            }
        } else {
            echo "<span class='error'>Veuillez remplir tous les champs.</span>";
        }
    }
    ?>
        
</form>
