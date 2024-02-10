import TopNews from "./TopNews";
import SecondTopNews from "./SecondTopNews";
import GeneralNews from "./GeneralNews";

import { useNewsProvider } from "../../contexts/NewsContext";
import separateArray from "../../utils/separateData";
export default function LeftFeed() {
  const { newsData = [] } = useNewsProvider();

  const [firstArray] = separateArray(newsData);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {firstArray &&
        firstArray?.map((news, i) => {
          if (i === 0) {
            return <TopNews newsData={news} key={i} />;
          } else if (i === 1) {
            return <SecondTopNews newsData={news} key={i} />;
          } else {
            return <GeneralNews newsData={news} key={i} />;
          }
        })}
    </div>
  );
}
