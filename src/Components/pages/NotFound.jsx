import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-50 text-center px-6">

      <h1 className="text-7xl font-bold text-blue-700">404</h1>
      <p className="text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
