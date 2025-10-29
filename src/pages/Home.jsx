import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import GuestbookEntries from "../components/GuestbookEntries";
import GuestbookPopup from "../components/GuestbookPopup";
import Gallery from "../components/Gallery";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx2bv89IkvmNJt8OOXT-QnArKMJpNMuMVJ_lPX4X-Z34gae3Xey0qMR6Xied517n_4pPw/exec";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Fetch entries from Google Sheets
  const fetchEntries = async () => {
    try {
      const response = await fetch(SHEET_URL);
      const data = await response.json();
      setEntries(Array.isArray(data) ? data.reverse() : []);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* MEMORIES Section */}
      <section
        id="memories"
        className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10"
      >
        {/* ✅ Popup appears when “form” is clicked */}
        {showPopup && (
          <GuestbookPopup
            onClose={() => {
              setShowPopup(false);
              fetchEntries(); // ✅ Refresh entries after closing popup
            }}
          />
        )}

        {/* ✅ Entries Section */}
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0 text-center">
          <div className="">
            <GuestbookEntries entries={entries} onOpenForm={() => setShowPopup(true)} />
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0 text-center">
          <Gallery />
        </div>
      </section>
    </>
  );
};

export default Home;
