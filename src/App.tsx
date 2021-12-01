import { NewsHeader } from "./features/NewsHeader/NewsHeader";
import { NewsFeed } from "./features/NewsFeed/NewsFeed";
import { NewsFooter } from "./features/NewsFooter/NewsFooter";
import styles from "./App.module.css";

function App() {
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
