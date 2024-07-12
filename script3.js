document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('searchName').value;
        const prenom = document.getElementById('searchPrenom').value;
        const filiere = document.getElementById('searchFiliere').value;
        const keywords = document.getElementById('searchKeywords').value;

        fetchCandidatures(name, prenom, filiere, keywords);
    });

    fetchCandidatures();
});

function fetchCandidatures(name = '', prenom = '', filiere = '', keywords = '') {
    fetch('fetch_candidatures.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, prenom, filiere, keywords })
    })
    .then(response => response.json())
    .then(data => {
        const candidatureList = document.getElementById('candidatureList');
        candidatureList.innerHTML = '';
        data.forEach(candidature => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${candidature.nom}</td>
                <td>${candidature.prenom}</td>
                <td>${candidature.email}</td>
                <td>${candidature.telephone}</td>
                <td>${candidature.filiere}</td>
                <td>${candidature.statut}</td>
                <td>
                    <button class="btn btn-success" onclick="updateStatus(${candidature.id}, 'accepté')">Accepter</button>
                    <button class="btn btn-danger" onclick="updateStatus(${candidature.id}, 'refusé')">Refuser</button>
                </td>
            `;
            candidatureList.appendChild(row);
        });
    });
}

function updateStatus(id, status) {
    fetch('update_status.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, status })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchCandidatures();
        } else {
            alert('Erreur lors de la mise à jour du statut');
        }
    });
}
