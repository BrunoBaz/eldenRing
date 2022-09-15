import { useLocation } from "react-router-dom";

export const ArmorPage = () => {
  const item = useLocation().state[0];
  return (
    item && (
      <section className="singlepage">
        <h2>{item.name} </h2>
        <h3>CATEGORY</h3>
        <p>{item.category} </p>

        <img src={item.image} alt={item.name} />
        <p>{item.description} </p>
        <h3>WEIGHT</h3>
        <p>{item.weight} </p>
        <article className="resistance">
          <article>
            <h3>DAMAGE NEGATION</h3>
            {item.dmgNegation.map((negation, index) => {
              return (
                <p key={index}>
                  {negation.name}------------{negation.amount}
                </p>
              );
            })}
          </article>
          <article>
            <h3>RESTISTANCE</h3>
            {item.resistance.map((negation, index) => {
              return (
                <p key={index}>
                  {negation.name}------------{negation.amount}
                </p>
              );
            })}
          </article>
        </article>
      </section>
    )
  );
};
