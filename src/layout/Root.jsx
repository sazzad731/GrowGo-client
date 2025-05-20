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
      } bg-bgLight dark:bg-bgDark font-inter`}
    >
      <Navbar setTheme={setTheme} theme={theme} />
      <main className="max-w-[100rem] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;