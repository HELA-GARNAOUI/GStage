document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('stagiaireForm');
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const telephone = document.getElementById('telephone');
    const filiere = document.getElementById('filiere');
    const niveauEtudes = document.getElementById('niveau_etudes');



    form.addEventListener('submit', function(event) {
        let valid = true;

        // Réinitialiser les messages d'erreur
        nomError.style.display = 'none';
        prenomError.style.display = 'none';
        emailError.style.display = 'none';
        telephoneError.style.display = 'none';
        filiereError.style.display = 'none';
        niveauEtudesError.style.display = 'none';

        // Validation des champs
        if (nom.value.trim() === "") {
            nomError.style.display = 'block';
            valid = false;
        }
        if (prenom.value.trim() === "") {
            prenomError.style.display = 'block';
            valid = false;
        }
        if (email.value.trim() === "" || !validateEmail(email.value)) {
            emailError.style.display = 'block';
            valid = false;
        }
        if (telephone.value.trim() === "") {
            telephoneError.style.display = 'block';
            valid = false;
        }
        if (filiere.value.trim() === "") {
            filiereError.style.display = 'block';
            valid = false;
        }
        if (niveauEtudes.value.trim() === "") {
            niveauEtudesError.style.display = 'block';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
