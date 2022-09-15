import { useLocation } from "react-router-dom";

export const BossPage = () => {
  const bosses = useLocation().state[0];
  return (
    bosses && (
      <section className="singlepage">
        <h2>{bosses.name} </h2>
        <h3>LIFE</h3>
        <p>{bosses.healthPoints} </p>
        <img src={bosses.image} alt={bosses.name} />
        <p>{bosses.description} </p>
        <h3>DROPS</h3>
        <ul>
          {bosses.drops.map((drop, index) => {
            return <li key={index}>{drop}</li>;
          })}
        </ul>
        <h3>LOCATION</h3>
        <p>
          {bosses.location}, {bosses.region}{" "}
        </p>
      </section>
    )
  );
};
