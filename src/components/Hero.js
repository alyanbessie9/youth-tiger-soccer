import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for fade-in effect
    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <section
      id="home"
      className={`bg-cover bg-center text-white py-20 relative z-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(45deg, #000 25%, transparent 25%) -50px 0, linear-gradient(-45deg, #000 25%, transparent 25%) -50px 0, linear-gradient(45deg, transparent 75%, #000 75%) 0px 0, linear-gradient(-45deg, transparent 75%, #000 75%) 0px 0",
        backgroundSize: "100px 100px",
        backgroundColor: "#1a1a1a",
      }}
    >
      <img
        src="https://futscore.com/assets/img/logo.png"
        alt="Youth Tiger Soccer"
        className="w-[6rem] h-auto mt-[-5rem] ml-[3rem]"
      />
      <div className="container mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight text-shadow-lg animate__animated animate__fadeInUp">
          Youth Tiger Soccer School
        </h1>

        <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-lg mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          Program pelatihan sepak bola terbaik untuk anak usia 4-20tahun.
        </p>

        <button className="mt-6 px-8 py-3 bg-yellow-500 text-blue-600 font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105">
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;
