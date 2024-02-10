import { getDate } from "../../utils/getDate";

export default function TrendingTopNews({ newsData = {} }) {
  return (
    <div className="col-span-12 mb-6 md:col-span-8 slideLeft">
      <img
        className="w-full"
        src={newsData?.urlToImage}
        alt={newsData?.author}
      />
      {/* <!-- info --> */}
      <div className="col-span-12 mt-6 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
            {newsData?.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">{newsData.description}</p>
        <p className="mt-5 text-base text-[#94908C]">
          {getDate("date", "short", newsData?.publishedAt)}
        </p>
      </div>
    </div>
  );
}
