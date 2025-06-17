import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import Navigation from './Navigation';
const Preloader = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const loaderRef = useRef(null);
  const [rendered, setRendered] = useState(false);

  const nums = Array.from({ length: 11 }, (_, i) => (i % 10).toString()); 

  useLayoutEffect(() => {
    if (rendered) {
      const animate = (counter, duration, delay = 0) => {
        const numHeight = counter.querySelector('.num').clientHeight;
        const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;

        gsap.to(counter, {
          y: -totalDistance,
          duration: duration,
          delay: delay,
          ease: 'power2.inOut',
        });
      };

      // Animate counters
      animate(counter3Ref.current, 5);
      animate(counter2Ref.current, 6);
      animate(counter1Ref.current, 2, 4);

      // Animate digits out
      gsap.to('.digit', {
        top: '-150px',
        stagger: { amount: 0.25 },
        delay: 6,
        duration: 1,
        ease: 'power4.inOut',
      });

      // Loader bar animations
      gsap.from('.loader-1', {
        width: 0,
        duration: 6,
        ease: 'power2.inOut',
      });
      gsap.from('.loader-2', {
        width: 0,
        delay: 1.9,
        duration: 2,
        ease: 'power2.inOut',
      });

      // Loader morphs and exits
      gsap.to('.loader', {
        background: 'none',
        delay: 6,
        duration: 0.1,
      });
      gsap.to('.loader-1', {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 6,
      });
      gsap.to('.loader-2', {
        x: -75,
        y: 75,
        duration: 0.5,
        delay: 6,
      });
      gsap.to('.loader', {
        scale: 40,
        duration: 1,
        delay: 7,
        ease: 'power2.inOut',
      });
      gsap.to('.loader', {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        delay: 7,
        ease: 'power2.inOut',
      });
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.5,
        delay: 7.5,
        ease: 'power1.inOut',
      });
    }
  }, [rendered]);

  // Ensure JSX is rendered before running animations
  useLayoutEffect(() => {
    setRendered(true);
  }, []);

  return (
    <>
      {/* <div className="website z-10 relative">website content</div> */}
      {/* <Navigation /> */}

      <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black text-white pointer-events-none z-50">
        <div
          className="loader absolute top-1/2 left-1/2 w-[300px] h-[50px] flex transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(80,80,80)]"
          ref={loaderRef}
        >
          <div className="loader-1 bar bg-white relative w-[200px] h-[50px]"></div>
          <div className="loader-2 bar bg-white relative w-[100px] h-[50px]"></div>
        </div>

        <div
          className="counter fixed left-[50px] bottom-[50px] flex h-[100px] text-[100px] leading-[102px] font-normal overflow-hidden"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100px, 0 100px)' }}
        >
          <div className="counter-1 digit relative top-[-15px]" ref={counter1Ref}>
            {[0, 1].map((n, i) => (
              <div key={i} className="num">{n}</div>
            ))}
          </div>

          <div className="counter-2 digit relative top-[-15px]" ref={counter2Ref}>
            {nums.map((n, i) => (
              <div key={i} className="num">{n}</div>
            ))}
          </div>

          <div className="counter-3 digit relative top-[-15px]" ref={counter3Ref}>
            {nums.concat(nums).concat(["0"]).map((n, i) => (
              <div key={i} className="num">{n}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
