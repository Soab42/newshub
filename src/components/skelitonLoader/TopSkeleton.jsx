import React from "react";

export default function TopSkeliton() {
  return (
    <>
      {" "}
      {/* Skeleton Loader Item */}
      <div className="flex space-x-4 border p-1">
        <div className="flex-1 gap-2 flex flex-col justify-between">
          <div className="w-80 h-24 skeleton-loading"></div>
          <div className="w-80 h-36 skeleton-loading"></div>
          <div className="w-32 h-4 skeleton-loading"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[39.5rem] h-64 skeleton-loading"></div>
          <div className="w-44 h-4 skeleton-loading"></div>
        </div>
      </div>
      {/* Skeleton Loader Item end */}
      {/* Skeleton Loader Item */}
      <div>
        <div className="flex space-x-4 border p-1">
          <div className="flex-1 gap-2 flex flex-col justify-between">
            <div className="w-80 h-24 skeleton-loading"></div>
            <div className="w-80 h-36 skeleton-loading"></div>
            <div className="w-32 h-4 skeleton-loading"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-[20rem] h-64 skeleton-loading"></div>
            <div className="w-44 h-4 skeleton-loading"></div>
          </div>
          <div className="flex-1 gap-2 flex flex-col justify-between">
            <div className="w-80 h-24 skeleton-loading"></div>
            <div className="w-80 h-36 skeleton-loading"></div>
            <div className="w-32 h-4 skeleton-loading"></div>
          </div>
        </div>

        {/* Skeleton Loader Item end */}
      </div>
    </>
  );
}
