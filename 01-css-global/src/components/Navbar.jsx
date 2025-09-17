import React from "react";

export default function Navbar({ darkMode, toggleDarkMode, cartCount }) {
  return (
    <nav className="navbar" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: darkMode ? "#222" : "#fff",
      boxShadow: darkMode ? "0 2px 8px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div className="logo" style={{ fontWeight: "bold" }}>Loja</div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={toggleDarkMode} aria-label="Alternar tema">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <div className="cart-badge" aria-label={`Itens no carrinho: ${cartCount}`} style={{
          backgroundColor: "#e53935",
          color: "#fff",
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.8rem"
        }}>{cartCount}</div>
      </div>
    </nav>
  );
}
