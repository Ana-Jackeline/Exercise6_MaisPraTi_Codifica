import React from "react";

export default function Button({ variant = "solid", children, disabled, loading, ...props }) {
  const baseStyle = {
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    border: "2px solid",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem"
  };

  const variants = {
    solid: {
      backgroundColor: "#e53935",
      color: "#fff",
      borderColor: "#e53935"
    },
    outline: {
      backgroundColor: "transparent",
      color: "#e53935",
      borderColor: "#e53935"
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#e53935",
      borderColor: "transparent"
    }
  };

  const style = { ...baseStyle, ...variants[variant], opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", transition: "all 0.2s" };

  return (
    <button style={style} disabled={disabled || loading} {...props}>
      {loading ? "Carregando..." : children}
    </button>
  );
}
