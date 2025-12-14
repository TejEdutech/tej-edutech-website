import React from "react";

export default function IconButton({
  icon: Icon,
  onClick,
  className = "",
  size = 22,
  bg = "bg-blue-600",
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full ${bg} text-white 
      hover:opacity-90 active:scale-95 transition-all ${className}`}
    >
      <Icon size={size} />
    </button>
  );
}
