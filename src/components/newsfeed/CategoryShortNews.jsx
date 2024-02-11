import TopNews from "./TopNews";
import SecondTopNews from "./SecondTopNews";
import GeneralNews from "./GeneralNews";

import separateArray from "../../utils/separateData";
import NewsFeedSkeleton from "../skelitonLoader/NewsFeedSkeleton";
import useNewsQuery from "../../hooks/useNewsQuery ";
import TrendingTopNews from "./TrendingTopNews";

export default function CategoryShortNews({ category }) {
  const { newsData, loading } = useNewsQuery(category);
  //separate main Array to show main news feed and trending news feed
  // const newsData = [];
  // const loading = { status: false };
  const [firstArray, secondArray] = separateArray(newsData?.articles || []);

  // console.log(newsData?.articles);
  // console.log(firstArray);
  let content;
  let content2;
  //show news loader when data fetching
  if (loading.status) {
    content = <NewsFeedSkeleton />;
  }

  // if there is problems then show main news feed
  if (!loading.status && newsData?.articles?.length > 0) {
    // console.log("");
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

  if (!loading.status && newsData?.articles?.length > 0) {
    content2 =
      secondArray &&
      secondArray?.map((news, i) => {
        if (i === 0) {
          return <TrendingTopNews newsData={news} key={i} />;
        } else {
          return <GeneralNews newsData={news} key={i} />;
        }
      });
  }

  // console.log(content);
  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {content}
      </div>
      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9] ">{content2}</div>
      </div>
    </>
  );
}
