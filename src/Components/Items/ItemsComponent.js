import { Link } from "react-router-dom";

export const ItemsComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li>
          <Link to={`/items/${item.id}`} key={item.id} state={[item]}>
            <h2>{item.name} </h2>
          </Link>
          <p>{item.type}</p>
          <img src={item.image} alt={item.name} />
          <p>{item.description} </p>
          <h3>EFFECTS</h3>
          <p>{item.effect}</p>
        </li>
      );
    })
  );
};
