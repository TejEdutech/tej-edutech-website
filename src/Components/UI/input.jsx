import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});
