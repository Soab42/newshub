import { useNewsProvider } from "../../contexts/NewsContext";
import separateArray from "../../utils/separateData";
import TrendingNewsLoader from "../skelitonLoader/TrendingNewsLoader";
import GeneralNews from "./GeneralNews";
import TrendingTopNews from "./TrendingTopNews";

export default function TrendingNewsFeed() {
  const { newsData = [], isLoading } = useNewsProvider();
  const [, secondArray] = separateArray(newsData);
  // return null;

  let content;

  if (isLoading) {
    content = <TrendingNewsLoader />;
  }
  if (!isLoading && newsData) {
    content =
      secondArray &&
      secondArray?.map((news, i) => {
        if (i === 0) {
          return <TrendingTopNews newsData={news} key={i} />;
        } else {
          return <GeneralNews newsData={news} key={i} />;
        }
      });
  }

  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9] ">{content}</div>
    </div>
  );
}
