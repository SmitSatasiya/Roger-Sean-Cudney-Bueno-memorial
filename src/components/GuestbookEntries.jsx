import React, { useState } from "react";

const GuestbookEntries = ({ entries = [], onOpenForm }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="text-center">
      <h3 className="text-[34px] font-semibold">Memories</h3>
      <p className="text-black font-normal mb-[42px] text-[18px]">
        Please fill out this{" "}
        <span
          className="text-blue-600 cursor-pointer underline hover:underline"
          onClick={onOpenForm}
        >
          form
        </span>{" "}
        to add memories below.
      </p>

      {entries.length === 0 ? (
        <p className="text-gray-500">
          No entries yet. Be the first to share your memory.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white shadow-sm rounded-[5px] p-[34px] text-left hover:shadow-md transition duration-200 cursor-pointer"
              onClick={() => setSelectedEntry(entry)}
            >
              {/* Message preview (5-6 lines only) */}
              <p
                className="text-black text-[18px] mb-6 font-normal overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {entry.message || "No message provided"}
              </p>

              <p className="text-[18px] font-medium text-black uppercase">
                {entry.name || "Anonymous"}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Popup Modal for full message */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-[600px] w-full p-8 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl cursor-pointer"
              onClick={() => setSelectedEntry(null)}
            >
              &times;
            </button>

            <h2 className="text-[22px] font-semibold mb-4 text-center text-black">
              {selectedEntry.name || "Anonymous"}
            </h2>

            <p className="text-black text-[18px] font-normal whitespace-pre-wrap leading-relaxed text-left">
              {selectedEntry.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestbookEntries;
