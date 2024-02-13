import { useRouteProvider } from "../contexts/RouteContext";
import { useSearchProvider } from "../contexts/SearchContext";

export default function Categories() {
  const { route, setRoute } = useRouteProvider();
  const { setSearchValue, searchRef } = useSearchProvider();

  // Function to determine the style based on the current route
  const getLinkStyle = (category) => {
    return {
      color: route === category ? "#00d991" : "inherit",
    };
  };

  // handle navigation and reset search when navigating
  const handleRoute = (route) => {
    setSearchValue("");
    searchRef.current.value = "";
    setRoute(route);
  };

  return (
    <>
      <li>
        <a
          href="#"
          style={route ? getLinkStyle("") : { color: "#00d991" }}
          onClick={() => handleRoute("")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("general")}
          onClick={() => handleRoute("general")}
        >
          General
        </a>
      </li>

      <li>
        <a
          href="#"
          style={getLinkStyle("business")}
          onClick={() => handleRoute("business")}
        >
          Business
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("entertainment")}
          onClick={() => handleRoute("entertainment")}
        >
          Entertainment
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("health")}
          onClick={() => handleRoute("health")}
        >
          Health
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("science")}
          onClick={() => handleRoute("science")}
        >
          Science
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("technology")}
          onClick={() => handleRoute("technology")}
        >
          Technology
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("sports")}
          onClick={() => handleRoute("sports")}
        >
          Sports
        </a>
      </li>
    </>
  );
}
