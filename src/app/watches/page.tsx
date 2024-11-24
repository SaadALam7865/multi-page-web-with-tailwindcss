"use client";
import { title } from "process";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const watchesData = [
  {
    name: "Rolex",
    id: 1,
    title: "Luxury Watch",
    price: 12000,
    img: "/img-1.jpg",
  },
  {
    name: "Omega",
    id: 2,
    title: "Sporty Design",
    price: 8000,
    img: "/img-2.jpg",
  },
  {
    name: "Patek Philippe",
    id: 3,
    title: "Elegant timepiece",
    price: 6000,
    img: "/img3.jpg",
  },
  {
    name: "Tag Heuer",
    id: 4,
    title: "Sporty and Stylish",
    price: 5000,
    img: "/img-4.jpg",
  },
  {
    name: "Breitling",
    id: 5,
    title: "Bold and rugged",
    price: 11000,
    img: "/img-5.jpg",
  },
  {
    name: "Seiko",
    id: 6,
    title: "Reliable & Affordable",
    price: 9000,
    img: "/img-7.jpg",
  },
];

const watches = () => {

  useEffect(() => {
    AOS.init({
     duration:2000,
     once: true,
    })
  },[])
  return (
      <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10 " data-aos="fade-up">
        {watchesData.map((watch) => (
          <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center" data-aos="fade-up">
           <img  src={watch.img} alt={watch.name}  className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"  />
           <h3 className="mt-4 text-2xl font-bold" data-aos="fade-right">{watch.name}</h3>
           <p className="text-gray-500" data-aos="fade-left">{watch.title}</p>
           <div  className="price text-blue-500 text-xl font-semibold mt-2" data-aos="fade-right">${watch.price}</div>
           <button className="mt-4 hover:bg-blue-600 transform transition-all duration-300 hover:scale-110  bg-blue-500 px-8 py-2 text-white rounded-full border-none"  data-aos="fade-up">Add to Cart</button>
          </div>
        ))}
      </div>
    
  );
};

export default watches;
