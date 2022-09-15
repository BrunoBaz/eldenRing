import { useLocation } from "react-router-dom";

export const SorceriesPage = () => {
  const sorcery = useLocation().state[0];
  return (
    sorcery && (
      <section className="singlepage">
        <h2>{sorcery.name} </h2>
        <p>{sorcery.type}</p>
        {sorcery.image && <img src={sorcery.image} alt={sorcery.name} />}
        <p>{sorcery.description} </p>
        <h3>EFFECTS</h3>
        <p>{sorcery.effects}</p>
        <p>COST: {sorcery.cost}</p>
        <h3>REQUIRES</h3>
        <ul>
          {sorcery.requires !== null &&
            sorcery.requires.map((require, index) => (
              <li key={index}>
                {require.name}-----------{require.amount}
              </li>
            ))}
        </ul>
        <h3>SLOTS</h3>
        <p>{sorcery.slots}</p>
      </section>
    )
  );
};
