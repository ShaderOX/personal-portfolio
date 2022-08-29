import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataContext from "./context/DataContext";
import data from "./data.json";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <DataContext.Provider value={data}>
      <App />
    </DataContext.Provider>
  </React.StrictMode>
);
