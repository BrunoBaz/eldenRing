import { Link } from "react-router-dom";

export const AshesComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/ashes/${item.id}`} state={[item]}>
            <h2>{item.name} </h2>
          </Link>

          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.description} </p>
          <h3>Affinity</h3>
          <p>{item.affinity} </p>
          <h3>SKILL</h3>
          <p>{item.skill} </p>
        </li>
      );
    })
  );
};
