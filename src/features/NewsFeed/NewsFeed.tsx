import { FC } from "react";
import styles from "./NewsFeed.module.css";

const NewsFeed: FC = () => {
  return (
    <div className={styles.someNews}>
      <div>This is the title</div>
      <div className={styles.flex}>
        <div className={styles.date}>Date goes here</div>
        <div className={styles.source}>Source will be here</div>
      </div>
    </div>
  );
};

export { NewsFeed };
