import { RootState } from "../../app/store";
import { Selector } from "@reduxjs/toolkit";
import { Article } from "../../api/newsTypes";

const getSources: Selector<RootState, string[]> = (state) => state.news.sources;
const getFilter: Selector<RootState, string> = (state) => state.news.filter;
const getArticles: Selector<RootState, Article[]> = (state) =>
  state.news.articles;
const getNumberOfArticlesToShow: Selector<RootState, number> = (state) =>
  state.news.numberOfArticlesToShow;

export { getSources, getFilter, getArticles, getNumberOfArticlesToShow };
