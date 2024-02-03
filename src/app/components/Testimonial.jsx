'use client'
import React from 'react';
import Heading from './Heading';
// import Testicard from './testicard';
import Link from 'next/link';

const Testimonial = () => {
    return (
        <div className='my-32 px-3 pb-10'>
            <Heading subheading={'Our Users Feedback'} heading={'Testimonial'}></Heading>
            <div className='carousel'>
                <div id='slide1' className="carousel-item relative w-full card py-10 bg-green-50 text-green-500">
                    <div className='text-center'>
                        <div className='w-full md:w-3/4 mx-auto'>
                            <h1 className='text-xl'>A Treasure Trove of Knowledge</h1>
                            <p className='text-justify my-5 px-3'>OnLib boasts a collection that is nothing short of astounding. The sheer variety and depth of resources available are staggering, encompassing everything from academic journals and ebooks to historical documents and multimedia content. depth of resources available are staggering, encompassing everything from academic journals</p>
                            <p className='italic'>Feedback by Peterson</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide1" className="btn btn-circle">❮</Link>
                        <Link href="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                </div>

                <div id='slide2' className="carousel-item relative w-full card bg-green-50 text-green-500">
                    <div className='text-center'>
                        <div className='w-full md:w-3/4 mx-auto'>
                            <h1 className='text-xl'>Effortless Accessibility, Anytime, Anywhere</h1>
                            <p className='text-justify my-5 px-3'>Gone are the days of being confined to the librarys offnungszeiten. OnLiB grants me 24/7 access to its wealth of depth of resources available are staggering, encompassing everything from academic journals knowledge from the comfort of my own home or even while on the go.</p>
                            <p className='italic'>Feedback by Micheal</p>
                        </div>
                    </div>
                   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide1" className="btn btn-circle">❮</Link>
                        <Link href="#slide3" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id='slide3' className="carousel-item relative w-full card bg-green-50 text-green-500">
                    <div className='text-center'>
                        <div className='w-full md:w-3/4 mx-auto'>
                            <h1 className='text-xl'>User-Friendly Interface and Features</h1>
                            <p className='text-justify my-5 px-3'>OnLiB is a testament to user-centric design. The platform is intuitive and easy to navigate, even for those not familiar with online libraries. Features like note-taking tools,depth of resources available are staggering, encompassing everything from academic journals highlighting options, and bookmarking functions make it a pleasure to work with.</p>
                            <p className='italic'>Feedback by Toeront</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide2" className="btn btn-circle">❮</Link>
                        <Link href="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;