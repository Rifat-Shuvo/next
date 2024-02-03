'use client'
import React, { useEffect, useState } from 'react';

const Menubar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={isScrolled ? 'flex flex-wrap gap-5 justify-center items-center bg-white shadow-xl bg-opacity-85 z-10 rounded-full text-green-500 font-semibold py-2 m-2 sticky top-3' : 'hidden'}>

      <ul className='list-none flex gap-5 items-center'>
        <li>Home</li>
        <li>Book list</li>
        <li className='hidden md:block'>Testimonial</li>
        <li className='hidden md:block'>Terms & Conditions</li>
        <li className='hidden md:block'>Contact</li>
        <li><button className={isScrolled ? 'btn bg-green-500 text-white rounded-xl p-2' : 'hidden'}>Shop Now</button></li>
      </ul>

    </div>
  );
};

export default Menubar;