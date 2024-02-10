import { useState, useEffect } from "react";
import { useRouteProvider } from "../contexts/RouteContext";

function useNewsQuery(q) {
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [error, setError] = useState(null);
  const { route } = useRouteProvider();

  useEffect(() => {
    setLoading({
      status: true,
      message: "data is fetching! Please wait a moment",
    });

    let url = `${import.meta.env.VITE_BASE_URL}${
      q ? "search?q=" + q : "top-headlines"
    }`;
    if (!q && route) {
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
  }, [q, route]);

  return { newsData, loading, error };
}

export default useNewsQuery;

// http://localhost:8000/v2/search?q=Develop

// http://localhost:8000/v2/top-headlines?category=general
