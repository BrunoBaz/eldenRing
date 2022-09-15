import { Link } from "react-router-dom";

export const ClassesComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li>
          <Link to={`/classes/${item.id}`} key={item.id} state={[item]}>
            <h2>{item.name}</h2>
          </Link>
          <img src={item.image} alt={item.name} />
          <p>{item.description} </p>
        </li>
      );
    })
  );
};
