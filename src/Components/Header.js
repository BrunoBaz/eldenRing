import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(false);
  };
  return (
    <header className="header">
      <h1>ELDEN RING COMPENDIUM</h1>
      <article
        className={active ? "toggle active" : "toggle"}
        onScroll={null}
        onClick={(e) => {
          setActive(!active);
        }}
      ></article>
      <nav id="navigation" className={active ? "active" : ""} onScroll={null}>
        <Link to="/ammo">Ammo</Link>
        <Link to="/armors">Armors</Link>
        <Link to="/ashes">Ashes</Link>
        <Link to="/bosses">Bosses</Link>

        <Link to="/spells">Spells</Link>
        <Link to="/items">Items</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/npcs">NPCs</Link>
        <Link to="/spirits">Spirits</Link>
        <Link to="/talismans">Talismans</Link>
        <Link to="/weapons">Weapons</Link>
      </nav>
    </header>
  );
};
