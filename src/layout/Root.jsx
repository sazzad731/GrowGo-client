import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
const Root = () => {
  return (
    <div className='bg-bgLight dark:bg-bgDark font-inter'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Root;