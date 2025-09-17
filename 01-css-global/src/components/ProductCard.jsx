import React from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product, loading }) {
  if (loading) return <Skeleton />;

  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.2s, box-shadow 0.2s",
      display: "flex",
      flexDirection: "column"
    }}
    tabIndex={0}
    onFocus={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)"}
    onBlur={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img src={product.image} alt={product.title} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} loading="lazy" />
      <div style={{ padding: "0.5rem" }}>
        <div style={{ fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{product.title}</div>
        <div>R$ {product.price.toFixed(2)}</div>
        <div>{"★".repeat(Math.round(product.rating))}</div>
        <div style={{ backgroundColor: "#ffeb3b", borderRadius: "4px", padding: "0.1rem 0.5rem", display: "inline-block", fontSize: "0.8rem" }}>{product.tag}</div>
        <Button variant="solid" style={{ marginTop: "0.5rem" }}>Adicionar</Button>
      </div>
    </div>
  );
}
