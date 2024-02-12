import MainNewsFeed from "./MainNewsFeed";
import TrendingNewsFeed from "./TrendingNewsFeed";

import SearchNewsFeed from "./SearchNewsFeed";
import { useSearchProvider } from "../../contexts/SearchContext";
import { categoryList } from "../../utils/categoryList";

import { useRouteProvider } from "../../contexts/RouteContext";
import CategoryNewsFeed from "./CategoryNewsFeed";
export default function NewsFeed() {
  const { searchValue } = useSearchProvider();
  const { route, setRoute } = useRouteProvider();

  let content;
  if (searchValue) {
    content = (
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <SearchNewsFeed />
      </div>
    );
  } else {
    content = (
      <>
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <MainNewsFeed />
          <TrendingNewsFeed />
        </div>
        <a
          href="#"
          className=" text-xl underline capitalize duration-200 p-2 w-1/4 float-right hover:bg-text-300/60"
          onClick={() => setRoute("general")}
        >
          show all General news...
        </a>
        {!route &&
          categoryList.map((cat) => (
            <CategoryNewsFeed cat={cat} key={cat} setRout={setRoute} />
          ))}
      </>
    );
  }

  return <main className="my-10 lg:my-14 relative">{content}</main>;
}
