
<?php
// Connexion à la base de données
$con = new mysqli("localhost", "root", "", "dbgestion");

// Vérifier la connexion
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$input = json_decode(file_get_contents('php://input'), true);
$nom = $input['nom'];
$prenom = $input['prenom'];
$email = $input['email'];
$telephone = $input['telephone'];
$filiere = $input['filiere'];
$niveau_etudes = $input['niveau_etudes'];

// Construire la requête SQL
$sql = "INSERT INTO stagiaires (nom, prenom, email, telephone, filiere, niveau_etudes) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $con->prepare($sql);
$stmt->bind_param("ssssss", $nom, $prenom, $email, $telephone, $filiere, $niveau_etudes);

$response = [];
if ($stmt->execute()) {
    $response['success'] = true;
} else {
    $response['success'] = false;
}

echo json_encode($response);

// Fermer la connexion
$stmt->close();
$con->close();
?>

