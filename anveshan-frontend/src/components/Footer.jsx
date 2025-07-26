import TextPressure from './TextPressure';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6';
import TrueFocus from './TrueFocus';

const Footer = ({ darkMode, scrollTo }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${darkMode ? `bg-black text-white` : `bg-white text-black`} pt-16 border-t-2`}>
      <div className='flex items-center justify-between px-6'>
        <h1 className='w-1/2 font-medium text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolore possimus modi, labore veritatis reiciendis distinctio aliquam illo
        </h1>

        <TrueFocus
          sentence="Unlock Your Potential"
          manualMode={false}
          blurAmount={5}
          borderColor="grey"
          animationDuration={1}
          pauseBetweenAnimations={0.4}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-between text-center border-1 border-gray-200 px-30 py-8">
        <div className="flex justify-center items-center flex-col gap-0 mb-4 text-xl text-gray-500 space-y-1">
          {["hero", "about", "events", "projects", "resources", "members"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="hover:text-black hover:underline transition duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className='text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>

        <div>
          <div className="flex justify-center gap-3 mb-4 text-2xl text-gray-500">
            <a href="#" className="hover:text-black hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-black hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-black hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-500">© {year} ANVESHAN. All rights reserved.</p>
        </div>
      </div>

      <div style={{ position: 'relative', height: '300px' }}>
        <TextPressure
          text="Anveshan"
          flex={false}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={false}
          textColor={darkMode ? "#fff" : "#000"}
          strokeColor="lightgrey"
          minFontSize={10}
        />
      </div>
    </footer>
  );
};

export default Footer;
