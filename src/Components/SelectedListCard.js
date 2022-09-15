import { useEffect, useState } from "react";

export const SelectedListCard = ({
  item,
  dataList,
  setActive,
  active,
  PageComponent,
}) => {
  const [allCategories, setCategories] = useState([]);
  let [selected, setSelected] = useState(allCategories[0]);

  const [data, setData] = useState([]);
  useEffect(() => {
    const categories = dataList.map((category) =>
      category.category ? category.category : category.type
    );

    const simpleCategory = categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
    simpleCategory.unshift("Default");
    setCategories(simpleCategory);

    setData(
      dataList.filter((data) =>
        data.category
          ? selected === data.category && data
          : selected === data.type && data
      )
    );
  }, [dataList, setData, selected]);

  return (
    <>
      <select
        name="select"
        onChange={(e) => {
          e.preventDefault();
          setSelected(e.target.value);
          setActive(true);
        }}
      >
        {allCategories.map((category, index) => {
          return (
            <option value={category} key={index} defaultValue={category}>
              {category}
            </option>
          );
        })}
      </select>
      <article className="listCard">
        <ul>
          {active
            ? data && <PageComponent items={data} />
            : item && <PageComponent items={item} />}
        </ul>
      </article>
    </>
  );
};
