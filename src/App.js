import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import "./App.css";
import { AmmoPage } from "./Pages/Ammo/AmmoPage";
import { ArmorPage } from "./Pages/Armors/ArmorPage";
import { AshesPage } from "./Pages/Ashes/AshesPage";
import { BossPage } from "./Pages/Bosses/BossPage";
import { ClassesPage } from "./Pages/Classes/ClassesPage";
import { MainPageList } from "./Pages/MainPageList";

import { IncantationsPage } from "./Pages/Incantations/IncantationsPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { ItemsPage } from "./Pages/Items/ItemsPage";
import { AmmoComponent } from "./Components/Ammo/AmmoComponent";
import { ArmorComponent } from "./Components/Armor/ArmorComponent";
import { GenericListCard } from "./Components/GenericListCard";
import { AshesComponent } from "./Components/Ashes/AshesComponent";
import { BossesComponent } from "./Components/Bosses/BossesComponent";
import { ClassesComponent } from "./Components/Classes/ClassesComponent";
import { IncantationsComponent } from "./Components/Incantations/IncantationsComponent";
import { ItemsComponent } from "./Components/Items/ItemsComponent";
import { LocationsComponent } from "./Components/Locations/LocationsComponent";
import { LocationsPage } from "./Pages/Locations/LocationsPage";
import { NPCsComponent } from "./Components/NPCs/NPCsComponent";
import { NPCsPage } from "./Pages/NPCs/NPCsPage";

import { SpiritsComponent } from "./Components/Spirits/SpiritsComponent";
import { SpiritsPage } from "./Pages/Spirits/SpiritsPage";
import { TalismansPage } from "./Pages/Talismans/TalismansPage";
import { TalismansComponent } from "./Components/Talismans/TalismansComponent";
import {
  useGetAllAmmo,
  useGetAllArmors,
  useGetAllAshes,
  useGetAllBosses,
  useGetAllClasses,
  useGetAllItems,
  useGetAllLocations,
  useGetAllNPCs,
  useGetAllSpells,
  useGetAllSpirits,
  useGetAllTalismans,
  useGetAllWeapons,
} from "./Hooks/useGetAllData";
import { WeaponsPage } from "./Pages/Weapons/WeaponsPage";
import { SelectedListCard } from "./Components/SelectedListCard";
import { WeaponsComponent } from "./Components/Weapons/WeaponsComponent";
import { Footer } from "./Components/Footer";
import { MainPage } from "./Pages/Main/MainPage";
import { Suspense } from "react";

