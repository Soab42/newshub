import { createContext, useContext, useState } from "react";

const RouteContext = createContext();

const useRouteProvider = () => useContext(RouteContext);

export default function RouteContextProvider({ children }) {
  const [route, setRoute] = useState("");

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export { useRouteProvider };
