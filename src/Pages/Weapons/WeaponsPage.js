import { useLocation } from "react-router-dom";

export const WeaponsPage = () => {
  const item = useLocation().state[0];
  return (
    item && (
      <section className="singlepage">
        <h2>{item.name} </h2>
        <h3>CATEGORY</h3>
        <p>{item.category} </p>
        <img src={item.image} alt={item.name} />
        <p>{item.description} </p>
        <article>
          <h3>ATTACK</h3>
          {item.attack.map((attack, index) => {
            return (
              <p key={index}>
                {attack.name}------------{attack.amount}
              </p>
            );
          })}
        </article>
        <article>
          <h3>DEFENCE</h3>
          {item.defence.map((defence, index) => {
            return (
              <p key={index}>
                {defence.name}------------{defence.amount}
              </p>
            );
          })}
        </article>
        <article>
          <h3>REQUIRED ATTRIBUTES</h3>
          {item.requiredAttributes.map((attribute, index) => {
            return (
              <p key={index}>
                {attribute.name}------------{attribute.amount}
              </p>
            );
          })}
        </article>{" "}
        <article>
          <h3>SCALES WITH: </h3>
          {item.scalesWith.map((scales, index) => {
            return (
              <p key={index}>
                {scales.name}------------{scales.scaling}
              </p>
            );
          })}
        </article>
        <h3>Weight</h3>
        <p>{item.weight} </p>
      </section>
    )
  );
};
