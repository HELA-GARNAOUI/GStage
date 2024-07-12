<?php
//les information mel formulaire
    
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $filiere = $_POST["filiere"];
    $telephone = $_POST["telephone"];
    $cv = $_POST["cv"];
    $nom = $_POST["nom"];
    $statut = $_POST["statut"];

    $con = mysqli_connect("localhost","root","","dbgestion") or die("prob de connection");

     // Insérer les données dans la base de données
     $req1 = "INSERT INTO condidat(prenom,email,filiere,telephone,cv,nom,statut) VALUES ('$prenom','$email','$filiere','$telephone','$cv','$nom','$statut');";
     $res1 = mysqli_query($con,$req1);
     
 
     if ($res1) 
         echo "vous attend";
       
?>    