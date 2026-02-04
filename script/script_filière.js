function rechercher() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let zoneContenu = document.getElementById('contenuPage');
        
        // On cible les paragraphes, les titres ET les lignes de tableau (tr)
    let elements = zoneContenu.querySelectorAll('p, h2, tr, section');

    elements.forEach(el => {
        let texte = el.textContent.toLowerCase();
            
            // Pour ne pas cacher les titres des colonnes du tableau (Nom, Description...)
        if (el.rowIndex === 0) return; 

        if (texte.includes(input)) {
            el.style.display = ""; 
                // Optionnel : surlignage
            if (input !== "" && !el.tagName.includes('SECTION')) {
                el.style.backgroundColor = "#ffffcc";
            } else {
                el.style.backgroundColor = "";
                    }
        } else {
                // On cache l'élément s'il ne contient pas le mot
                el.style.display = "none";
        }
    });
}