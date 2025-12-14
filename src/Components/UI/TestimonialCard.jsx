import React from "react";

export default function TestimonialCard({ name, college, city, text, video }) {
  return (
    <div className="bg-white p-6 shadow rounded-xl text-center max-w-xl mx-auto">

      {video && (
        <video
          src={video}
          controls
          className="w-full rounded-lg mb-4 object-cover"
        ></video>
      )}

      <p className="text-lg italic text-gray-700 mb-4">“{text}”</p>

      <h4 className="font-semibold text-gray-900 text-lg">{name}</h4>

      <p className="text-sm text-gray-500">
        {college}, {city}
      </p>
    </div>
  );
}
