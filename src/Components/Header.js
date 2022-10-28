import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setActive(false);
  };
  return (
    <header className="header">
      <Link to="/">
        <h1>ELDEN RING COMPENDIUM</h1>
      </Link>
      <article
        className={active ? "toggle active" : "toggle"}
        onScroll={null}
        onClick={(e) => {
          setActive(!active);
        }}
      ></article>
      <nav id="navigation" className={active ? "active" : ""} onScroll={null}>
        <Link
          to="/ammo"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/ammo");
          }}
        >
          Ammo
        </Link>
        <Link
          to="/armors"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/armors");
          }}
        >
          Armors
        </Link>
        <Link
          to="/ashes"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/ashes");
          }}
        >
          Ashes
        </Link>
        <Link
          to="/bosses"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/bosses");
          }}
        >
          Bosses
        </Link>

        <Link
          to="/spells"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/spells");
          }}
        >
          Spells
        </Link>
        <Link
          to="/items"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/items");
          }}
        >
          Items
        </Link>
        <Link
          to="/locations"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/locations");
          }}
        >
          Locations
        </Link>
        <Link
          to="/npcs"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/npcs");
          }}
        >
          NPCs
        </Link>
        <Link
          to="/spirits"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/spirits");
          }}
        >
          Spirits
        </Link>
        <Link
          to="/talismans"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/talismans");
          }}
        >
          Talismans
        </Link>
        <Link
          to="/weapons"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            navigate("/weapons");
          }}
        >
          Weapons
        </Link>
      </nav>
    </header>
  );
};
