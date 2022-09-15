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
        <Link to="/ammo" onClick={handleClick}>
          Ammo
        </Link>
        <Link to="/armors" onClick={handleClick}>
          Armors
        </Link>
        <Link to="/ashes" onClick={handleClick}>
          Ashes
        </Link>
        <Link to="/bosses" onClick={handleClick}>
          Bosses
        </Link>

        <Link to="/spells" onClick={handleClick}>
          Spells
        </Link>
        <Link to="/items" onClick={handleClick}>
          Items
        </Link>
        <Link to="/locations" onClick={handleClick}>
          Locations
        </Link>
        <Link to="/npcs" onClick={handleClick}>
          NPCs
        </Link>
        <Link to="/spirits" onClick={handleClick}>
          Spirits
        </Link>
        <Link to="/talismans" onClick={handleClick}>
          Talismans
        </Link>
        <Link to="/weapons" onClick={handleClick}>
          Weapons
        </Link>
      </nav>
    </header>
  );
};
