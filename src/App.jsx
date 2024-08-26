import { createResource } from "solid-js";
import Card from "./components/Card";
import { getData } from "./services/fetch";

function App() {
  const [data] = createResource(getData);

  return (
    <div>
      <header>
        <h1>Pringles battle</h1>
      </header>
      <main
        style={{
          display: "flex",
          "justify-content": "space-between",
        }}
      >
        <Show when={data.loading}>
          <p>Loading...</p>
        </Show>
        <Switch>
          <Match when={data.error}>
            <span>Error: {data.error()}</span>
          </Match>
          <Match when={data()}>
            <For each={data()}>{(item) => <Card data={item} />}</For>
          </Match>
        </Switch>
      </main>
    </div>
  );
}

export default App;
