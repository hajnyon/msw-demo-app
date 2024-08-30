let webSocket = null;

export const wsSubs = [];

export const initWs = () => {
	webSocket = new WebSocket("ws://localhost:8080");
	webSocket.addEventListener("error", (ev) => {
		console.error(ev);
	});
	webSocket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		for (const sub of wsSubs) {
			sub(data);
		}
	};
};

export const wsSend = (data) => {
	webSocket.send(JSON.stringify(data));
};
