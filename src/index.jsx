/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW !== "true") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  render(() => <App />, root);
});
