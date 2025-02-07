<?php

  $userdb = "XXXX";
  $passworddb = "XXXX!";

  try {

    $db = new PDO('mysql:host=XXXX;dbname=XXXX', $userdb, $passworddb);

  } catch (PDOException $e) {

    print "Erreur :" . $e->getMessage() . "<br/>";
    die;
  
  }