import { getDate } from "../../utils/getDate";
export default function GeneralNews({ newsData = {} }) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      {/* <!-- info --> */}
      <div className="col-span-12 md:col-span-4 flex flex-col h-full justify-between">
        <div>
          <a href={newsData.url} target="_blank" rel="noreferrer">
            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
              {newsData?.title}
            </h3>
          </a>
          <p className="text-base text-[#292219]">{newsData?.description}</p>
        </div>
        <p className="mt-5 text-base text-[#94908C]">
          {getDate("date", "short", newsData?.publishedAt)}
        </p>
      </div>
    </div>
  );
}
