<?php
  require_once("composants/user-connected.php");
  require_once("composants/database.php");

session_start();

// Vérifier si le message est envoyé en utilisant la méthode POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Récupérer le message à partir des données POST
  $message = $_POST["message"];

  if(isset($_POST["message"]) && !empty($_POST["message"])) {

    $author = $_SESSION["lastname"] . ' ' . $_SESSION["firstname"];
  
    $message = htmlspecialchars($_POST["message"]);
  
    $send_message = "INSERT INTO messages(`author`, `content`) VALUES (:author, :content)"; 
    $new_query = $db->prepare($send_message);
    $new_query->bindValue(":author", $author, PDO::PARAM_STR);
    $new_query->bindValue(":content", $message, PDO::PARAM_STR);
  
    $new_query->execute();
  
  }

  // Après avoir inséré le message, vous pouvez recharger les messages dans le fichier "load_messages.php" pour les afficher à nouveau
}
?>
