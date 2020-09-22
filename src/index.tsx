import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import {movies, categories} from './mocks';

ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} categories={categories} />
  </React.StrictMode>,
  document.getElementById("root")
);
