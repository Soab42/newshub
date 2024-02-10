import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NewsContextProvider from "./contexts/NewsContext";
import RouteContextProvider from "./contexts/RouteContext";
import SearchProvider from "./contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouteContextProvider>
      <SearchProvider>
        <NewsContextProvider>
          <App />
        </NewsContextProvider>
      </SearchProvider>
    </RouteContextProvider>
  </React.StrictMode>
);
