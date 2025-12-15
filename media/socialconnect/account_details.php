<?php
  require_once("composants/database.php");
  require_once("composants/header.php");
  require_once("header-connected.php");
  require_once("composants/user-connected.php");

  // Récupérer l'ID du compte depuis l'URL
  $account_id = $_GET["id"];

  // Requête pour récupérer les informations du compte
  $sql = "SELECT * FROM users WHERE id = :id";
  $query = $db->prepare($sql);
  $query->bindParam(":id", $account_id);
  $query->execute();
  $account = $query->fetch();

  // Afficher les informations du compte
  if ($account) {

    ?>

    <div class="account-info">
      <img src="media/profil.png" alt="Logo de compte" class="account-img">
      <ul class="ul-account">
      <hr class="separator-account">
        <li><?= $account["lastname"] . ' ' . $account["firstname"] ?></li>
        <hr class="separator-account">
        <li><?= $account["birthday"] ?></li>
        <hr class="separator-account">
        <li><?= $account["country"] ?></li>
        <hr class="separator-account">
        <li><?= $account["city"] ?></li>
      </ul>
    </div>
    
    <?php

  } else {
    echo "Compte introuvable.";
  }
?>