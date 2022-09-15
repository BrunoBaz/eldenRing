import { useEffect, useState } from "react";
import { links } from "../helpers";
import { getAllDataService } from "../Services/getAllDataService";

export const useGetAllAmmo = () => {
  const [ammoList, setAmmoList] = useState([]);
  const [loadingAmmo, setLoadingAmmo] = useState(true);
  const [errorAmmo, setErrorAmmo] = useState("");
  useEffect(() => {
    const getAmmos = async () => {
      try {
        setLoadingAmmo(true);
        const data = await getAllDataService(links.ammos);
        setAmmoList(data);
      } catch (error) {
        setErrorAmmo(error.message);
      } finally {
        setLoadingAmmo(false);
      }
    };
    getAmmos();
  }, []);
  return { ammoList, loadingAmmo, errorAmmo };
};
export const useGetAllArmors = () => {
  const [allArmor, setAllArmor] = useState([]);
  const [loadingArmors, setLoadingArmors] = useState(true);
  const [errorArmors, setErrorArmors] = useState("");
  useEffect(() => {
    const pages = [0, 1, 2, 3, 4, 5];
    const getArmors = async () => {
      try {
        setLoadingArmors(true);
        const data = pages.map(async (page) => {
          const armors = await getAllDataService(links.armors, page);
          return armors;
        });

        Promise.all(data).then((datos) => setAllArmor(datos.flat(Infinity)));
      } catch (error) {
        setErrorArmors(error.message);
      } finally {
        setLoadingArmors(false);
      }
    };
    getArmors();
  }, []);

  return {
    allArmor,
    loadingArmors,
    errorArmors,
  };
};
export const useGetAllAshes = () => {
  const [ashesList, setAshesList] = useState([]);
  const [loadingAshes, setLoadingAshes] = useState(true);
  const [errorAshes, setErrorAshes] = useState("");
  useEffect(() => {
    const getAmmos = async () => {
      try {
        setLoadingAshes(true);
        const data = await getAllDataService(links.ashes);
        setAshesList(data);
      } catch (error) {
        setErrorAshes(error.message);
      } finally {
        setLoadingAshes(false);
      }
    };
    getAmmos();
  }, []);
  return { ashesList, loadingAshes, errorAshes };
};

export const useGetAllBosses = () => {
  const [allBosses, setAllData] = useState([]);
  const [loadingBosses, setLoadingBosses] = useState(true);
  const [errorBosses, setErrorBosses] = useState("");
  useEffect(() => {
    const pages = [0, 1];
    const getBosses = async () => {
      try {
        setLoadingBosses(true);
        const data = pages.map(async (page) => {
          const armors = await getAllDataService(links.bosses, page);
          return armors;
        });

        Promise.all(data).then((datos) => setAllData(datos.flat(Infinity)));
      } catch (error) {
        setErrorBosses(error.message);
      } finally {
        setLoadingBosses(false);
      }
    };
    getBosses();
  }, []);

  return {
    allBosses,
    loadingBosses,
    errorBosses,
  };
};
export const useGetAllClasses = () => {
  const [classesList, setClassesList] = useState([]);
  const [loadingClasses, setLoadingClasses] = useState(true);
  const [errorClasses, setErrorClasses] = useState("");
  useEffect(() => {
    const getClasses = async () => {
      try {
        setLoadingClasses(true);
        const data = await getAllDataService(links.classes);
        setClassesList(data);
      } catch (error) {
        setErrorClasses(error.message);
      } finally {
        setLoadingClasses(false);
      }
    };
    getClasses();
  }, []);
  return { classesList, loadingClasses, errorClasses };
};

