export const getData = async () => {
	const response = await fetch("/api/v1/data", { method: "GET" });
	return response.json();
};
