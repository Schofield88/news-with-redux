import { ChangeEvent, FC } from "react";
import styles from "./NewsHeader.module.css";
import { useDispatch, useSelector } from "../../../app/hooks";
import { changeNewsSource } from "../newsSlice";
import { getFilter, getSources } from "../newsSelectors";

const NewsHeader: FC = () => {
  const dispatch = useDispatch();
  const sources = useSelector(getSources);
  const filter = useSelector(getFilter);

  const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeNewsSource(event.currentTarget.value));
  };

  return (
    <div className={styles.flex}>
      <h1 className={styles.header}>
        The News with a totally unnecessary application of Redux
      </h1>
      <select
        className={styles.filter}
        name={"sourceFilter"}
        id={"sourceFilter"}
        value={filter}
        defaultValue="filterBySource"
        onChange={updateFilter}
      >
        <option value="filterBySource" disabled hidden>
          Filter By Source
        </option>
        <option value={""}>Show All</option>
        {sources.map((source: string) => (
          <option value={source}>{source}</option>
        ))}
      </select>
    </div>
  );
};

export { NewsHeader };
