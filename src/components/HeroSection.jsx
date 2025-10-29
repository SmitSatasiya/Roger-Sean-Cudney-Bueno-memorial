// import React, { useState } from "react";
// import img1 from "../assets/f1.jpg";
// import GuestbookSection from "../components/GuestbookSection";

// const HeroSection = () => {
//   const [showGuestbook, setShowGuestbook] = useState(false);

//   const handleOpenGuestbook = (e) => {
//     e.preventDefault();
//     setShowGuestbook(true);
//   };

//   const handleCloseGuestbook = () => {
//     setShowGuestbook(false);
//   };

//   return (
//     <>
//       <section className="flex flex-col items-center justify-center text-center font-[Poppins] w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0 py-10 md:py-20">
//         {/* Profile Image */}
//         <div className="w-[180px] h-[180px] md:w-[326px] md:h-[326px] rounded-full overflow-hidden mb-8">
//           <img
//             src={img1}
//             alt="Roger Sean Cudney Bueno"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Name */}
//         <h1 className="text-[24px] md:text-[34px] font-medium mb-[22px] md:mb-[42px]">
//           Roger Sean Cudney Bueno
//         </h1>

//         {/* Description */}
//         <div className="text-black space-y-6">
//           <p className="text-[16px] md:text-[18px] leading-relaxed">
//             Professor Sayan Mukherjee, 54, passed away in Leipzig, Germany, on
//             March 31, 2025. Sayan loved music, food and cooking (especially for
//             others), funny t-shirts (sometimes on the border of good taste), and
//             working with his colleagues and students. He took great joy in
//             translating between ideas from different fields and in sharing this
//             love with his students. And he especially loved being a father to his
//             son, Kiran.
//           </p>

//           <p className="text-[16px] md:text-[18px] leading-relaxed">
//             Born March 8, 1971, in Kolkata, India, Sayan spent the very early
//             years of his life in France, Canada, and then in various parts of the
//             US from grade school onwards. After completing his undergraduate
//             degree in electrical engineering at Princeton University in 1992, he
//             went on to do research at the Los Alamos National Labs and Columbia
//             University resulting in a MS in Applied Physics and Mathematics in
//             1996. Sayan received his PhD from MIT Brain and Cognitive Sciences in
//             2001 and worked at MIT and the Broad Institute on a Sloan Postdoctoral
//             Fellowship. From 2004 to 2022, he was at Duke University, Durham,
//             North Carolina. In 2008, he received a Young Researcher Award from the
//             International Indian Statistical Association, and in 2018, he became a
//             Fellow of the Institute of Mathematical Statistics. In 2022, he joined
//             Leipzig University as a Humboldt Professor and the Max Planck
//             Institute for Mathematics in the Sciences as a Fellow. Sayan was a
//             member of various international professional societies.
//           </p>

//           <p className="text-[16px] md:text-[18px] leading-relaxed">
//             A celebration of life followed by a reception with lunch was held for
//             family, friends, colleagues, and students at Duke University in
//             Durham, North Carolina on Saturday, April 19, 2025 at 10:30 am in
//             Gross Hall 107. The program can be found{" "}
//             <a
//               href="#"
//               className="text-blue-600 underline"
//               onClick={handleOpenGuestbook}
//             >
//               Here
//             </a>
//             .
//           </p>

//           <p className="text-[16px] md:text-[18px] leading-relaxed">
//             For those unable to attend in person, a recording of the service can
//             be found{" "}
//             <a
//               href="#"
//               className="text-blue-600 underline"
//               onClick={handleOpenGuestbook}
//             >
//               Here
//             </a>
//             .
//           </p>
//         </div>
//       </section>

//       {/* Popup Guestbook Modal */}
//       {showGuestbook && (
//         <div id="guestbook-form">
//           <GuestbookSection openDirectly={true} />
//         </div>
//       )}
//     </>
//   );
// };

// export default HeroSection;


import React, { useState } from "react";
import img1 from "../assets/f1.jpg";
import GuestbookPopup from "../components/GuestbookPopup"; // ✅ use new popup

