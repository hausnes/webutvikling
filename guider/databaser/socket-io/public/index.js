const socket = io();

const totalClicksEl = document.getElementById("totalClicks");
const playersListEl = document.getElementById("playersList");
const cookieBtn = document.getElementById("cookieBtn");
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");

function renderPlayers(players) { // Rendrer listen over spillere i UI
	if (!Array.isArray(players) || players.length === 0) {
		playersListEl.innerHTML = "<li>Ingen spillere enda.</li>";
		return;
	}

	playersListEl.innerHTML = players
		.map((player) => `<li><span>${player.name}</span><strong>${player.clicks}</strong></li>`)
		.join("");
}

socket.on("state", (state) => { // Oppdater UI når vi mottar ny state fra serveren
	totalClicksEl.textContent = state.totalClicks;
	renderPlayers(state.players);
});

cookieBtn.addEventListener("click", () => {
	socket.emit("increment"); // Send "increment" til serveren når knappen klikkes
});

function submitName() {
	socket.emit("set-name", nameInput.value); // Send "set-name" med navnet til serveren når knappen klikkes
}

saveNameBtn.addEventListener("click", submitName);
nameInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		submitName();
	}
});
