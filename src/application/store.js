import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

// creating the store
export const configureStore = createStore(reducers)