// Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamDisplay from './TeamDisplay';
import CircularText from './CircularText';
import Footer from './Footer';
import ProjectDisplay from './ProjectDisplay';
import CurvedLoop from './CurvedLoop';
import VariableProximity from './VariableProximity';
import Resources from './Resources';
import Navigation from './Navigation';
import EventsTabs from "./EventsTabs";
import useSectionRefs from "../hooks/useSectionRefs";
import logo2 from "../assets/images/logo-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/about");

  const containerRef = useRef(null);
  const h1Ref = useRef();
  const topTextRef = useRef();
  const bottomTextRef = useRef();
  const scrollRef = useRef();
  const aboutTextRef = useRef();
  const dateRef = useRef();

  const { refs, scrollTo } = useSectionRefs([
    "hero",
    "about",
    "events",
    "projects",
    "resources",
    "members",
    "contact"
  ]);

  const today = new Date();
  const currentDate = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  const fullHeading = "Exploring the Frontiers of AI and ML";
  const [typedHeading, setTypedHeading] = useState("E");

  useEffect(() => {
    let interval;
    const trigger = ScrollTrigger.create({
      trigger: refs.about.current,
      start: 'top 80%',
      end: 'bottom 20%',
      once: true,
      onEnter: () => {
        let i = 0;
        interval = setInterval(() => {
          i++;
          setTypedHeading(prev => prev + fullHeading[i]);
          if (i === fullHeading.length - 1) clearInterval(interval);
        }, 90);
      },
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        h1Ref.current.children,
        { scale: 0.2, y: -100, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'back.out(3)',
          stagger: 0.07
        }
      );

      gsap.from(topTextRef.current.children, {
        y: -40,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        stagger: 0.3,
        ease: 'ease'
      });

      gsap.to(dateRef.current, {
        scrollTrigger: {
          trigger: refs.about.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: -40,
        ease: 'none'
      });

      gsap.from(aboutTextRef.current.children, {
        scrollTrigger: {
          trigger: refs.about.current,
          start: 'top 80%'
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out'
      });
    });

    return () => {
      clearInterval(interval);
      trigger.kill();
      ctx.revert();
    };
  }, []);

  const events = [
    // ✅ UPCOMING EVENT
    {
      id: "upcoming-hackathon-2025",
      title: "Hackathon: Build for AI/ML – 24-Hour Challenge",
      description:
        "Join us on August 20 for an intense 24-hour AI/ML hackathon. Showcase your skills, collaborate with peers, and bring your ideas to life!",
      date: "2025-08-20T09:00:00+05:30", // IST time
      image: "https://unsplash.com/photos/black-flat-screen-tv-turned-on-displaying-man-in-black-suit-dJICd7b_LlE",
      registrationLink: "https://example.com/register-ai-hackathon",
      location: "NIE Innovation Lab",
      highlights: [
        "24-hour hackathon on AI/ML project ideas",
        "Exciting problem statements",
        "Mentorship from industry experts",
        "Prizes and certificates for winners",
      ]
    },

    // ✅ PREVIOUS EVENTS
    {
      id: "hackathon-2025-feb",
      title: "Hackathon: Innovate Next! 48-Hour Hackathon",
      description:
        "ANVESHAN’s first-ever 48-Hour Hackathon! Showcase your coding skills and come up with innovative solutions in AI, ML, and tech innovation.",
      date: "2025-02-25T09:00:00+05:30",
      image: "https://unsplash.com/photos/black-flat-screen-tv-turned-on-displaying-man-in-black-suit-dJICd7b_LlE",
      location: "NIE Innovation Lab",
      highlights: [
        "AI and ML-based problem statements",
        "Mentorship from industry experts",
        "Exciting prizes for top teams",
        "Live coding and rapid prototyping",
        "Closing ceremony with awards"
      ]
    },
    {
      id: "workshop-2025-jan",
      title: "Workshop: AI in the Real World with an Ex-NVIDIA Expert",
      description:
        "Hands-on workshop on practical AI applications, led by an Ex-NVIDIA AI Expert. Engage in real-world projects under expert guidance.",
      date: "2025-01-15T10:00:00+05:30",
      image: "https://unsplash.com/photos/black-flat-screen-tv-turned-on-displaying-man-in-black-suit-dJICd7b_LlE",
      location: "NIE Computer Science Lab",
      highlights: [
        "Introduction to advanced AI techniques",
        "Hands-on sessions with NVIDIA hardware",
        "Networking with industry professionals"
      ]
    },
    {
      id: "conference-2024-dec",
      title: "Conference / Symposium: Paper Presentation on AI and ML Innovations",
      description:
        "Symposium featuring paper presentations on cutting-edge research and emerging trends in AI and ML.",
      date: "2024-12-10T09:00:00+05:30",
      image: "https://unsplash.com/photos/black-flat-screen-tv-turned-on-displaying-man-in-black-suit-dJICd7b_LlE",
      location: "NIE Conference Hall, Mysuru",
      highlights: [
        "Paper presentations on AI/ML advancements",
        "Interactive Q&A sessions",
        "Panel discussions with industry experts",
        "Best paper awards"
      ]
    },
    {
      id: "conference-2025-dec",
      title: "Conference / Symposium: Paper Presentation on AI and ML Innovations",
      description:
        "Symposium featuring paper presentations on cutting-edge research and emerging trends in AI and ML.",
      date: "2024-12-10T09:00:00+05:30",
      image: "https://unsplash.com/photos/black-flat-screen-tv-turned-on-displaying-man-in-black-suit-dJICd7b_LlE",
      location: "NIE Conference Hall, Mysuru",
      highlights: [
        "Paper presentations on AI/ML advancements",
        "Interactive Q&A sessions",
        "Panel discussions with industry experts",
        "Best paper awards"
      ]
    },
    {
      id: "anveshan-opening-2024-oct",
      title: "Opening Ceremony of ANVESHAN",
      description:
        "Official launch of ANVESHAN at NIE. Featuring keynote speakers, upcoming club activities, and project showcases.",
      date: "2024-10-20T10:00:00+05:30",
      image: "https://unsplash.com/photos/black-flat-screen-tv-turned-on-displaying-man-in-black-suit-dJICd7b_LlE",
      location: "NIE Auditorium, Mysuru",
      highlights: [
        "Keynote address by industry experts",
        "Introduction to ANVESHAN’s mission",
        "Showcase of ongoing projects",
        "Networking session"
      ]
    }
  ];

  return (
    <>
      <Navigation scrollTo={scrollTo} />

      <section
      ref={refs.hero}
        className="relative min-h-screen w-full font-sans text-black bg-white overflow-hidden border-b-2 selection:none"
      >
        <div className='h-[65vh] w-[65vh] absolute top-20 right-40 hover:scale-[1.1] duration-500 linear select-none'>
          <img src={logo2} alt="" />
        </div>
        <div
          ref={dateRef}
          className="absolute top-20 right-10 text-sm tracking-widest text-gray-600 uppercase hero-text select-none"
        >
          {currentDate}.
        </div>

        <div className="absolute left-[35%] top-[45%] -translate-x-1/2 -translate-y-1/2 text-8xl  uppercase font-medium tracking-widest hero-text">
          <h1 ref={h1Ref} className="px-3 py-3 flex items-center justify-center select-none">
            {"Anveshan".split("").map((char, index) => (
              <span className={`character char-${index}`} key={index}>{char}</span>
            ))}
          </h1>
        </div>

        <div ref={topTextRef} className="absolute top-[25%] left-10  text-gray-500 tracking-wide text-lg z-2">
          {"Explore. Innovate. Lead.".split(" ").map((char, index) => (
            <span key={index}>{char + " "}</span>
          ))}
        </div>

        <div ref={bottomTextRef} className="text-right w-[40%] flex items-center justify-center flex-col absolute bottom-[15%] right-[2%] text-gray-500 tracking-wide text-lg z-2 select-all selection:none">
          <p className='mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta consequatur ducimus earum? Aliquid aliquam, a ipsa dolores eaque </p>
        </div>

        <div
          ref={scrollRef}
          onClick={() => scrollTo("about")}
          className="z-3 absolute bottom-5 left-1/2 -translate-x-1/2 text-sm uppercase tracking-widest text-gray-500 animate-bounce cursor-pointer hover:text-black hover:tracking-[0.2em] transition-all"
        >
          Scroll Down ↓
        </div>

        <CircularText text="Anveshan * AIML * NIE MYSORE * " onHover="goBonkers" spinDuration={15} />
      </section>

      <section ref={refs.about} className="min-h-screen w-full text-black px-12 py-24 flex flex-col justify-center">
        <div ref={aboutTextRef} className="max-w-5xl mx-auto space-y-10 text-lg leading-loose z-2">
          <h2 className="text-center w-full text-4xl font-bold border-b pb-2 border-gray-600 uppercase tracking-wide group inline-block">
            {[...typedHeading].map((char, idx) => (
              <span key={idx} className="cursor-pointer text-black stroke-text transition-colors duration-300 ease-in-out hover:text-gray-500">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span className="blink-cursor text-black">|</span>
          </h2>

          <div ref={containerRef} style={{ position: 'relative' }}>
            <VariableProximity
              label={`Welcome to ANVESHAN, the AI, ML, and Research Club of The National Institute of Engineering. Our mission is to empower students and enthusiasts by providing a platform where they can explore the latest advancements in artificial intelligence and machine learning. We believe in the power of technology to transform lives and solve real-world challenges, and our club is dedicated to fostering innovation and collaboration in this exciting field.`}
              className='hover:cursor-pointer'
              fromFontVariationSettings="'wght' 200, 'opsz' 10"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={80}
              falloff='gaussian'
            />
            <p>At ANVESHAN, we engage in various projects that leverage AI and ML technologies, focusing on practical applications that can make a difference. We encourage our members to dive deep into research, share their findings, and contribute to the growing body of knowledge in AI and ML. Through workshops, discussions, and collaborative projects, we aim to inspire the next generation of tech leaders.</p>
          </div>
        </div>
        <button onClick={handleClick} className="mx-auto px-10 py-3 rounded-2xl shadow-lg border">About us</button>
      </section>

      <section ref={refs.events}><EventsTabs events={events} /></section>
      <section ref={refs.projects}><CurvedLoop /><ProjectDisplay /></section>
      <section ref={refs.resources}><Resources /></section>
      <section ref={refs.members}><TeamDisplay /></section>
      <section ref={refs.contact}><Footer scrollTo={scrollTo} />
      </section>
    </>
  );
};

export default Home;
