// src/components/Navigation.jsx
import React from 'react';
import logo2 from "../assets/images/logo-removebg-preview.png";

const Navigation = ({ scrollTo }) => {
  return (
    <div className='h-[9vh] w-full top-0 left-0 absolute z-50 flex items-center justify-between px-10'>
      <div className='flex items-center justify-between'>
        <img className='h-[10vh] w-[10vh]' src={logo2} alt="logo" />
        <h1 className='uppercase text-2xl'>Anveshan</h1>
      </div>

      <div className='flex items-center justify-between w-[45vw]'>
        <h1 className='cursor-pointer' onClick={() => scrollTo("about")}>About Us</h1>
        <h1 className='cursor-pointer' onClick={() => scrollTo("events")}>Events</h1>
        <h1 className='cursor-pointer' onClick={() => scrollTo("projects")}>Projects</h1>
        <h1 className='cursor-pointer' onClick={() => scrollTo("resources")}>Resources</h1>
        <h1 className='cursor-pointer' onClick={() => scrollTo("members")}>Members</h1>
        <h1 className='cursor-pointer' onClick={() => scrollTo("contact")}>Contact</h1>
      </div>
    </div>
  );
};

export default Navigation;
