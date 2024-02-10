import { createContext, useContext, useEffect, useState } from "react";

const RouteContext = createContext();

const useRouteProvider = () => useContext(RouteContext);

export default function RouteContextProvider({ children }) {
  const [route, setRoute] = useState(null);

  if (route === null) {
    const savedRoute = localStorage.getItem("route", route);
    savedRoute && setRoute(savedRoute);
  }
  useEffect(() => {
    localStorage.setItem("route", route);
  }, [route]);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export { useRouteProvider };
