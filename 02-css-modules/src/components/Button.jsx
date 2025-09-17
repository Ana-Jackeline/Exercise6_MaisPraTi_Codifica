import React from "react";
import styles from "./Button.module.css";

export default function Button({ variant = "solid", children, disabled, loading, ...props }) {
  const classNames = [
    styles.base,
    styles[variant],
    (disabled || loading) ? styles.disabled : ""
  ].join(" ");

  return (
    <button className={classNames} disabled={disabled || loading} {...props}>
      {loading ? "Carregando..." : children}
    </button>
  );
}
