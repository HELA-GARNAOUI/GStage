<?php
// Connexion à la base de données
$con = new mysqli("localhost", "root", "", "dbgestion");

// Vérifier la connexion
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$input = json_decode(file_get_contents('php://input'), true);
$name = $input['name'] ?? '';
$prenom = $input['prenom'] ?? '';
$filiere = $input['filiere'] ?? '';
$keywords = $input['keywords'] ?? '';

// Construire la requête SQL
$sql = "SELECT * FROM condidat WHERE nom LIKE ? AND prenom LIKE ? AND filiere LIKE ? AND (nom LIKE ? OR prenom LIKE ? OR filiere LIKE ?)";
$stmt = $con->prepare($sql);
$likeName = "%$name%";
$likePrenom = "%$prenom%";
$likeFiliere = "%$filiere%";
$likeKeywords = "%$keywords%";
$stmt->bind_param("ssssss", $likeName, $likePrenom, $likeFiliere, $likeKeywords, $likeKeywords, $likeKeywords);
$stmt->execute();
$result = $stmt->get_result();
$candidatures = [];

while ($row = $result->fetch_assoc()) {
    $candidatures[] = $row;
}

echo json_encode($candidatures);

// Fermer la connexion
$stmt->close();
$con->close();
?>
