
    function filtrerMatin() {
        const rows = document.querySelectorAll('.apres-midi');
        rows.forEach(row => row.classList.add('hidden'));
    }


    function filtrerSoir() {
        const rows = document.querySelectorAll('.matin');
        rows.forEach(row => row.classList.add('hidden'));
    }

    function resetTable() {
        const rows = document.querySelectorAll('tr');
        rows.forEach(row => row.classList.remove('hidden'));
    }