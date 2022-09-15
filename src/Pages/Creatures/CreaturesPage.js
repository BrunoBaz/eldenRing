import { useLocation } from "react-router-dom";

export const CreaturesPage = () => {
  const creature = useLocation().state[0];
  return (
    creature && (
      <section>
        <h2>{creature.name}</h2>
        {creature.image && <img src={creature.image} alt={creature.name} />}
        <p>{creature.description} </p>
        <h3>Drops</h3>
        <ul>
          {creature.drops !== undefined &&
            creature.drops.map((drops, index) => (
              <li key={index}>{drops !== "" && drops}</li>
            ))}
        </ul>
        <h3>Location</h3>
        <p>{creature.location}</p>
      </section>
    )
  );
};
