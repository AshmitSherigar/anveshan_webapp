import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);
  const titleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title parallax float
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Paragraphs fade in one by one
      linesRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reset',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: index * 0.2,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-black text-white py-24 px-8 md:px-24 font-sans"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(/grid-pattern.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-semibold uppercase tracking-wide mb-6"
        >
          Exploring the Frontiers of AI and ML
        </h2>
        <div className="w-24 h-[2px] mx-auto bg-gray-400 mb-10 glow-line"></div>

        <p
          ref={(el) => (linesRef.current[0] = el)}
          className="text-gray-300 text-lg leading-relaxed mb-6"
        >
          Welcome to <span className="text-white font-medium">ANVESHAN</span>, the AI, ML, and
          Research Club of The National Institute of Engineering. Our mission is to empower
          students and enthusiasts by providing a platform to explore advancements in artificial
          intelligence and machine learning.
        </p>
        <p
          ref={(el) => (linesRef.current[1] = el)}
          className="text-gray-300 text-lg leading-relaxed mb-6"
        >
          We believe in the power of technology to transform lives and solve real-world challenges.
          Our club fosters innovation, curiosity, and collaboration in this fast-evolving field.
        </p>
        <p
          ref={(el) => (linesRef.current[2] = el)}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Through projects, research, workshops, and competitions, ANVESHAN empowers students to
          lead the AI revolution and build meaningful solutions that matter.
        </p>
      </div>
    </section>
  );
};

export default About;
