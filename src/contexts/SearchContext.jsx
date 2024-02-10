import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const SearchContext = createContext();

const useSearchProvider = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearchProvider };
