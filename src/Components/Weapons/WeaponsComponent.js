import { Link } from "react-router-dom";

export const WeaponsComponent = ({ items }) => {
  try {
    return (
      items &&
      items.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/weapons/${item.id}`} state={[item]}>
              <h2>{item.name} </h2>
            </Link>
            <p>{item.category}</p>
            {item.image && <img src={item.image} alt={item.name} />}
            <p>{item.description} </p>
            <h3>WEIGHT</h3>
            <p>{item.weight} </p>
          </li>
        );
      })
    );
  } finally {
    items = [];
  }
};
