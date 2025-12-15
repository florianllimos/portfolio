<?php
// Démarrez la session

require_once("database.php");

session_start();

// Vérifiez si l'utilisateur est connecté
if(isset($_SESSION['email'])){
    // Détruisez la session
    session_destroy();
    
    // Effacez les données de la session
    $_SESSION = array();
    
    // Assurez-vous que toutes les données de la session sont bien supprimées
    session_unset();
    
    // Régénérez l'identifiant de session
    session_regenerate_id(true);
}

// Redirigez l'utilisateur vers la page de connexion
header("Location: ../index.php");
exit();
?>
