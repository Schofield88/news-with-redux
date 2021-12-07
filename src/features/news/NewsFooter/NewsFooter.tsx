import { FC } from "react";
import styles from "./NewsFooter.module.css";
import { useDispatch } from "../../../app/hooks";
import { showMoreArticles } from "../newsSlice";

const NewsFooter: FC = () => {
  const dispatch = useDispatch();

  const clickTheButton = () => {
    dispatch(showMoreArticles());
  };

  return (
    <button onClick={clickTheButton} className={styles.moreNews}>
      More News
    </button>
  );
};

export { NewsFooter };
