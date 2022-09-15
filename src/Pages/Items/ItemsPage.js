import { useLocation } from "react-router-dom";

export const ItemsPage = () => {
  const item = useLocation().state[0];
  return (
    item && (
      <section className="singlepage">
        <h2>{item.name} </h2>
        <p>{item.type}</p>
        {item.image && <img src={item.image} alt={item.name} />}
        <p>{item.description} </p>
        <h3>EFFECTS</h3>
        <p>{item.effect}</p>
      </section>
    )
  );
};
