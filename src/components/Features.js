import React from "react";

const Features = () => {
  const features = [
    {
      title: "Pelatihan Dasar",
      desc: "Keterampilan seperti dribbling, shooting, passing, dan defending.",
      imageUrl:
        "https://i.ytimg.com/vi/2qjdpW0XLSk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBEcZTmycMecU2BTd7VVnVRuUDFGA",
      videoUrl: "https://youtu.be/2qjdpW0XLSk", // Example YouTube link
    },
    {
      title: "Latihan Fisik dan Mental",
      desc: "Meningkatkan kebugaran, kecepatan, dan sportivitas.",
      imageUrl:
        "https://i.ytimg.com/vi/dBzVfuQxwso/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAix9ORDKKcWcFMFT8I-YuHuxw0Cw", // Replace with actual image URL
      videoUrl: "https://www.youtube.com/watch?v=myHBC_K2eL4", // Example YouTube link
    },
    {
      title: "Kompetisi dan Turnamen",
      desc: "Memberikan pengalaman pertandingan nyata.",
      imageUrl:
        "https://i.ytimg.com/vi/3Q77lb97E5Q/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEcgYChlMA8=&rs=AOn4CLDvHhVmeG9B_qpjg6gdPCSAq8Qqnw", // Replace with actual image URL
      videoUrl: "https://www.youtube.com/watch?v=3Q77lb97E5Q", // Example YouTube link
    },
  ];

  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-br from-width-500 to-blue-700 text-black relative overflow-hidden"
    >
      {/* Corak Bintik-Bintik */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Kenapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg transition-all hover:shadow-xl"
            >
              {/* Wrap image in a clickable link */}
              <a
                href={feature.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="mx-auto mb-4 w-full h-48 object-cover rounded-lg transform hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
