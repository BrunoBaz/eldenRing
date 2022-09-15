import { Link } from "react-router-dom";

export const CreaturesComponent = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/creatures/${item.id}`} state={[item]}>
            <h2>{item.name}</h2>
          </Link>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.description} </p>
          <h3>Drops</h3>
          <ul>
            {item.drops !== undefined &&
              item.drops.map((drops, index) => (
                <li key={index}>{drops !== "" && drops}</li>
              ))}
          </ul>
        </li>
      );
    })
  );
};
