import { createContext, useContext, useEffect, useState } from "react";

const RouteContext = createContext();

const useRouteProvider = () => useContext(RouteContext);

export default function RouteContextProvider({ children }) {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (route === null) {
      const savedRoute = JSON.parse(localStorage.getItem("route", route));
      savedRoute && setRoute(savedRoute);
    }
    localStorage.setItem("route", JSON.stringify(route));
  }, [route]);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export { useRouteProvider };
