import { Suspense } from "react";

export const GenericListCard = ({ item, dataList, PageComponent }) => {
  return (
    <article className="listCard">
      <Suspense
        fallback={
          <img src="/images/logo.svg" alt="logo.svg" id="loading-logo" />
        }
      >
        <ul>
          {!item.length > 0 ? (
            <PageComponent items={dataList} />
          ) : (
            <PageComponent items={item} />
          )}
        </ul>
      </Suspense>
    </article>
  );
};
