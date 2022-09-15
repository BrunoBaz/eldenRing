export const GenericListCard = ({ item, dataList, PageComponent }) => {
  return (
    <article className="listCard">
      <ul>
        {!item.length > 0 ? (
          <PageComponent items={dataList} />
        ) : (
          <PageComponent items={item} />
        )}
      </ul>
    </article>
  );
};
