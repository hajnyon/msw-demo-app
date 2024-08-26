export default function Card({ data }) {
  return (
    <section>
      <h2>{data.title}</h2>
      <img src={`/src/assets/${data.img}`} width="120" />
    </section>
  );
}
