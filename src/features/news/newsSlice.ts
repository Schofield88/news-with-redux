import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendNewsRequest } from "../../api/sendNewsRequest";
import { Article } from "../../api/newsTypes";

enum RequestStatus {
  IDLE = "idle",
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

interface InitialNewsState {
  articles: Article[];
  status: RequestStatus;
  error?: string | null;
}

const initialNewsState: InitialNewsState = {
  articles: [],
  status: RequestStatus.IDLE,
  error: null,
};

const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const theNews = await sendNewsRequest();

  console.log("theNews: ", theNews);

  return theNews.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState: initialNewsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = RequestStatus.SUCCEEDED;
        state.articles = state.articles.concat(action.payload);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = RequestStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

const { reducer: newsReducer } = newsSlice;

export { newsReducer, RequestStatus, fetchNews };
