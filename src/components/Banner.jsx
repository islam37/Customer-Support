import React from "react";
import img1 from "../assets/vector1.png";
import img2 from "../assets/vector2.png";

const banners = [
  {
    title: "In-Progress",
    count: 0,
    gradient: "bg-gradient-to-r from-purple-500 to-purple-700",
    image: img1,
  },
  {
    title: "Resolved",
    count: 0,
    gradient: "bg-gradient-to-r from-indigo-500 to-indigo-700",
    image: img2,
  },
];

function Banner() {
  return (
    <section className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 gap-4 md:gap-6">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`relative flex-1 flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:h-40 rounded-xl ${banner.gradient} overflow-hidden`}
        >
          {/* Text overlay */}
          <div className="absolute left-4 sm:left-6 top-4 sm:top-6 text-white">
            <p className="text-sm sm:text-base opacity-80">{banner.title}</p>
            <p className="text-2xl sm:text-3xl font-bold mt-2">{banner.count}</p>
          </div>

          {/* Background vector image */}
          <img
            src={banner.image}
            alt={`${banner.title} vector`}
            className="absolute right-0 bottom-0 h-full opacity-20 object-contain"
          />
        </div>
      ))}
    </section>
  );
}

export default Banner;
