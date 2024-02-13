import React from "react";
import CategoryShortNews from "./CategoryShortNews";

export default function CategoryNewsFeed({ cat, setRoute }) {
  return (
    <>
      <div className="my-7 relative h-16">
        <p className="category absolute left-[35%] opacity-10 text-green-600 capitalize -top-16  font-bold text-[7rem] ">
          {cat}
        </p>
        <p className="category text-green-600 absolute left-[45%]  capitalize -top-3  font-bold text-[4rem]">
          {cat}
        </p>
        <div className=" bg-green-300/70 shadow-lg  border-black opacity-50 relative -z-10 top-10 w-full h-5"></div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <CategoryShortNews category={cat} />
      </div>{" "}
      <a
        href="#"
        className=" text-xl underline capitalize duration-200 p-2 block float-right hover:bg-text-300/60 pr-56"
        onClick={() => setRoute(cat)}
      >
        see all {cat} news
      </a>
    </>
  );
}
