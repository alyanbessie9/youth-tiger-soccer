import React, { useEffect, useState, useRef } from "react";

const Schedule = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Create a reference for the section
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when the section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const currentSection = sectionRef.current; // Copy ref to a variable

    if (currentSection) {
      observer.observe(currentSection);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      id="schedule"
      className="py-16 bg-gradient-to-br from-green-300 to-green-700 text-white relative overflow-hidden"
      ref={sectionRef} // Attach the reference to the section
    >
      {/* Corak Bintik-Bintik */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

      {/* Konten Jadwal */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2
          className={`text-4xl font-extrabold text-center mb-8 text-shadow-lg tracking-widest relative transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          } duration-1000 ease-out`}
        >
          Jadwal{" "}
          <span className="text-yellow-300 underline decoration-dotted">
            Latihan
          </span>
          <span className="absolute -top-4 left-[50%] transform -translate-x-[50%] text-sm font-bold text-gray-200 tracking-wide">
            Fun & Fit Training
          </span>
        </h2>

        <div
          className={`flex justify-center items-center transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          } duration-1000 ease-out`}
        >
          <div className="relative w-96 h-96 rounded-full bg-white flex items-center justify-center p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-400 rounded-full opacity-30"></div>
            <div className="text-center">
              <p className="text-lg font-bold text-green-800 mb-4">Selasa</p>
              <p className="text-gray-700 mb-6">16.00–18.00 WIB</p>
              <p className="text-lg font-bold text-green-800 mb-4">Kamis</p>
              <p className="text-gray-700 mb-6">16.00–18.00 WIB</p>
              <p className="text-lg font-bold text-green-800 mb-4">Minggu</p>
              <p className="text-gray-700">08.00–10.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
