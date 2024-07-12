function verif1()
{
      // Récupérer les valeurs des champs du formulaire
      const nom = document.getElementById('nom').value;
      const prenom = document.getElementById('prenom').value;
      const email = document.getElementById('email').value;
      const filiere = document.getElementById('filiere').value;
      const niveau_etudes = document.getElementById('niveau_etudes').value;
      
      // Vérification simple des champs
      if (nom === "" || prenom === "" || email === "" || filiere === "" || niveau_etudes === "") {
          alert("Tous les champs doivent être remplis");
          return false;
      }
      
      // Vérification de l'email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
          alert("Veuillez entrer une adresse email valide");
          return false;
      }
  
      // Vérification du téléphone (doit contenir seulement des chiffres)
      const phonePattern = /^[0-9]+$/;
      if (!phonePattern.test(telephone)) {
          alert("Veuillez entrer un numéro de téléphone valide");
          return false;
      }
  
      // Si toutes les vérifications passent, soumettre le formulaire
      return true;
}