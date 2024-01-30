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
        <div className={isScrolled? 'flex flex-wrap gap-5 justify-center items-center bg-white shadow-xl bg-opacity-85 z-10 rounded-full text-green-500 font-semibold py-2 m-2 sticky top-3' : 'hidden'}>
            
                <p>Home</p>
                <p>Book list</p>
                <p className='hidden md:block'>Testimonial</p>
                <p className='hidden md:block'>Terms & Conditions</p>
                <p className='hidden md:block'>Contact</p>
                <button className={isScrolled? 'btn bg-green-500 text-white rounded-xl p-2' : 'hidden'}>Shop Now</button>
           
        </div>
    );
};

export default Menubar;