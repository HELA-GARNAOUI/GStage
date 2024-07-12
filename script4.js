document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('stagiaireForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const filiere = document.getElementById('filiere').value;
        const niveau_etudes = document.getElementById('niveau_etudes').value;

        addStagiaire(nom, prenom, email, telephone, filiere, niveau_etudes);
    });

    fetchStagiaires();
});

function addStagiaire(nom, prenom, email, telephone, filiere, niveau_etudes) {
    fetch('add_stagiaire.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom, prenom, email, telephone, filiere, niveau_etudes })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchStagiaires();
        } else {
            alert('Erreur lors de l\'ajout du stagiaire');
        }
    });
}

function fetchStagiaires() {
    fetch('fetch_stagiaires.php')
    .then(response => response.json())
    .then(data => {
        const stagiaireList = document.getElementById('stagiaireList');
        stagiaireList.innerHTML = '';
        data.forEach(stagiaire => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stagiaire.nom}</td>
                <td>${stagiaire.prenom}</td>
                <td>${stagiaire.email}</td>
                <td>${stagiaire.telephone}</td>
                <td>${stagiaire.filiere}</td>
                <td>${stagiaire.niveau_etudes}</td>
                <td>
                    <button class="btn btn-warning" onclick="editStagiaire(${stagiaire.id})">Modifier</button>
                    <button class="btn btn-danger" onclick="deleteStagiaire(${stagiaire.id})">Supprimer</button>
                </td>
            `;
            stagiaireList.appendChild(row);
        });
    });
}

function editStagiaire(id) {
    // Implémentez la logique de modification des stagiaires ici
}

function deleteStagiaire(id) {
    fetch('delete_stagiaire.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchStagiaires();
        } else {
            alert('Erreur lors de la suppression du stagiaire');
        }
    });
}
