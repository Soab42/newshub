import SingleTrendingLoader from "./SingleTrendingLoader";

export default function TrendingNewsLoader() {
  return (
    <div className="mx-auto">
      <div className="space-y-4">
        <div className="flex-1 gap-2 flex flex-col justify-between">
          <div className=" h-64 skeleton-loading"></div>
        </div>
        <SingleTrendingLoader />
        <SingleTrendingLoader />
        <SingleTrendingLoader />
        <SingleTrendingLoader />
        <SingleTrendingLoader />
        <SingleTrendingLoader />
      </div>
    </div>
  );
}
