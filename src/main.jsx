import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NewsContextProvider from "./contexts/NewsContext";
import RouteContextProvider from "./contexts/RouteContext";
import SearchProvider from "./contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <RouteContextProvider>
        <NewsContextProvider>
          <App />
        </NewsContextProvider>
      </RouteContextProvider>
    </SearchProvider>
  </React.StrictMode>
);
