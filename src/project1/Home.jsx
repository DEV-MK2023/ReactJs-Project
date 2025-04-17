import React, { useState, useEffect } from "react";
import img1 from "../assets/a (1087).jpg";
import img2 from "../assets/a (123).jpg";
import img3 from "../assets/a (1010).jpg";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";



function Home() {
  const images = [img1, img2, img3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State for current image index
  const delay = 3000; // Timer delay in milliseconds (3 seconds)

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Set up the timer for auto-slide
  useEffect(() => {
    const timer = setInterval(nextImage, delay); // Move to the next image every 'delay' milliseconds

    // Clean up the timer when the component unmounts or state changes
    return () => clearInterval(timer);
  }, [currentIndex]); // Re-run only when currentIndex changes

  return (
    <div className="relative w-full h-[300px] md:h-[570px]">
      {/* Slider Images */}
      <img src={images[currentIndex]} alt="Slider Image" className="w-full h-full object-cover transition-all duration-500 ease-in-out" />
      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded"
      >
        <GrFormPrevious className="text-2xl" />

      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded"
      >
<MdNavigateNext className="text-2xl" />
</button>

      {/* Dots Indicator (Optional) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
