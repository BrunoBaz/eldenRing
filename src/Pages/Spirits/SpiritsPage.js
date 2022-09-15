import { useLocation } from "react-router-dom";

export const SpiritsPage = () => {
  const spirit = useLocation().state[0];
  return (
    spirit && (
      <section className="singlepage">
        <h2>{spirit.name}</h2>
        {spirit.image && <img src={spirit.image} alt={spirit.name} />}
        <p>{spirit.description} </p>
        <article>
          <h3>COST:</h3>
          <p>HP: {spirit.hpCost}</p>
          <p>FP: {spirit.fpCost}</p>
        </article>{" "}
        <article>
          <h3>EFFECT:</h3>
          <p>{spirit.effect}</p>
        </article>
      </section>
    )
  );
};
