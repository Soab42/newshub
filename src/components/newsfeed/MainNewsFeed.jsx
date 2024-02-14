import TopNews from "./TopNews";
import SecondTopNews from "./SecondTopNews";
import GeneralNews from "./GeneralNews";
import ErrorImage from "../../assets/server_down1.svg";
import BlankImage from "../../assets/blank.svg";
import { useNewsProvider } from "../../contexts/NewsContext";
import separateArray from "../../utils/separateData";
import NewsFeedSkeleton from "../skelitonLoader/NewsFeedSkeleton";
import { useSearchProvider } from "../../contexts/SearchContext";

export default function MainNewsFeed() {
  const { newsData, isLoading, isError } = useNewsProvider();
  const { searchValue } = useSearchProvider();
  //separate main Array to show main news feed and trending news feed
  const [firstArray] = separateArray(newsData, searchValue);

  let content;

  //show news loader when data fetching
  if (isLoading) {
    content = <NewsFeedSkeleton />;
  }

  //show error message
  if (isError) {
    content = (
      <div className="p-20 col-span-16 bg-red-300 backdrop-blur-xl ">
        <div className="flex w-[30rem] gap-5">
          <img
            className=" bg-slate-500 rounded-3xl"
            src={ErrorImage}
            alt={isError.message}
          />
          <p className="min-w-fit  px-4 text-7xl flex justify-center items-center  text-rose-500 font-bold">
            {isError.message}
          </p>
        </div>
      </div>
    );
  }

  // show empty data message if there are no items available
  if (!isLoading && !isError && newsData?.length === 0) {
    content = (
      <div className="flex w-[30rem] gap-10 items-center p-20">
        <img src={BlankImage} alt="blank" />
        <p className="text-9xl text-violet-950 w-96">No Data Found!</p>
      </div>
    );
  }
  // if there is problems then show main news feed
  if (!isLoading && !isError && newsData?.length > 0) {
    content =
      firstArray &&
      firstArray?.map((news, i) => {
        if (i === 0) {
          return <TopNews newsData={news} key={i} />;
        } else if (i === 1) {
          return <SecondTopNews newsData={news} key={i} />;
        } else {
          return <GeneralNews newsData={news} key={i} />;
        }
      });
  }

  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {content}
      </div>
    </>
  );
}
