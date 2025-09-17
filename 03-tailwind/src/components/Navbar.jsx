import React from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center px-6 py-3 z-10">
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        Minha Loja
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Alternar tema"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <div
          className="relative text-gray-900 dark:text-white"
          aria-label="Carrinho de compras"
        >
          🛒
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
            3
          </span>
        </div>
      </div>
    </nav>
  );
}
