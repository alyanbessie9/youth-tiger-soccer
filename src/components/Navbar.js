import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "animate.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for fade-in effect
    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-red-600 text-white py-5 z-20 fixed transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } top-0 left-0 w-full`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <img
          src="https://futscore.com/assets/img/logo.png"
          alt="Youth Tiger Soccer"
          className="w-[4rem] h-[4rem]"
        />
        <h1 className="text-2xl font-bold text-yellow-400"> </h1>

        <button
          className="lg:hidden text-white focus:outline-none relative"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${isMenuOpen ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`${isMenuOpen ? "block" : "hidden"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-14 right-0 bg-blue-400 text-white rounded-md w-48 transition-all ${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden z-50`}
        >
          <ul className="space-y-2 p-4">
            <li className="hover:text-yellow-400 text-center">
              <a href="#home">Beranda</a>
            </li>
            <li className="hover:text-yellow-400 text-center">
              <a href="#about">Tentang Kami</a>
            </li>
            <li className="hover:text-yellow-400 text-center">
              <a href="#schedule">Jadwal</a>
            </li>
            <li className="hover:text-yellow-400 text-center">
              <a href="#contact">Kontak</a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">
            Beranda
          </a>
          <a href="#about" className="hover:text-yellow-400">
            Tentang Kami
          </a>
          <a href="#schedule" className="hover:text-yellow-400">
            Jadwal
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
