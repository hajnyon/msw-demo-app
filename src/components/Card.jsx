export default function Card({ data }) {
  return (
    <section>
      <aside>
        <h2>{data.title}</h2>
        <img src={`/src/assets/${data.img}`} height="280" />
        <p>
          <button>Pick me ⬆️</button>
        </p>
      </aside>
    </section>
  );
}
