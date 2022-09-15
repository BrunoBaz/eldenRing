import { useEffect, useState } from "react";
import { capitalize } from "../helpers";

export const Searcher = ({ element, setItem, setActive, active }) => {
  const [searched, setSearched] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (searched !== "") {
      const searchedCapitalice = capitalize(searched);
      setItem(element.filter((elem) => elem.name.includes(searchedCapitalice)));
    }
  }, [element, searched, setItem]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      setSearched(e.target.search.value);
      if (active) {
        setActive(false);
      }
      e.target.reset();
    } catch (eror) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <fieldset>
        <label htmlFor="search">Buscar: </label>
        <input type="search" id="search" name="search" />
        <button type="search">Buscar</button>
      </fieldset>
    </form>
  );
};
