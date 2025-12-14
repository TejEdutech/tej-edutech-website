import React from "react";

export default function Loader({ size = 35, className = "" }) {
  return (
    <div
      className={`border-4 border-blue-500 border-t-transparent 
      rounded-full animate-spin ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
}
