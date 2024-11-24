"use client";
import { url } from "inspector";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const about = () => {

  useEffect(() => {
    AOS.init({
     duration:1000,
     once: true,
    })
  },[])
  return (
      <section
        className="about h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/about-pic2.jpg)" }}
      >
        <div className="bg-black ml-16 bg-opacity-60 p-8 rounded-md max-w-lg">
          <h2 className="text-4xl text-white font-bold mb-4" data-aos="fade-up" >About Us</h2>
          <p className="text-white font-sans" data-aos="fade-down">
            Welcome to WatchWorld, where style meets timeless precision. Our
            curated collection features high-quality watches crafted for every
            occasion. Each piece combines innovative design with lasting
            elegance to complement your unique journey. Discover the perfect
            watch to elevate your moments with WatchWorld.
          </p>
        </div>
      </section>
    
  );
};

export default about;
