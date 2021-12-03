import { FC } from "react";
import styles from "./NewsHeader.module.css";

const NewsHeader: FC = () => {
  return (
    <div className={styles.flex}>
      <h1 className={styles.header}>
        The News with a totally unnecessary application of Redux
      </h1>
      <select
        className={styles.filter}
        name={"sourceFilter"}
        id={"sourceFilter"}
        defaultValue="filterBySource"
      >
        <option value="filterBySource" disabled hidden>
          Filter By Source
        </option>
        <option>The Daily Planet</option>
        <option>The Gotham Times</option>
      </select>
    </div>
  );
};

export { NewsHeader };
