import { useLocation } from "react-router-dom";

export const LocationsPage = () => {
  const location = useLocation().state[0];
  return (
    location && (
      <section className="singlepage">
        <h2>{location.name}</h2>
        {location.image && <img src={location.image} alt={location.name} />}
        <p>{location.description} </p>
        <h3>REGION: </h3>
        <p>{location.region}</p>
      </section>
    )
  );
};
