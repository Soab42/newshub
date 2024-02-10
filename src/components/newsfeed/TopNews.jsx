import { useHighlightMatches } from "../../hooks/useHighlightMatches";
import { getDate } from "../../utils/getDate";

export default function TopNews({ newsData = {} }) {
  const highlightMatches = useHighlightMatches();

  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 slideTop">
      <div className="col-span-12 lg:col-span-4">
        <a href={newsData.url} target="_blank" rel="noreferrer">
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
            {highlightMatches(newsData.title)}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">
          {highlightMatches(newsData.description)}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">
          {getDate("date", "short", newsData?.publishedAt)}
        </p>
      </div>
      {/* <!-- thumb --> */}
      <div className="col-span-12 lg:col-span-8">
        <img
          className="w-full"
          src={newsData?.urlToImage}
          alt={newsData?.author}
        />
        <p className="mt-5 text-base text-[#5C5955]">
          Published By: {newsData?.author}
        </p>
      </div>
    </div>
  );
}
