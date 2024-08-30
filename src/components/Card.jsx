import { createSignal } from "solid-js";
import { wsSend, wsSubs } from "../services/ws";

export default function Card({ data }) {
  const [votes, setVotes] = createSignal(data.votes);

  wsSubs.push((wsData) => {
    if (data.id === wsData.id) {
      setVotes((prev) => prev + wsData.votesInc);
    }
  });

  return (
    <section>
      <aside>
        <h2>{data.title}</h2>
        <img src={`/src/assets/${data.img}`} height="280" />
        <h3 style={{ "text-align": "center" }}>👍 {votes()}</h3>
        <p>
          <button
            onClick={() => {
              wsSend({
                id: data.id,
                action: "INCREMENT",
              });
            }}
          >
            Pick me ⬆️
          </button>
        </p>
      </aside>
    </section>
  );
}
