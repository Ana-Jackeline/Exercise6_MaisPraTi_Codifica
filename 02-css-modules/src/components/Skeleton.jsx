import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.line}></div>
      <div className={styles.lineShort}></div>
      <div className={styles.button}></div>
    </div>
  );
}
