import React from 'react';
import Heading from './Heading';
import Testicard from './testicard';

const Testimonial = () => {
    return (
        <div className='my-10'>
            <Heading subheading={'Our Users Feedback'} heading={'Testimonial'}></Heading>
            <div className='carousel'>
            <div id='slide1' className="carousel-item relative w-full card bg-green-50 text-green-500">
               <Testicard title={'A Treasure Trove of Knowledge'} desc={'OnLib boasts a collection that is nothing short of astounding. The sheer variety and depth of resources available are staggering, encompassing everything from academic journals and ebooks to historical documents and multimedia content. depth of resources available are staggering, encompassing everything from academic journals'} name={'Peterson'}/>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id='slide2' className="carousel-item relative w-full card bg-green-50 text-green-500">
               <Testicard title={'Effortless Accessibility, Anytime, Anywhere'} desc={"Gone are the days of being confined to the library's Öffnungszeiten. OnLiB grants me 24/7 access to its wealth of depth of resources available are staggering, encompassing everything from academic journals knowledge from the comfort of my own home or even while on the go."} name={'Micheal'}/>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id='slide3' className="carousel-item relative w-full card bg-green-50 text-green-500">
               <Testicard title={'User-Friendly Interface and Features'} desc={"OnLiB is a testament to user-centric design. The platform is intuitive and easy to navigate, even for those not familiar with online libraries. Features like note-taking tools,depth of resources available are staggering, encompassing everything from academic journals highlighting options, and bookmarking functions make it a pleasure to work with."} name={'Toeront'}/>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;