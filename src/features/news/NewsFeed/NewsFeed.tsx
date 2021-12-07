import { FC } from "react";
import styles from "./NewsFeed.module.css";
import { Article } from "../../../api/newsTypes";
import { useSelector } from "../../../app/hooks";
import { getArticles, getFilter } from "../newsSelectors";

const NewsPiece: FC<{ article: Article }> = ({ article }) => {
  const {
    title,
    publishedAt,
    url,
    source: { name },
  } = article;

  return (
    <div className={styles.someNews}>
      <a href={url}>{title}</a>
      <div className={styles.flex}>
        <div className={styles.date}>
          {new Date(publishedAt).toDateString()}
        </div>
        <div className={styles.source}>{name}</div>
      </div>
    </div>
  );
};

const NewsFeed: FC = () => {
  const store = useSelector((state) => state.news);
  console.log("store: ", store);
  const filter = useSelector(getFilter);
  const articles = useSelector(getArticles);

  const filteredArticles = filter
    ? articles.filter((article: Article) => article.source.name === filter)
    : articles;

  const articlesToShow = filteredArticles.slice();

  return (
    <div>
      {articlesToShow.map((article: Article) => (
        <NewsPiece key={article.title} article={article} />
      ))}
    </div>
  );
};

export { NewsFeed };
