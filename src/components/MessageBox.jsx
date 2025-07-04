import React from "react";

const MessageBox = ({ message, type, onClose }) => {
  if (!message) return null;

  const bgColor =
    type === "success"
      ? "bg-green-100 border-green-400 text-green-700"
      : "bg-red-100 border-red-400 text-red-700";
  const textColor = type === "success" ? "text-green-700" : "text-red-700";

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg border ${bgColor} z-50 flex items-center justify-between animate-fade-in-down`}
      role="alert"
    >
      <span className={`block sm:inline font-medium ${textColor}`}>
        {message}
      </span>
      <button
        onClick={onClose}
        className="ml-4 text-lg font-bold leading-none text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default MessageBox;
