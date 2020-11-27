import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import {movies, categories, genres} from './mocks';

ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} categories={categories} genres={genres} />
  </React.StrictMode>,
  document.getElementById("root")
);
