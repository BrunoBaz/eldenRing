import { useLocation } from "react-router-dom";

export const TalismansPage = () => {
  const talisman = useLocation().state[0];
  return (
    talisman && (
      <section className="singlepage">
        <h2>{talisman.name}</h2>
        {talisman.image && <img src={talisman.image} alt={talisman.name} />}
        <p>{talisman.description} </p>
        <article>
          <h3>EFFECT:</h3>
          <p>{talisman.effect}</p>
        </article>
      </section>
    )
  );
};
