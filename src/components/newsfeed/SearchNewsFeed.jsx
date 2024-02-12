import SearchNews from "./SearchNews";
import ErrorImage from "../../assets/server_down1.svg";
import BlankImage from "../../assets/blank.svg";
import { useNewsProvider } from "../../contexts/NewsContext";

import SearchLoader from "../skelitonLoader/SearchLoader";
import { useSearchProvider } from "../../contexts/SearchContext";

export default function SearchNewsFeed() {
  const { newsData = [], loading, error } = useNewsProvider();
  const { searchValue } = useSearchProvider();

  let content;

  //show news loader when data fetching
  if (loading.status) {
    content = <SearchLoader />;
  }

  //show error message
  if (error) {
    // console.log(error);
    content = (
      <div className="w-96 p-20 bg-red-300 backdrop-blur-xl ">
        <div className="flex w-[40rem] gap-5">
          <img
            className=" bg-slate-500 rounded-3xl"
            src={ErrorImage}
            alt={error.message}
          />
          <p className="min-w-fit  px-4 text-7xl flex justify-center items-center  text-rose-500 font-bold">
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  // show empty data message if there are no items available
  if (!loading.status && !error && newsData.length === 0) {
    content = (
      <div className="flex col-span-12 gap-10 items-center p-20">
        <img src={BlankImage} alt="blank" />
        <p className="text-7xl text-violet-950 w-full">
          No News Found about &#34;
          <span className=" text-green-600">{searchValue}</span>&#34;!
        </p>
      </div>
    );
  }
  // if there is problems then show main news feed
  if (!loading.status && !error && newsData.length > 0) {
    content =
      newsData &&
      newsData?.map((news, i) => {
        return <SearchNews newsData={news} key={i} />;
      });
  }

  return (
    <>
      {searchValue && newsData.length > 0 && (
        <p className="absolute -top-12 text-center text-xl bg-green-200 container p-1 slideLeft shadow-xl rounded-full">
          {newsData.length} news articles related to the keyword &#34;
          <span className="text-green-600 text-xl font-bold">
            {searchValue}
          </span>
          &#34; were found.
        </p>
      )}

      <div className="col-span-12 grid grid-cols-12 gap-6 pl-4  xl:col-span-12">
        {content}
      </div>
    </>
  );
}
