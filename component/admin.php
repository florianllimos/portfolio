<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Florian Llimos | Admin</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

  <?php

    require_once("component/database.php");
    require_once("component/header.php");
    require_once("component/check-admin.php");
    require_once("background.php");

    $sqlFormulaire = "SELECT * FROM formulaire ORDER BY 'id' DESC";
    $queryFormulaire = $db->query($sqlFormulaire);
    $formulaire = $queryFormulaire->fetchAll();

    $sqlNewsletter = "SELECT * FROM newsletter ORDER BY 'id' DESC";
    $queryNewsletter = $db->query($sqlNewsletter);
    $newsletter = $queryNewsletter->fetchAll();
  
  ?>
  <h3 class="title-admin" id="first-title">Formulaire</h3>
  <div class="container-form-contact">
    <?php
      foreach($formulaire as $form):

        ?>

        <div class="admin-form">
          <p><?= 'Nom : ' . $form["name"] ?></p>
          <p><?= 'Adresse e-mail : ' . $form["email"] ?></p>
          <p><?= 'Numéro de téléphone : ' . $form["number"] ?></p>
          <p><?= 'Message : ' . $form["content"] ?></p>
        </div>  

        <?php

      endforeach;
    ?>
  </div>
  <h3 class="title-admin">Newsletter</h3>
  <ul>
    <?php
    foreach($newsletter as $news):
    ?>
    <li class="li-admin"><?= $news["emailnewsletter"] ?></li>
    <?php
      endforeach;
    ?>
  </ul>
</body>
</html>