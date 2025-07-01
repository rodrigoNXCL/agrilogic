import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
// Asegúrate de esta línea exista:
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
