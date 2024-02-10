import GeneralNewsLoader from "./GeneralNewsLoader";
import TopSkeleton from "./TopSkeleton";

const NewsFeedSkeleton = () => {
  return (
    <div className="mx-auto">
      {/* Newsfeed Items */}
      <div className="space-y-4">
        <TopSkeleton />

        {/* general section */}
        <GeneralNewsLoader />
        <GeneralNewsLoader />
      </div>
    </div>
  );
};

export default NewsFeedSkeleton;
