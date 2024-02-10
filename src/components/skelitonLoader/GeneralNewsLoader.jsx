import React from "react";
import SingleNewsLoader from "./SingleNewsLoader";

export default function GeneralNewsLoader() {
  return (
    <div>
      <div className="flex space-x-4 border p-1">
        <SingleNewsLoader />
        <SingleNewsLoader />
        <SingleNewsLoader />
      </div>

      {/* Skeleton Loader Item end */}
    </div>
  );
}
