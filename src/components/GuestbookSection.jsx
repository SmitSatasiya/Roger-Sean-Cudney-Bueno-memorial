// import React, { useEffect, useState } from "react";
// import GuestbookForm from "./GuestbookForm";
// import GuestbookEntries from "./GuestbookEntries";

// const SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbx2bv89IkvmNJt8OOXT-QnArKMJpNMuMVJ_lPX4X-Z34gae3Xey0qMR6Xied517n_4pPw/exec";

// const GuestbookSection = () => {
//   const [entries, setEntries] = useState([]);

//   const fetchEntries = async () => {
//     try {
//       const response = await fetch(SCRIPT_URL);
//       const data = await response.json();
//       setEntries(data.reverse());
//     } catch (error) {
//       console.error("Error fetching entries:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   const handleFormSubmit = async (formData) => {
//     await fetch(SCRIPT_URL, {
//       method: "POST",
//       body: JSON.stringify(formData),
//     });
//     await fetchEntries();
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial",
//         maxWidth: "600px",
//         margin: "auto",
//         padding: "20px",
//       }}
//     >
//       <h2 style={{ textAlign: "center" }}>Guest Book</h2>
//       <GuestbookForm onSubmit={handleFormSubmit} />
//       <hr style={{ margin: "20px 0" }} />
//       <GuestbookEntries entries={entries} />
//     </div>
//   );
// };

// export default GuestbookSection;

import React, { useEffect, useState } from "react";
import GuestbookForm from "./GuestbookForm";
import GuestbookEntries from "./GuestbookEntries";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx2bv89IkvmNJt8OOXT-QnArKMJpNMuMVJ_lPX4X-Z34gae3Xey0qMR6Xied517n_4pPw/exec";

const GuestbookSection = ({ openDirectly = false }) => {
  const [entries, setEntries] = useState([]);
  const [isOpen, setIsOpen] = useState(openDirectly); // open immediately if true

  // Fetch guestbook entries from Google Sheets
  const fetchEntries = async () => {
    try {
      const response = await fetch(SCRIPT_URL);
      const data = await response.json();
      setEntries(data.reverse());
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Submit form data to Google Apps Script
  const handleFormSubmit = async (formData) => {
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Wait for Google Sheet to update
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Refresh entries
      await fetchEntries();

      // Close popup after submission
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="font-[Poppins] text-center px-4 py-10">
      {/* <h2 className="text-2xl font-semibold mb-4">Guest Book</h2> */}

      {/* Popup (always open if openDirectly = true) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[500px] max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-left">
              Fill out the form
            </h2>

            <GuestbookForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}

      {/* Entries List */}
      <div className="max-w-2xl mx-auto mt-10 text-left">
        <GuestbookEntries entries={entries} />
      </div>
    </section>
  );
};

export default GuestbookSection;

