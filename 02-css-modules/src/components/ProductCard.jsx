import React from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, loading }) {
  if (loading) return <Skeleton />;

  return (
    <div className={styles.card} tabIndex={0}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <div className={styles.title}>{product.title}</div>
        <div>R$ {product.price.toFixed(2)}</div>
        <div>{"★".repeat(Math.round(product.rating))}</div>
        <div className={styles.tag}>{product.tag}</div>
        <Button variant="solid" style={{ marginTop: "0.5rem" }}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}
