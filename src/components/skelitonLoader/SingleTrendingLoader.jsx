import React from "react";

export default function SingleTrendingLoader() {
  return (
    <div>
      <div className="flex space-x-4 border-b-2 pb-2 p-1">
        <div className="flex-1 gap-2 flex flex-col justify-between">
          <div className=" h-20 skeleton-loading"></div>
          <div className="h-28 skeleton-loading"></div>
          <div className="w-44 h-4 skeleton-loading"></div>
        </div>
      </div>
    </div>
  );
}
