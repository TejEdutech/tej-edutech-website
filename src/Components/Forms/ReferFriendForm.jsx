import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "../../Components/common/Loader";

export default function ReferFriendForm() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleRefer = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          yourname: formData.get("yourname"),
          youremail: formData.get("youremail"),
          friendname: formData.get("friendname"),
          friendemail: formData.get("friendemail"),
          message: formData.get("message"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessMsg(true);
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        alert("❌ Failed! Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-8 my-16 bg-white shadow-md rounded-xl">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Refer a Friend
      </h2>

      <p className="text-gray-600 text-center mb-6">
        Refer your friend and earn <b>5–10% discount</b> on fees + exclusive coupons 🎁
      </p>

      {successMsg && (
        <p className="text-green-600 text-center font-medium mb-4">
          🎉 Referral submitted successfully!
        </p>
      )}

      <form onSubmit={handleRefer} className="space-y-4">

        <input
          required
          name="yourname"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />

        <input
          required
          type="email"
          name="youremail"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />

        <input
          required
          name="friendname"
          placeholder="Friend's Name"
          className="w-full border p-3 rounded"
        />

        <input
          required
          type="email"
          name="friendemail"
          placeholder="Friend's Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          rows={3}
          className="w-full border p-3 rounded"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white px-6 py-3 w-full rounded-md hover:bg-purple-700 active:scale-95 transition"
        >
          {loading ? <Loader size={28} /> : "Refer Now"}
        </button>
      </form>
    </div>
  );
}
