import React, { useEffect, useState, useRef } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Create a reference for the section
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when section comes into view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    // Store the current reference value in a local variable
    const currentSection = sectionRef.current;

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
      id="about"
      className="py-16 bg-gradient-to-br from-width-500 to-blue-700 text-black relative overflow-hidden"
      ref={sectionRef} // Attach the reference to the section
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8">Tentang Kami</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Visi */}
          <div
            className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            } duration-1000 ease-out`}
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-4">Visi</h3>
            <p className="text-lg font-light">
              Menjadi pusat pengembangan bakat sepak bola yang unggul dan
              berkelanjutan, dengan fokus pada pembentukan karakter dan
              kemampuan teknis pemain muda di Indonesia.
            </p>
          </div>

          {/* Misi */}
          <div
            className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            } duration-1000 ease-out`}
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Misi</h3>
            <ul className="list-disc list-inside text-lg font-light">
              <li>
                Menyediakan pelatihan sepak bola berkualitas untuk pemain muda.
              </li>
              <li>
                Memberikan kesempatan untuk bertanding di turnamen profesional.
              </li>
              <li>
                Menumbuhkan rasa sportivitas dan kepercayaan diri di setiap
                pemain.
              </li>
              <li>Membangun komunitas sepak bola yang solid dan inklusif.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Komitmen Kami</h3>
          <p className="text-lg font-light">
            Kami berkomitmen untuk memberikan pengalaman pelatihan terbaik bagi
            setiap pemain, dengan pendekatan yang personal dan berbasis pada
            pengembangan kemampuan fisik, mental, dan teknis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
