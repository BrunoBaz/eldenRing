import { useLocation } from "react-router-dom";

export const ClassesPage = () => {
  const classes = useLocation().state[0];
  return (
    classes && (
      <section>
        <h2>{classes.name} </h2>
        <img src={classes.image} alt={classes.name} />
        <p>{classes.description} </p>
        <h3>Stats</h3>
        <ul>
          <li>
            <h3>arcane:</h3> <p>{classes.stats.arcane}</p>
          </li>
          <li>
            <h3>dexterity:</h3> <p>{classes.stats.dexterity}</p>
          </li>
          <li>
            <h3>endurance:</h3> <p>{classes.stats.endurance}</p>
          </li>
          <li>
            <h3>faith:</h3> <p>{classes.stats.faith}</p>
          </li>
          <li>
            <h3>intelligence:</h3> <p>{classes.stats.intelligence}</p>
          </li>
          <li>
            <h3>level:</h3> <p>{classes.stats.level}</p>
          </li>
          <li>
            <h3>mind:</h3> <p>{classes.stats.mind}</p>
          </li>
          <li>
            <h3>strength:</h3> <p>{classes.stats.strength}</p>
          </li>
          <li>
            <h3>vigor:</h3> <p>{classes.stats.vigor}</p>
          </li>
        </ul>
      </section>
    )
  );
};
