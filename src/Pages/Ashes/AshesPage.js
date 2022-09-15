import { useLocation } from "react-router-dom";

export const AshesPage = () => {
  const ashes = useLocation().state[0];
  console.log(ashes);
  return (
    ashes && (
      <section className="singlepage">
        <h2>{ashes.name} </h2>
        <h3>AFFINITY</h3>
        <p>{ashes.affinity} </p>
        <img src={ashes.image} alt={ashes.name} />
        <p>{ashes.description} </p>
        <h3>SKILL</h3>
        <p>{ashes.skill} </p>
      </section>
    )
  );
};
