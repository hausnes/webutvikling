async function fetchData() {
    const response = await fetch('http://localhost:3000/api/fjell_info');
    const data = await response.json();
    console.log(data);
    
    // Her kan du gjøre noe med dataen (vise det frem)
    for (let fjell of data) {
        let fjellDiv = document.createElement('div');
        fjellDiv.classList.add('fjell');
        fjellDiv.innerHTML = `
            <h3>${fjell.fjellnavn}</h3>
            <p>Høyde: ${fjell.hoyde} meter</p>
            <p>Beskrivelse: ${fjell.beskrivelse}</p>
            <img src="/bilder/${fjell.foto}" alt="${fjell.fjellnavn}">
        `;
        document.body.appendChild(fjellDiv);
    }
}

fetchData();