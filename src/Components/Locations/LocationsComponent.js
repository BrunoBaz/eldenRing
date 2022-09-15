import { Link } from "react-router-dom";

export const LocationsComponent = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/locations/${item.id}`} key={item.id} state={[item]}>
            <h2>{item.name}</h2>
          </Link>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.description} </p>
          <h3>REGION: </h3>
          <p>{item.region}</p>
        </li>
      );
    })
  );
};
