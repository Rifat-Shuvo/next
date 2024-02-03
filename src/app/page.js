import React from 'react';
import Nav from './components/Nav';
import Menubar from './components/Menubar';
import Banner from './components/Banner';
import Popular from './components/Popular';
import Why from './components/Why';
import Buy from './components/Buy';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

const page = () => {
  return (
    <div>
      <Nav></Nav>
      <Menubar></Menubar>
      <Banner></Banner>
      <Popular></Popular>
      <Why></Why>
      <Testimonial></Testimonial>
      <Buy></Buy>
      <Footer></Footer>
    </div>
  );
};

export default page;