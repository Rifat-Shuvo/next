import Image from 'next/image';
import React from 'react';
import image from "../../../public/images/image.jpg";
const Banner = () => {
  return (
    <div className=' min-h-screen'>
      
    <div className='flex flex-col-reverse justify-center items-center md:flex-row gap-5 rounded-md bg-white p-5'>


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
    <div className='xl:mt-24'>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d5f4df" fillOpacity="1" d="M0,256L16,261.3C32,267,64,277,96,272C128,267,160,245,192,208C224,171,256,117,288,80C320,43,352,21,384,48C416,75,448,149,480,202.7C512,256,544,288,576,256C608,224,640,128,672,112C704,96,736,160,768,186.7C800,213,832,203,864,170.7C896,139,928,85,960,85.3C992,85,1024,139,1056,144C1088,149,1120,107,1152,96C1184,85,1216,107,1248,149.3C1280,192,1312,256,1344,245.3C1376,235,1408,149,1424,106.7L1440,64L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
    </div>
    </div>
  );
};

export default Banner;