import React, { useState } from "react";

const phoneNumber = "1234567890"; // Your WhatsApp number

const WhatsAppButton: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleClick = () => {
    setShowPrompt(true);
  };

  const confirmOpenWhatsApp = () => {
    setShowPrompt(false);
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  const cancelOpenWhatsApp = () => {
    setShowPrompt(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="px-5 py-2 bg-teritaryBackground text-textSecondary rounded-md font-medium hover:bg-teritaryBackground transition"
      >
        WhatsApp Us
      </button>

      {showPrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-xs text-center shadow-lg">
            <p className="mb-4">Open WhatsApp to chat with us?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmOpenWhatsApp}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Yes
              </button>
              <button
                onClick={cancelOpenWhatsApp}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
