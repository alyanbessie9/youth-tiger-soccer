import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-16 bg-gradient-to-br from-width-500 to-blue-700 text-black relative overflow-hidden"
    >
      {/* Corak Bintik-Bintik */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

      {/* Konten Contact */}
      <motion.div
        className="container mx-auto px-6 md:px-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-shadow-lg tracking-widest">
          Hubungi{" "}
          <span className="text-yellow-300 underline decoration-dotted">
            Kami
          </span>
        </h2>

        {/* Detail Kontak */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h4 className="text-2xl font-bold mb-4">YouthTigerSoccerSchool</h4>
            <p className="text-lg font-light mb-4">
              Temukan bakatmu, kembangkan skill, dan raih impianmu bersama{" "}
              <span className="text-yellow-300">YouthTigerSoccerSchool</span>.
            </p>
            <p className="mb-4">Kabupaten Bogor, Indonesia</p>
            <p className="mb-4">Phone: 08046400274</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="underline hover:text-yellow-300">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="underline hover:text-yellow-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#stadium" className="underline hover:text-yellow-300">
                  Stadion Elang Bondol
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Ikuti Kami */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-2xl font-bold mb-4">Ikuti Kami</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-4xl hover:text-yellow-300 transition duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-4xl hover:text-yellow-300 transition duration-300" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-4xl hover:text-yellow-300 transition duration-300" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
