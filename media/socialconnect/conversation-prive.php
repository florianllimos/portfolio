<?php

require_once("composants/database.php");

require_once("composants/header.php");

require_once("header-connected.php");

require_once("composants/user-connected.php");


$sql = "SELECT* FROM messages";
$query = $db->prepare($sql);
$query->execute();
$messages = $query->fetchAll();


?>

<div class="container-conversation" id="container-conversation">
  <?php foreach($messages as $message): ?>

  <?php endforeach; ?>
</div>
<div class="send-message">
  <form method="POST" class="send">
    <textarea rows="5" name="message" placeholder="Ecrivez votre message ici .."></textarea>
    <button type="submit" class="btn-login">Envoyer</button>
  </form>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  // Fonction pour charger les messages depuis le serveur
  function loadMessages() {
    $.ajax({
      url: "load_messages.php", // Le fichier PHP qui va récupérer les messages depuis la base de données
      type: "GET",
      success: function(data) {
        // Mettre à jour le contenu du conteneur de conversation
        $("#container-conversation").html(data);
      }
    });
  }

  // Appeler la fonction loadMessages au chargement de la page
  $(document).ready(function() {
    loadMessages();
  });

  // Soumettre le formulaire en utilisant AJAX
  $("form.send").submit(function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les données du formulaire
    var message = $("textarea[name=message]").val();

    // Envoyer les données au serveur en utilisant AJAX
    $.ajax({
      url: "send_message.php", // Le fichier PHP qui va traiter l'envoi du message
      type: "POST",
      data: { message: message },
      success: function() {
        // Charger les nouveaux messages après l'envoi du message
        loadMessages();

        // Réinitialiser le contenu du champ de texte
        $("textarea[name=message]").val("");
      }
    });
  });
</script>
