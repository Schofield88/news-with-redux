import { NewsHeader } from "./features/NewsHeader/NewsHeader";
import { NewsFeed } from "./features/NewsFeed/NewsFeed";
import { NewsFooter } from "./features/NewsFooter/NewsFooter";

function App() {
  return (
    <div>
      <NewsHeader />
      <NewsFeed />
      <NewsFooter />
    </div>
  );
}

export default App;
