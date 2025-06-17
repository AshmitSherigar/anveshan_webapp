import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const h1Ref = useRef();
  const topTextRef = useRef();
  const bottomTextRef = useRef();
  const scrollRef = useRef();
  const aboutTextRef = useRef();
  const dateRef = useRef();

  const today = new Date();
  const currentDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        h1Ref.current,
        { scale: 0.5, y: 60, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'back.out(1.7)',
        }
      );

      gsap.from(topTextRef.current, {
        y: -30,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(bottomTextRef.current, {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(dateRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -40,
        ease: 'none',
      });

      gsap.from(aboutTextRef.current.children, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main
        ref={heroRef}
        className="relative min-h-screen w-full font-sans text-black bg-white overflow-hidden"
      >
        <div
          ref={dateRef}
          className="absolute top-20 right-10 text-sm tracking-widest text-gray-600 uppercase hero-text"
        >
          {currentDate}.
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl uppercase font-medium tracking-widest hero-text">
          <h1 ref={h1Ref} className="px-7 py-3 flex items-center justify-center">
            Anveshan
          </h1>
        </div>

        <div
          ref={topTextRef}
          className="absolute top-[30%] left-10 text-gray-500 tracking-wide text-lg"
        >
          Explore. Innovate. Lead.
        </div>

        <div
          ref={bottomTextRef}
          className="absolute bottom-[25%] right-10 text-gray-500 tracking-wide text-lg"
        >
          Join the AI/ML revolution.
        </div>

        <div
          ref={scrollRef}
          onClick={scrollToAbout}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm uppercase tracking-widest text-gray-500 animate-bounce cursor-pointer hover:text-black hover:tracking-[0.2em] transition-all"
        >
          Scroll Down ↓
        </div>
      </main>

      <section
        id="about-section"
        ref={aboutRef}
        className="min-h-screen w-full text-black px-12 py-24 flex flex-col justify-center"
      >
        <div ref={aboutTextRef} className="max-w-5xl mx-auto space-y-10 text-lg leading-loose">
          <h2 className="text-4xl text-white font-bold border-b pb-4 border-gray-600 uppercase tracking-wide">
            Exploring the Frontiers of AI and ML
          </h2>

          <p>
            Welcome to <strong>ANVESHAN</strong>, the AI, ML, and Research Club of The National Institute of Engineering.
            Our mission is to empower students and enthusiasts by providing a platform where they can explore the latest advancements
            in artificial intelligence and machine learning. We believe in the power of technology to transform lives and solve
            real-world challenges, and our club is dedicated to fostering innovation and collaboration in this exciting field.
          </p>

          <p>
            At <strong>ANVESHAN</strong>, we engage in various projects that leverage AI and ML technologies, focusing on practical
            applications that can make a difference. We encourage our members to dive deep into research, share their findings,
            and contribute to the growing body of knowledge. Through workshops, discussions, and collaborative projects, we aim to
            inspire the next generation of tech leaders.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
