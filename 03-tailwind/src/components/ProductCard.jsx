import React from "react";
import Button from "./Button";

export default function ProductCard({ product }) {
  return (
    <article
      tabIndex="0"
      className="
        bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg 
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        transition-all duration-200
        overflow-hidden
      "
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full aspect-square object-cover"
        />
        <span
          className={`
            absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded 
            ${product.tag === "Novo" ? "bg-green-500 text-white" : "bg-blue-500 text-white"}
          `}
        >
          {product.tag}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-gray-900 dark:text-white font-medium line-clamp-2">
          {product.title}
        </h2>
        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
          R$ {product.price.toFixed(2)}
        </p>
        <p
          className="text-yellow-500"
          aria-label={`Avaliação ${product.rating} de 5`}
        >
          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
        </p>
        <Button variant="solid">Adicionar</Button>
      </div>
    </article>
  );
}
