import React from "react";

export default function Skeleton() {
  return (
    <div
      className="
        animate-pulse bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-3
      "
    >
      <div className="bg-gray-300 dark:bg-gray-700 w-full aspect-square rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
    </div>
  );
}
