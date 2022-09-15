import { Link } from "react-router-dom";

export const SorceriesComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/sorceries/${item.id}`} state={[item]}>
            <h2>{item.name} </h2>
          </Link>
          <p>{item.type}</p>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.description} </p>
          <h3>EFFECTS</h3>
          <p>{item.effects}</p>
          <h3>SLOTS</h3>
          <p>{item.slots}</p>
        </li>
      );
    })
  );
};
