"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Resend response:", data.result);

      if (res.ok && data.success) {
        const fullId = data?.result?.data?.id || "unknown-id";
        const shortId = fullId !== "unknown-id" ? fullId.slice(0, 8) : fullId;
        setStatus({
          type: "success",
          message: `✅ Message sent! ID: ${shortId}`,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: `❌ Failed: ${data.error || "Unknown error"}`,
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "❌ Error: " + err.message });
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows="5"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button
          type="submit"
          disabled={status.type === "loading"}
          className={`w-full p-2 rounded text-white transition-colors ${
            status.type === "loading"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {status.type === "loading" ? "Sending..." : "Send"}
        </button>
      </form>

      {status.message && (
        <p
          className={`mt-4 text-center font-medium flex items-center justify-center gap-2 ${
            status.type === "success"
              ? "text-green-600"
              : status.type === "error"
              ? "text-red-600"
              : status.type === "loading"
              ? "text-blue-600"
              : "text-gray-600"
          }`}
        >
          {status.type === "loading" && (
            <svg
              className="animate-spin h-5 w-5 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {status.message}
        </p>
      )}
    </div>
  );
}
