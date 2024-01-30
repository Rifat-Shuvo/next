import Image from 'next/image';
import React from 'react';
import image from "../../../public/images/image.jpg";
const Banner = () => {
  return (
    <div className='flex flex-col-reverse justify-center items-center md:flex-row gap-5 rounded-md bg-white p-5 min-h-screen shadow-lg'>


    <div className='md:w-1/2 p-5 text-center md:px-12 text-green-500'>
      
        <h1 className='text-3xl font-semibold'>Welcome To The Country Biggest Online Library.</h1>
        <p className='text-justify font-medium my-5'>Read More Than a Thosand Of Books Totally free. Enrich Your Mind With the Magic Of OnLiB. Make OnLiB Your Knowledge Partner.</p>
        <button  className='btn bg-green-500 text-white'>Read Now</button>
        
    </div>

      <div className='md:w-1/2'>
        <Image
        className='rounded-lg'
          quality={100}
          src={image}
          alt='cover image' />
      </div>


    </div>
  );
};

export default Banner;