import React from "react";

export default function Button({ variant = "solid", children, disabled }) {
  const base =
    "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200";

  const variants = {
    solid:
      "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed",
    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-700 disabled:opacity-50",
    ghost:
      "text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 disabled:opacity-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} disabled={disabled}>
      {children}
    </button>
  );
}
