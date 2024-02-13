import { createContext, useContext, useEffect, useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery ";
import { useSearchProvider } from "./SearchContext";

const NewsContext = createContext();

const useNewsProvider = () => useContext(NewsContext);
export default function NewsContextProvider({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();
  const { searchValue } = useSearchProvider();
  const { loading, error, newsData } = useNewsQuery();

  useEffect(() => {
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
    setIsLoading(loading?.message);
    setIsError(error);
    setData(filteredData);
  }, [newsData, searchValue, error, loading]);

  return (
    <NewsContext.Provider value={{ isLoading, isError, newsData: data }}>
      {children}
    </NewsContext.Provider>
  );
}

export { useNewsProvider };
