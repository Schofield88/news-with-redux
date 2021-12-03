import { NewsHeader } from "./features/news/NewsHeader/NewsHeader";
import { NewsFeed } from "./features/news/NewsFeed/NewsFeed";
import { NewsFooter } from "./features/news/NewsFooter/NewsFooter";
import styles from "./App.module.css";
import { useTheNews } from "./app/hooks";

function App() {
  useTheNews();

  return (
    <div className={styles.width}>
      <div className={styles.centre}>
        <NewsHeader />
        <NewsFeed />
        <NewsFooter />
      </div>
    </div>
  );
}

export default App;
