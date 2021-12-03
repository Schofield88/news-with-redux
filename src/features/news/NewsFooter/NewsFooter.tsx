import { FC } from "react";
import styles from "./NewsFooter.module.css";

const NewsFooter: FC = () => {
  return <button className={styles.moreNews}>More News</button>;
};

export { NewsFooter };
