const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Autoritativ state som holdes på serveren
const state = {
	totalClicks: 0,
	players: {}, // Struktur: { socketId: { name: string, clicks: number } }
};

// Hjelpefunksjon for å normalisere og validere spillernavn
function normalizeName(rawName) {
	const cleaned = String(rawName || "").trim().slice(0, 24);
	return cleaned || "Spiller";
}

// Konverterer intern state til en form som er trygg å sende til klientene
function getPublicState() {
	const players = Object.entries(state.players)
		.map(([id, player]) => ({
			id,
			name: player.name,
			clicks: player.clicks,
		}))
		.sort((a, b) => b.clicks - a.clicks || a.name.localeCompare(b.name));

	return {
		totalClicks: state.totalClicks,
		players,
	};
}

app.use(express.static(path.join(__dirname, "public")));

// Socket.IO-hendelser
io.on("connection", (socket) => { // Ny klient kobler til
	state.players[socket.id] = {
		name: "Spiller",
		clicks: 0,
	};

	socket.emit("state", getPublicState()); // Send initial state til ny tilkoblet klient

	socket.on("set-name", (name) => { // Oppdater spillerens navn
		if (!state.players[socket.id]) {
			return;
		}

		state.players[socket.id].name = normalizeName(name);
		io.emit("state", getPublicState()); // Oppdater alle klienter med ny state
	});

	socket.on("increment", () => { // Øk antall klikk for den tilkoblede spilleren
		if (!state.players[socket.id]) {
			return;
		}

		state.totalClicks += 1;
		state.players[socket.id].clicks += 1;
		io.emit("state", getPublicState()); // Oppdater alle klienter med ny state
	});

	socket.on("disconnect", () => { // Fjern spilleren fra state når de kobler fra
		delete state.players[socket.id];
		io.emit("state", getPublicState());
	});
});

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
