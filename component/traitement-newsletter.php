<?php
require_once("database.php");
if (isset($_POST['submit_newsletter'])) {
  $emailNewsletter = htmlspecialchars($_POST["emailnewsletter"]);

  if (!empty($emailNewsletter)) {
    $sql = "INSERT INTO `newsletter` (emailnewsletter) VALUES (:emailnewsletter)";
    $query = $db->prepare($sql);
    $query->bindValue(":emailnewsletter", $emailNewsletter, PDO::PARAM_STR);

    if ($query->execute()) {
      echo "<span class='success' id='success-newsletter'>Vous êtes bien inscrit à la newsletter.</span>";
      header('Location: ../index.php');
      exit();
    } else {
      echo "<span class='error' id='error-newsletter'>Erreur lors de l'inscription à la newsletter.</span>";
    }
  }
}