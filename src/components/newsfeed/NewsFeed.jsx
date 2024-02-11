import MainNewsFeed from "./MainNewsFeed";
import TrendingNewsFeed from "./TrendingNewsFeed";
import CategoryShortNews from "./CategoryShortNews";
import SearchNewsFeed from "./SearchNewsFeed";
import { useSearchProvider } from "../../contexts/SearchContext";
import { categoryList } from "../../utils/categoryList";
import React from "react";
import { useRouteProvider } from "../../contexts/RouteContext";
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
        {!route &&
          categoryList.map((cat) => (
            <React.Fragment key={cat}>
              <div className="my-7 relative h-16">
                <p className="category absolute left-[40%] opacity-10 text-green-600 capitalize -top-16  font-bold text-[7rem] ">
                  {cat}
                </p>
                <p className="category text-green-600 absolute left-[50%]  capitalize -top-3  font-bold text-[4rem]">
                  {cat}
                </p>
                <div className=" bg-green-300/70 shadow-lg  border-black opacity-50 relative -z-10 top-10 w-full h-5"></div>
              </div>
              <div className="container mx-auto grid grid-cols-12 gap-8">
                <CategoryShortNews category={cat} />
              </div>{" "}
              <a
                href="#"
                className=" text-xl underline capitalize duration-200 p-2 w-1/4 float-right hover:bg-text-300/60"
                onClick={() => setRoute(cat)}
              >
                show all {cat} news...
              </a>
            </React.Fragment>
          ))}
      </>
    );
  }

  return <main className="my-10 lg:my-14 relative">{content}</main>;
}
