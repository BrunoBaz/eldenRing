import { Link } from "react-router-dom";

export const NPCsComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/npcs/${item.id}`} state={[item]}>
            <h2>{item.name}</h2>
          </Link>
          <img src={item.image} alt={item.name} />
          <p>{item.role} </p>
          <p>{item.location} </p>
        </li>
      );
    })
  );
};