const HeroSection = () => {
  const [showGuestbook, setShowGuestbook] = useState(false);

  const handleOpenGuestbook = (e) => {
    e.preventDefault();
    setShowGuestbook(true);
  };

  const handleCloseGuestbook = () => {
    setShowGuestbook(false);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center font-[Poppins] w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0 py-10">
        {/* Profile Image */}
        <div className="w-[180px] h-[180px] md:w-[326px] md:h-[326px] rounded-full overflow-hidden mb-8">
          <img
            src={img1}
            alt="Roger Sean Cudney Bueno"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[24px] md:text-[34px] font-medium mb-[22px] md:mb-[42px]">
          In memory of Roger Sean Cudney Bueno
        </h1>

        {/* Description */}
        <div className="text-black space-y-6 text-[16px] md:text-[18px] leading-relaxed">
          <p>
            On July 29, 2025, a great scientist, teacher, husband, and father, Professor Roger
            Sean Cudney Bueno, passed away.
          </p>
          <p>
            Taking the best of three cultures — American, Spanish, and Mexican — Roger forged a
            truly unique personality. He possessed great intuition and imagination for research
            projects which, combined with his solid scientific background and dark sense of
            humor, made him a very distinctive person.
          </p>
          <p>
            He was born in Santa Monica, California, USA, and in 1967 moved with his family to
            Mexico City, where he completed his basic education and went on to earn a bachelor’s
            degree in Physics from UNAM. He continued his postgraduate studies at USC in Los
            Angeles, earning a Ph.D. in Electrical Engineering with a specialization in
            Electrophysics. After getting married, he moved to Zurich, Switzerland, for a
            postdoctoral position at ETH.
          </p>
          <p>
            Later, in March 1994, he returned to Mexico to work at CICESE in Ensenada, Baja
            California, where he conducted research, taught classes, and supervised master’s and
            doctoral students.
          </p>
          <p>
            While living and working at CICESE, he spent several periods abroad, collaborating
            with colleagues at Exeter University in Great Britain and returning to ETH Zurich.
            He gave several keynote talks — one example being “La luz como chismosa sutil pero
            confiable,” a title that reflects his very particular sense of humor.
          </p>
          <p>
            Throughout his life, he had many passions besides physics. He was also a skilled
            photographer, a luthier, a guitar player, and an excellent cook. He made the best
            cheesecake with an almond crust.
          </p>
        </div>

        {/* Celebration */}
        {/* <div className="mt-10 text-start">
          <h2 className="text-[36px] font-semibold text-black mb-6">Celebration of Life </h2>
          <p className="text-[18px] font-normal mb-6">Professor Sayan Mukherjee, 54, passed away in Leipzig, Germany, on March 31, 2025. Sayan loved music, food and cooking (especially for others), funny t-shirts (sometimes on the border of good taste), and working with his colleagues and students. He took great joy in translating between ideas from different fields and in sharing this love with his students. And he especially loved being a father to his son, Kiran.</p>

          <h2 className="text-[28px] font-semibold mb-6">Program</h2>
          <p className="text-[18px] font-normal mb-6">A musical prelude and slideshow will begin at 10 am. The program will begin at 10:30 am.</p>

          <div className="flex justify-start sm:justify-start gap-12 sm:gap-24 mb-6 text-left">
            <div className="flex flex-col text-lg space-y-2 font-normal">
              <p>Opening Words</p>
              <p>Eulogy</p>
              <p>Words of Remembrance</p>
              <p>Remembrances</p>
            </div>

            <div className="flex flex-col text-lg space-y-2 font-normal">
              <p>Tribute</p>
              <p>Reflections</p>
              <p>Poem Reading</p>
              <p>Closing Words</p>
            </div>
          </div>

          <p className="text-[18px] font-normal mb-6">Following the program, please join us for a reception and lunch on the first floor of Gross Hall.</p>
        </div> */}

      </section>

      {/* Popup Guestbook Modal */}
      {showGuestbook && <GuestbookPopup onClose={handleCloseGuestbook} />}
    </>
  );
};

export default HeroSection;
