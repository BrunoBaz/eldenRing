import { AshesComponent } from "./AshesComponent";

export const AshesListCard = ({ item, dataList }) => {
  return (
    <article>
      <ul>
        {!item.length > 0 ? (
          <AshesComponent items={dataList} />
        ) : (
          <AshesComponent items={item} />
        )}
      </ul>
    </article>
  );
};
