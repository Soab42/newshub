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
        <button
          style={route ? getLinkStyle("") : { color: "#00d991" }}
          onClick={() => handleRoute("")}
        >
          Home
        </button>
      </li>
      <li>
        <button
          style={getLinkStyle("general")}
          onClick={() => handleRoute("general")}
        >
          General
        </button>
      </li>

      <li>
        <button
          style={getLinkStyle("business")}
          onClick={() => handleRoute("business")}
        >
          Business
        </button>
      </li>
      <li>
        <button
          style={getLinkStyle("entertainment")}
          onClick={() => handleRoute("entertainment")}
        >
          Entertainment
        </button>
      </li>
      <li>
        <button
          style={getLinkStyle("health")}
          onClick={() => handleRoute("health")}
        >
          Health
        </button>
      </li>
      <li>
        <button
          style={getLinkStyle("science")}
          onClick={() => handleRoute("science")}
        >
          Science
        </button>
      </li>
      <li>
        <button
          style={getLinkStyle("technology")}
          onClick={() => handleRoute("technology")}
        >
          Technology
        </button>
      </li>
      <li>
        <button
          style={getLinkStyle("sports")}
          onClick={() => handleRoute("sports")}
        >
          Sports
        </button>
      </li>
    </>
  );
}
