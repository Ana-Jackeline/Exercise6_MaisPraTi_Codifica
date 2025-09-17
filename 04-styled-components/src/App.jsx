import React, { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Skeleton from "./components/Skeleton";
import { products } from "./data";
import { lightTheme, darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s, color 0.2s;
  }

  main {
    display: grid;
    gap: 1.5rem;
    padding: 6rem 1.5rem 2rem;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 481px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 769px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1025px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </main>
    </ThemeProvider>
  );
}
