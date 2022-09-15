import { useLocation } from "react-router-dom";

export const NPCsPage = () => {
  const npc = useLocation().state[0];
  return (
    npc && (
      <section className="singlepage">
        <h2>{npc.name}</h2>
        <img src={npc.image} alt={npc.name} />
        <p>{npc.role} </p>
        <p>{npc.location} </p>
        {npc.quote !== null && npc.quote}
      </section>
    )
  );
};
