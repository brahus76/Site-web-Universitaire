function validateForm(event) {
    // Bloque l'envoi par défaut pour vérifier les champs
    event.preventDefault(); 
    
    // Réinitialisation des styles et messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.style.border = '1px solid #ccc');
    document.getElementById('success-message').textContent = '';
    
    let isValid = true;
    
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (nom === '') { displayError('nom', 'Le nom est obligatoire.'); isValid = false; }
    if (email === '') { displayError('email', "L'email est obligatoire."); isValid = false; }
    if (sujet === '') { displayError('sujet', 'Le sujet est obligatoire.'); isValid = false; }
    if (message === '') { displayError('message', 'Le message est obligatoire.'); isValid = false; }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email !== '' && !emailPattern.test(email)) {
        displayError('email', "Veuillez entrer une adresse email valide.");
        isValid = false;
    }
    
    if (isValid) {
        // Affiche un message et déclenche l'action mailto du HTML
        document.getElementById('success-message').textContent = "Patientez... Ouverture de votre messagerie.";
        event.target.submit(); 
    }
}

function displayError(fieldId, message) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = message;
    }
    document.getElementById(fieldId).style.border = '2px solid red';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});