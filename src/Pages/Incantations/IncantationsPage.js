import { useLocation } from "react-router-dom";

export const IncantationsPage = () => {
  const incantation = useLocation().state[0];
  return (
    incantation && (
      <section className="singlepage">
        <h2>{incantation.name} </h2>
        <p>{incantation.type}</p>
        {incantation.image && (
          <img src={incantation.image} alt={incantation.name} />
        )}
        <p>{incantation.description} </p>
        <h3>EFFECTS</h3>
        <p>{incantation.effects}</p>
        <p>COST: {incantation.cost}</p>
        <h3>REQUIRES</h3>
        <ul>
          {incantation.requires !== null &&
            incantation.requires.map((require, index) => (
              <li key={index}>
                {require.name}-----------{require.amount}
              </li>
            ))}
        </ul>
        <h3>SLOTS</h3>
        <p>{incantation.slots}</p>
      </section>
    )
  );
};
