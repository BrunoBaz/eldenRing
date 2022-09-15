import { useLocation } from "react-router-dom";

export const AmmoPage = () => {
  const ammo = useLocation().state[0];
  console.log(ammo);
  return (
    ammo && (
      <section className="singlepage">
        <h2>{ammo.name} </h2>

        <h3>TYPE</h3>
        <p>{ammo.type} </p>
        <img src={ammo.image} alt={ammo.name} />
        <p>{ammo.description} </p>
        <article>
          <h3>ATTACK POWER</h3>
          {ammo.attackPower.map((attack, index) => {
            return (
              <p key={index}>
                {attack.name}------------{attack.amount}
              </p>
            );
          })}
        </article>
        <h3>PASSIVE</h3>
        <p>{ammo.passive} </p>
      </section>
    )
  );
};
