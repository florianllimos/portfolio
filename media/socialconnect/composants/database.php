<?php

  $userdb = "354514_florian";
  $passworddb = "z8WiWdyy3iaeGzb7!";

  try {

    $db = new PDO('mysql:host=mysql-llimosflorian.alwaysdata.net;dbname=llimosflorian_fakeback', $userdb, $passworddb);

  } catch (PDOException $e) {

    print "Erreur :" . $e->getMessage() . "<br/>";
    die;
  
  }