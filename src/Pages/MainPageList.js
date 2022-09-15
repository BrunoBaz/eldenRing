import { useState } from "react";
import { Loading } from "../Components/Loading";
import { Searcher } from "../Components/Searcher";

export const MainPageList = ({
  title,
  allData,
  ListCard,
  loading,
  PageComponent,
  error,
}) => {
  const [active, setActive] = useState(false);
  let [item, setItem] = useState([]);
  return (
    <section className="sectionListCard">
      <h1>{title}</h1>
      <Searcher
        element={allData}
        setItem={setItem}
        setActive={setActive}
        active={active}
      />
      {loading && <Loading />}
      {!loading && !error && (
        <ListCard
          item={item}
          dataList={allData}
          PageComponent={PageComponent}
          setActive={setActive}
          active={active}
        />
      )}
    </section>
  );
};
