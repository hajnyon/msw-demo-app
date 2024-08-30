import { http, HttpResponse, passthrough, ws } from "msw";
import { setupWorker } from "msw/browser";

const mockData = [
	{ id: 1, votes: 1, title: "Cocktail Sauce", img: "cocktail-sauce.png" },
	{ id: 2, votes: 5, title: "Roasted Potatoes", img: "roasted-potatoes.png" },
];

const wsLink = ws.link("ws://localhost:8080");

export const worker = setupWorker(
	http.get("*.png", () => {
		return passthrough();
	}),

	http.get("/api/v1/data", () => HttpResponse.json(mockData)),

	wsLink.on("connection", ({ client }) => {
		client.addEventListener("message", (event) => {
			const data = JSON.parse(event.data);
			if (data.action === "INCREMENT") {
				const mockedResponse = {
					id: data.id,
					votesInc: 1,
				};
				if (data.id === 1) {
					mockedResponse.votesInc = 2;
				}
				client.send(JSON.stringify(mockedResponse));
			}
		});
	}),
);
