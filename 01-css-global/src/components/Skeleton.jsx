import React from "react";

export default function Skeleton() {
  return (
    <div style={{
      backgroundColor: "#ccc",
      borderRadius: "8px",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      animation: "pulse 1.5s infinite"
    }}>
      <div style={{ backgroundColor: "#bbb", width: "100%", paddingTop: "100%", borderRadius: "8px" }}></div>
      <div style={{ height: "1rem", backgroundColor: "#bbb", borderRadius: "4px" }}></div>
      <div style={{ height: "1rem", width: "50%", backgroundColor: "#bbb", borderRadius: "4px" }}></div>
      <div style={{ height: "2rem", backgroundColor: "#bbb", borderRadius: "4px" }}></div>
    </div>
  );
}
