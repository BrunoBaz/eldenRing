import { Link } from "react-router-dom";

export const AmmoComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/ammo/${item.id}`} state={[item]}>
            <h2>{item.name}</h2>
          </Link>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.description} </p>
        </li>
      );
    })
  );
};
