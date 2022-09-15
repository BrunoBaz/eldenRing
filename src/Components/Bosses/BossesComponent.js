import { Link } from "react-router-dom";

export const BossesComponent = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/bosses/${item.id}`} state={[item]}>
            <h2>{item.name}</h2>{" "}
          </Link>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.description} </p>
          <h3>Drops</h3>
          <ul>
            {item.drops.map((drop, index) => {
              return <li key={index}>{drop}</li>;
            })}
          </ul>
        </li>
      );
    })
  );
};