function App() {
  const { classesList, loadingClasses, errorClasses } = useGetAllClasses();
  const { ammoList, loadingAmmo, errorAmmo } = useGetAllAmmo();
  const { allBosses, loadingBosses, errorBosses } = useGetAllBosses();
  const { allArmor, loadingArmors, errorArmors } = useGetAllArmors();
  const { ashesList, loadingAshes, errorAshes } = useGetAllAshes();

  const { spellsList, loadingSpells, errorSpells } = useGetAllSpells();
  const { allItems, loadingItems, errorItems } = useGetAllItems();
  const { allLocations, loadingLocations, errorLocations } =
    useGetAllLocations();
  const { NPCsList, loadingNPCs, errorNPCs } = useGetAllNPCs();
  // const { shieldsList, loadingShields, errorShields } = useGetAllShields();

  const { spiritsList, loadingSpirits, errorSpirits } = useGetAllSpirits();
  const { talismansList, loadingTalismans, errorTalismans } =
    useGetAllTalismans();
  const { allWeapons, loadingWeapons, errorWeapons } = useGetAllWeapons();

  return (
    <div className="App" id="App">
      <Header />
      <Suspense
        fallback={
          <img src="/images/logo.svg" alt="logo.svg" id="loading-logo" />
        }
      >
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/ammo"
              element={
                <MainPageList
                  title={"AMMO"}
                  allData={ammoList}
                  ListCard={GenericListCard}
                  PageComponent={AmmoComponent}
                  loading={loadingAmmo}
                  error={errorAmmo}
                />
              }
            />
            <Route path="/ammo/:id" element={<AmmoPage />} />
            <Route
              path="/armors"
              element={
                <MainPageList
                  title={"ARMORS"}
                  PageComponent={ArmorComponent}
                  allData={allArmor}
                  ListCard={SelectedListCard}
                  loading={loadingArmors}
                  error={errorArmors}
                />
              }
            />
            <Route path="/armors/:id" element={<ArmorPage />} />
            <Route
              path="/ashes"
              element={
                <MainPageList
                  title={"ASHES"}
                  allData={ashesList}
                  PageComponent={AshesComponent}
                  ListCard={GenericListCard}
                  loading={loadingAshes}
                  error={errorAshes}
                />
              }
            />
            <Route path="/ashes/:id" element={<AshesPage />} />
            <Route
              path="/bosses"
              element={
                <MainPageList
                  title={"BOSSES"}
                  allData={allBosses}
                  PageComponent={BossesComponent}
                  ListCard={GenericListCard}
                  loading={loadingBosses}
                  error={errorBosses}
                />
              }
            />
            <Route path="/bosses/:id" element={<BossPage />} />
            <Route
              path="/classes"
              element={
                <MainPageList
                  title={"CLASSES"}
                  allData={classesList}
                  PageComponent={ClassesComponent}
                  ListCard={GenericListCard}
                  loading={loadingClasses}
                  error={errorClasses}
                />
              }
            />
            <Route path="/classes/:id" element={<ClassesPage />} />
            {/*           <Route
            path="/creatures"
            element={
              <MainPageList
                title={"CREATURES"}
                allData={allCreatures}
                PageComponent={CreaturesComponent}
                ListCard={GenericListCard}
                loading={loadingCreatures}
                error={errorCreatures}
              />
            }
          />
          <Route path="/creatures/:id" element={<CreaturesPage />} /> */}
            <Route
              path="/spells"
              element={
                <MainPageList
                  title={"SPELLS"}
                  allData={spellsList}
                  PageComponent={IncantationsComponent}
                  ListCard={SelectedListCard}
                  loading={loadingSpells}
                  error={errorSpells}
                />
              }
            />
            <Route path="/spells/:id" element={<IncantationsPage />} />
            <Route
              path="/items"
              element={
                <MainPageList
                  title={"ITEMS"}
                  allData={allItems}
                  PageComponent={ItemsComponent}
                  ListCard={GenericListCard}
                  loading={loadingItems}
                  error={errorItems}
                />
              }
            />
            <Route path="/items/:id" element={<ItemsPage />} />
            <Route
              path="/locations"
              element={
                <MainPageList
                  title={"LOCATIONS"}
                  allData={allLocations}
                  PageComponent={LocationsComponent}
                  ListCard={GenericListCard}
                  loading={loadingLocations}
                  error={errorLocations}
                />
              }
            />
            <Route path="/locations/:id" element={<LocationsPage />} />{" "}
            <Route
              path="/npcs"
              element={
                <MainPageList
                  title={"NPCS"}
                  allData={NPCsList}
                  PageComponent={NPCsComponent}
                  ListCard={GenericListCard}
                  loading={loadingNPCs}
                  error={errorNPCs}
                />
              }
            />
            <Route path="/npcs/:id" element={<NPCsPage />} />{" "}
            <Route
              path="/spirits"
              element={
                <MainPageList
                  title={"SPIRITS"}
                  allData={spiritsList}
                  PageComponent={SpiritsComponent}
                  ListCard={GenericListCard}
                  loading={loadingSpirits}
                  error={errorSpirits}
                />
              }
            />
            <Route path="/spirits/:id" element={<SpiritsPage />} />{" "}
            <Route
              path="/talismans"
              element={
                <MainPageList
                  title={"TALISMANS"}
                  allData={talismansList}
                  PageComponent={TalismansComponent}
                  ListCard={GenericListCard}
                  loading={loadingTalismans}
                  error={errorTalismans}
                />
              }
            />
            <Route path="/talismans/:id" element={<TalismansPage />} />
            <Route
              path="/weapons"
              element={
                <MainPageList
                  title={"WEAPONS"}
                  PageComponent={WeaponsComponent}
                  allData={allWeapons}
                  ListCard={SelectedListCard}
                  loading={loadingWeapons}
                  error={errorWeapons}
                />
              }
            />
            <Route path="/weapons/:id" element={<WeaponsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
