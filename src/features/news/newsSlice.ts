import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendNewsRequest } from "../../api/sendNewsRequest";
import { Article } from "../../api/newsTypes";

enum RequestStatus {
  IDLE = "idle",
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

interface NewsState {
  articles: Article[];
  sources: string[];
  filter: string;
  numberOfArticlesToShow: number;
  status: RequestStatus;
  error?: string | null;
}

const initialNewsState: NewsState = {
  articles: [],
  sources: [],
  filter: "",
  numberOfArticlesToShow: 5,
  status: RequestStatus.IDLE,
  error: null,
};

const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const theNews = await sendNewsRequest();

  console.log("theNews: ", theNews);

  return theNews.articles;
});

const getSources = (articles: Article[]): string[] => {
  const sourceList = new Set<string>();
  articles.forEach((article) => {
    sourceList.add(article.source.name);
  });

  return Array.from(sourceList);
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialNewsState,
  reducers: {
    changeNewsSource: (state, action) => {
      state.filter = action.payload;
    },
    showMoreArticles: (state) => {
      if (state.numberOfArticlesToShow >= state.articles.length) {
        state.numberOfArticlesToShow = 5;
      } else {
        state.numberOfArticlesToShow += 5;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = RequestStatus.SUCCEEDED;
        state.articles = state.articles.concat(action.payload);
        state.sources = state.sources.concat(getSources(action.payload));
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = RequestStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

const { reducer: newsReducer, actions } = newsSlice;
const { changeNewsSource, showMoreArticles } = actions;

export {
  newsReducer,
  RequestStatus,
  fetchNews,
  changeNewsSource,
  showMoreArticles,
};
export type { NewsState };
