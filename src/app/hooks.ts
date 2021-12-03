import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
} from "react-redux";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "./store";
import { fetchNews, RequestStatus } from "../features/news/newsSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useDispatch = () => reduxUseDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;

const useTheNews = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.news.status);

  useEffect(() => {
    console.log("status: ", status);
    if (status === RequestStatus.IDLE) {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);
};

export { useDispatch, useSelector, useTheNews };
