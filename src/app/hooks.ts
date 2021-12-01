import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useDispatch = () => reduxUseDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;

export { useDispatch, useSelector };
