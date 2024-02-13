import { useState, useEffect } from "react";
import { useRouteProvider } from "../contexts/RouteContext";
import { useSearchProvider } from "../contexts/SearchContext";

function useNewsQuery(category, search) {
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [error, setError] = useState(null);
  const { route } = useRouteProvider();
  const { searchValue } = useSearchProvider();
  // console.log(newsData);
  useEffect(() => {
    setError("");
    setLoading({
      status: true,
      message: "data is fetching! Please wait a moment",
    });

    let url = `${import.meta.env.VITE_BASE_API_URL}${
      !searchValue ? "top-headlines" : ""
    }`;

    if (search || searchValue) {
      url += `search?q=${search || searchValue}`;
    }
    // if (category || route) {
    //   url += `?category=${category}`;
    // }

    if (category && !searchValue && !search) {
      url += `?category=${category}`;
    }
    if (!category && !search && !searchValue && route) {
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
  }, [searchValue, route, category, search]);

  return { newsData, loading, error };
}

export default useNewsQuery;

// http://localhost:8000/v2/search?q=Develop

// http://localhost:8000/v2/top-headlines?category=general