export const useGetAllSpells = () => {
  const [spellsList, setSpellsList] = useState([]);
  const [loadingSpells, setLoadingSpells] = useState(true);
  const [errorSpells, setErrorSpells] = useState("");

  useEffect(() => {
    const getSpells = async () => {
      try {
        setLoadingSpells(true);
        const dataSorceries = await getAllDataService(links.sorceries);
        const dataSpells = await getAllDataService(links.incantations);

        setSpellsList([...dataSorceries, ...dataSpells]);
      } catch (error) {
        setErrorSpells(error.message);
      } finally {
        setLoadingSpells(false);
      }
    };
    getSpells();
  }, []);
  return { spellsList, loadingSpells, errorSpells };
};
export const useGetAllItems = () => {
  const [allItems, setAllItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);
  const [errorItems, setErrorItems] = useState("");
  useEffect(() => {
    const pages = [0, 1, 2, 3, 4, 5];
    const getItems = async () => {
      try {
        setLoadingItems(true);
        const data = pages.map(async (page) => {
          const Items = await getAllDataService(links.items, page);
          return Items;
        });

        Promise.all(data).then((datos) => setAllItems(datos.flat(Infinity)));
      } catch (error) {
        setErrorItems(error.message);
      } finally {
        setLoadingItems(false);
      }
    };
    getItems();
  }, []);

  return {
    allItems,
    loadingItems,
    errorItems,
  };
};
export const useGetAllLocations = () => {
  const [allLocations, setAllData] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(true);
  const [errorLocations, setErrorLocations] = useState("");
  useEffect(() => {
    const pages = [0, 1];
    const getLocations = async () => {
      try {
        setLoadingLocations(true);
        const data = pages.map(async (page) => {
          const locations = await getAllDataService(links.locations, page);
          return locations;
        });

        Promise.all(data).then((datos) => setAllData(datos.flat(Infinity)));
      } catch (error) {
        setErrorLocations(error.message);
      } finally {
        setLoadingLocations(false);
      }
    };
    getLocations();
  }, []);

  return {
    allLocations,
    loadingLocations,
    errorLocations,
  };
};

export const useGetAllNPCs = () => {
  const [NPCsList, setNPCsList] = useState([]);
  const [loadingNPCs, setLoadingNPCs] = useState(true);
  const [errorNPCs, setErrorNPCs] = useState("");
  useEffect(() => {
    const getNPCs = async () => {
      try {
        setLoadingNPCs(true);
        const data = await getAllDataService(links.npcs);
        setNPCsList(data);
      } catch (error) {
        setErrorNPCs(error.message);
      } finally {
        setLoadingNPCs(false);
      }
    };
    getNPCs();
  }, []);
  return { NPCsList, loadingNPCs, errorNPCs };
};

export const useGetAllSpirits = () => {
  const [spiritsList, setSpiritsList] = useState([]);
  const [loadingSpirits, setLoadingSpirits] = useState(true);
  const [errorSpirits, setErrorSpirits] = useState("");
  useEffect(() => {
    const getSpirits = async () => {
      try {
        setLoadingSpirits(true);
        const data = await getAllDataService(links.spirits);
        setSpiritsList(data);
      } catch (error) {
        setErrorSpirits(error.message);
      } finally {
        setLoadingSpirits(false);
      }
    };
    getSpirits();
  }, []);
  return { spiritsList, loadingSpirits, errorSpirits };
};
export const useGetAllTalismans = () => {
  const [talismansList, setTalismansList] = useState([]);
  const [loadingTalismans, setLoadingTalismans] = useState(true);
  const [errorTalismans, setErrorTalismans] = useState("");
  useEffect(() => {
    const getTalismans = async () => {
      try {
        setLoadingTalismans(true);
        const data = await getAllDataService(links.talismans);
        setTalismansList(data);
      } catch (error) {
        setErrorTalismans(error.message);
      } finally {
        setLoadingTalismans(false);
      }
    };
    getTalismans();
  }, []);
  return { talismansList, loadingTalismans, errorTalismans };
};

export const useGetAllWeapons = () => {
  const [allWeapons, setAllWeapons] = useState([]);
  const [loadingWeapons, setLoadingWeapons] = useState(true);
  const [errorWeapons, setErrorWeapons] = useState("");
  useEffect(() => {
    const pages = [0, 1, 2, 3, 4, 5];
    const getWeapons = async () => {
      try {
        setLoadingWeapons(true);
        const dataweapons = pages.map(async (page) => {
          const weapons = await getAllDataService(links.weapons, page);

          return weapons;
        });
        const shields = await getAllDataService(links.shields);

        Promise.all(dataweapons).then((datos) =>
          setAllWeapons([...datos.flat(Infinity), ...shields])
        );
      } catch (error) {
        setErrorWeapons(error.message);
      } finally {
        setLoadingWeapons(false);
      }
    };
    getWeapons();
  }, []);

  return {
    allWeapons,
    loadingWeapons,
    errorWeapons,
  };
};
