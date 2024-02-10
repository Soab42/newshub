import { getDate } from "../../utils/getDate";

export default function SecondTopNews({ newsData = {} }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8 slideIn">
      {/* <!-- info --> */}
      <div className="col-span-12 md:col-span-6">
        <a href={newsData.url} target="_blank" rel="noreferrer">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {newsData?.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">{newsData?.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {" "}
          {getDate("date", "short", newsData?.publishedAt)}
        </p>
      </div>
      {/* <!-- thumb --> */}
      <div className="col-span-12 md:col-span-6">
        <img
          className="w-full"
          src={newsData?.urlToImage}
          alt={newsData?.author}
        />
      </div>
    </div>
  );
}
