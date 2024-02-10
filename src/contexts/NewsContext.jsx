import { createContext, useContext } from "react";
import useNewsQuery from "../hooks/useNewsQuery ";
import { useSearchProvider } from "./SearchContext";

const NewsContext = createContext();

const useNewsProvider = () => useContext(NewsContext);
export default function NewsContextProvider({ children }) {
  const { searchValue } = useSearchProvider();
  const { loading, error, newsData } = useNewsQuery();

  let filteredData;
  if (searchValue) {
    filteredData = newsData?.result?.filter(
      (article) => article.description !== null
    );
  } else {
    filteredData = newsData?.articles?.filter(
      (article) => article.description !== null
    );
  }

  return (
    <NewsContext.Provider value={{ loading, error, newsData: filteredData }}>
      {children}
    </NewsContext.Provider>
  );
}

export { useNewsProvider };
