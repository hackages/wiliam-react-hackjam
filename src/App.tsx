import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import { MoviesView } from "./views/Movies";


export function App() {  
  return (
    <Provider store={store}>
      <MoviesView />
    </Provider>
  );
}
