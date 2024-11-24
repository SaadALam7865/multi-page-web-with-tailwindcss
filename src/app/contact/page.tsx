"use client";
import React from 'react'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const contact = () => {

  useEffect(() => {
    AOS.init({
     duration:1000,
     once: true,
    })
  },[])

  return (
    <div>
        <section className='contact-form  border max-w-lg mx-auto my-20 p-8 bg-gradient-to-r from-pink-400 to to-blue-400 shadow-lg  rounded-md'>
          <h2 className='text-4xl font-bold mb-6 text-center hover:underline' data-aos="fade-up"><span >C</span>ontact Us</h2>
          <form >
            <input type="text" placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' required />
            <input type="email" placeholder= 'Email Address' className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' required />
            <input type="text"  placeholder='Phone Number'className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' required/>
            <textarea placeholder='Your Message...' className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' rows={5} required></textarea>
            <button className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600' type='submit'>Send Message</button>
          </form>
        </section>
    </div>
  )
}

export default contact;