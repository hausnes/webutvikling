// Lar brukeren kunne logge ut
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', async () => {
    const response = await fetch('/api/logout', {
        method: 'POST'
    });
    if (response.ok) {
        window.location.href = '/';
    }
    else {
        alert('Noe gikk galt ved utlogging');
    }
});

//  Viser persondataene på "Min side"  
async function hentBrukerData() {
    const response = await fetch('/api/minside');
    if (response.ok) {
        const data = await response.json();
        const brukerDataDiv = document.getElementById('brukerData');
        brukerDataDiv.innerHTML = `
            <p>ID: ${data.bruker.id}</p>
            <p>Fornavn: ${data.bruker.fornavn}</p>
            <p>Etternavn: ${data.bruker.etternavn}</p>
            <p>Passord: ${data.bruker.passord}</p>
            <p>Rolle: ${data.bruker.rolle}</p>
        `;

        // Vis ekstra seksjoner basert på rolle
        if (data.bruker.rolle === 'admin') {
            hentAdminData();
        } else if (data.bruker.rolle === 'support') {
            hentSupportData();
        }
    } else {
        alert('Kunne ikke hente brukerdata');
    }
}

// Admin: henter all informasjon om alle brukere
async function hentAdminData() {
    const response = await fetch('/api/admin/brukere');
    if (response.ok) {
        const data = await response.json();
        const adminSeksjon = document.getElementById('adminSeksjon');
        const adminData = document.getElementById('adminData');
        adminSeksjon.style.display = 'block';

        const rader = data.brukere.map(b => `
            <tr>
                <td>${b.id}</td>
                <td>${b.fornavn}</td>
                <td>${b.etternavn}</td>
                <td>${b.passord}</td>
                <td>${b.rolle}</td>
            </tr>
        `).join('');

        adminData.innerHTML = `
            <table border="1">
                <thead>
                    <tr><th>ID</th><th>Fornavn</th><th>Etternavn</th><th>Passord</th><th>Rolle</th></tr>
                </thead>
                <tbody>${rader}</tbody>
            </table>
        `;
    } else {
        alert('Kunne ikke hente admin-data');
    }
}

// Support: henter kun fornavn og etternavn for alle brukere
async function hentSupportData() {
    const response = await fetch('/api/support/brukere');
    if (response.ok) {
        const data = await response.json();
        const supportSeksjon = document.getElementById('supportSeksjon');
        const supportData = document.getElementById('supportData');
        supportSeksjon.style.display = 'block';

        const rader = data.brukere.map(b => `
            <tr>
                <td>${b.fornavn}</td>
                <td>${b.etternavn}</td>
            </tr>
        `).join('');

        supportData.innerHTML = `
            <table border="1">
                <thead>
                    <tr><th>Fornavn</th><th>Etternavn</th></tr>
                </thead>
                <tbody>${rader}</tbody>
            </table>
        `;
    } else {
        alert('Kunne ikke hente support-data');
    }
}

hentBrukerData();