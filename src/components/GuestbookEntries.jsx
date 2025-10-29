import React from "react";

const GuestbookEntries = ({ entries = [], onOpenForm }) => {
  return (
    <div className="text-center">
      <h3 className="text-[34px] font-semibold">Memories</h3>
      <p className="text-black font-normal mb-[42px] text-[18px]">
        Please fill out this{" "}
        <span
          className="text-blue-600 cursor-pointer underline  hover:underline"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white shadow-sm rounded-[5px] p-[34px] text-left hover:shadow-md transition duration-200"
            >
              <p className="text-black text-[18px] mb-6 font-normal wrap-break-word">
                {entry.message || "No message provided"}
              </p>
              <p className="text-[18px] font-medium text-black uppercase">
                {entry.name || "Anonymous"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuestbookEntries;
