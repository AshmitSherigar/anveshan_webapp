import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import DotGrid from './DotGrid';
import Footer from './Footer';
import Masonry from './Masonry';
import imageReq from '../assets/images/110-600x860-grayscale.jpg';
import Logo from "../assets/images/logo-removebg-preview.png"
const About = () => {
  const sectionRef = useRef(null); // Hero section
  const animatedHeadingRef = useRef(null);

  const [showMasonry, setShowMasonry] = useState(false);

  const items = [
    { id: "1", img: imageReq, url: "https://example.com/one", height: 400 },
    { id: "2", img: imageReq, url: "https://example.com/two", height: 500 },
    { id: "3", img: imageReq, url: "https://example.com/three", height: 650 },
    { id: "4", img: imageReq, url: "https://example.com/four", height: 300 },
    { id: "5", img: imageReq, url: "https://example.com/five", height: 270 },
    { id: "6", img: imageReq, url: "https://example.com/six", height: 650 },
    { id: "7", img: imageReq, url: "https://example.com/seven", height: 300 },
    { id: "8", img: imageReq, url: "https://example.com/eight", height: 600 },
    { id: "9", img: imageReq, url: "https://example.com/nine", height: 200 },
    { id: "10", img: imageReq, url: "https://example.com/ten", height: 700 },
    { id: "11", img: imageReq, url: "https://example.com/eleven", height: 400 },
    { id: "12", img: imageReq, url: "https://example.com/twelve", height: 500 },
    { id: "13", img: imageReq, url: "https://example.com/thirteen", height: 400 },
    { id: "14", img: imageReq, url: "https://example.com/fourteen", height: 300 },
    { id: "15", img: imageReq, url: "https://example.com/fifteen", height: 300 },
    { id: "16", img: imageReq, url: "https://example.com/sixteen", height: 250 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        animatedHeadingRef.current,
        {
          x: window.innerWidth / 2 + 300,
          y: window.innerHeight / 2,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      ).to(animatedHeadingRef.current, {
        y: -400,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setShowMasonry(true); // Trigger Masonry load
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {


    if (showMasonry) {
      const timeout = setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        // localStorage.setItem('masonryScroll', 'true');
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [showMasonry]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-black text-white px-8 md:px-24 py-24 font-sans border-b"
      >
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={20}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={100}
            shockRadius={200}
            shockStrength={5}
            resistance={100}
            returnDuration={1}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full space-y-12">
          <h1 className="text-5xl md:text-8xl font-bold">Welcome to Anveshan</h1>

          <p className="text-lg md:text-xl w-full md:w-3/4 text-gray-300 leading-relaxed">
            Dive into the world of AI and Machine Learning with our dynamic community-driven club.
            Anveshan empowers students to explore, experiment, and excel with hands-on projects, workshops, and real-world challenges.
          </p>

          <button className="px-8 py-3 bg-white text-black rounded-xl shadow-lg border hover:scale-105 transition">
            Join Us
          </button>

          <p className="text-sm text-gray-300 max-w-xl mt-1">
            “The future belongs to those who learn more skills and combine them in creative ways.” – Robert Greene
          </p>
        </div>

      </section>

      {/* Masonry Section */}
      <section

        className="relative bg-black py-32 px-4 md:px-24 min-h-[100vh] overflow-hidden"
      >
        <h2
          ref={animatedHeadingRef}
          className="text-3xl md:text-5xl font-semibold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-center"
        >
          What We Do – In Visuals
        </h2>

        <div className="h-[100vh]">
          {showMasonry && (
            <Masonry
              items={items}
              animateFrom="bottom"
              blurToFocus
              scaleOnHover
              colorShiftOnHover
            />
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={true} />
    </>
  );
};

export default About;
