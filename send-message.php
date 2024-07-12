
<?php
//les information mel formulaire
    
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $subject = $_POST["subject"];
    $message= $_POST["message"];
    

    $con = mysqli_connect("localhost","root","","dbgestion") or die("prob de connection");

     // Insérer les données dans la base de données
     $req1 = "INSERT INTO communication(nom,email,telephone,subject,message) VALUES ('$nom','$email','$telephone','$subject','$message');";
     
     $res1 = mysqli_query($con,$req1);
 
     if (mysqli_affected_rows($con)>0) 
         echo "Message envoyé avec succès";

?>    

