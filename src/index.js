import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import "./assets/styles.css"
import * as serviceWorker from "./serviceWorker"

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

serviceWorker.unregister();
