import { useRouteProvider } from "../contexts/RouteContext";

export default function Categories() {
  const { route, setRoute } = useRouteProvider();

  // Function to determine the style based on the current route
  const getLinkStyle = (category) => {
    return {
      color: route === category ? "#00d991" : "inherit",
    };
  };

  return (
    <>
      <li>
        <a href="#" style={getLinkStyle("")} onClick={() => setRoute("")}>
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("general")}
          onClick={() => setRoute("general")}
        >
          General
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("business")}
          onClick={() => setRoute("business")}
        >
          Business
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("entertainment")}
          onClick={() => setRoute("entertainment")}
        >
          Entertainment
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("health")}
          onClick={() => setRoute("health")}
        >
          Health
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("science")}
          onClick={() => setRoute("science")}
        >
          Science
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("technology")}
          onClick={() => setRoute("technology")}
        >
          Technology
        </a>
      </li>
      <li>
        <a
          href="#"
          style={getLinkStyle("sports")}
          onClick={() => setRoute("sports")}
        >
          Sports
        </a>
      </li>
    </>
  );
}
