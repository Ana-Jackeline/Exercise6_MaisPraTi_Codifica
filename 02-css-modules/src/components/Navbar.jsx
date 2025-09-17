import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ darkMode, toggleDarkMode, cartCount }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Loja</div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={toggleDarkMode} aria-label="Alternar tema">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <div className={styles.cartBadge} aria-label={`Itens no carrinho: ${cartCount}`}>
          {cartCount}
        </div>
      </div>
    </nav>
  );
}
