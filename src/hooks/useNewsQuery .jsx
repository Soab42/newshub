import { useState, useEffect } from "react";
import { useRouteProvider } from "../contexts/RouteContext";
import { useSearchProvider } from "../contexts/SearchContext";

function useNewsQuery() {
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [error, setError] = useState(null);
  const { route } = useRouteProvider();
  const { searchValue } = useSearchProvider();

  useEffect(() => {
    setError("");
    setLoading({
      status: true,
      message: "data is fetching! Please wait a moment",
    });

    let url = `${import.meta.env.VITE_BASE_API_URL}${
      searchValue ? "search?q=" + searchValue : "top-headlines"
    }`;
    if (!searchValue && route !== "") {
      url += `?category=${route}`;
    }

    try {
      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          setNewsData(res);
        })
        .catch((error) => setError(error))
        .finally(() =>
          setLoading({
            status: false,
            message: "",
          })
        );
    } catch (error) {
      setError(error);
      setLoading({
        status: false,
        message: "",
      });
    }
  }, [searchValue, route]);

  return { newsData, loading, error };
}

export default useNewsQuery;

// http://localhost:8000/v2/search?q=Develop

// http://localhost:8000/v2/top-headlines?category=general
