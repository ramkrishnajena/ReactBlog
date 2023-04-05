import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

const mainContainer = ReactDOM.createRoot(
  document.getElementById("main-container")
);

mainContainer.render(<App />);
