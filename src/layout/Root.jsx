import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
const Root = () => {
  const [ theme, setTheme ] = useState("");
  return (
    <div
      className={`${
        theme === "dark" && "dark"
      } bg-lightGreen dark:bg-greenPrimary font-inter`}
    >
      <Navbar setTheme={setTheme} theme={theme} />
      <main className="max-w-[100rem] mx-auto lg:px-0 px-3 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;