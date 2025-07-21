import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import image from "../assets/images/image_profile.jpg";

gsap.registerPlugin(SplitText);

const names = [
  "Members", // Default name
  "Colin",
  "Sofhie",
  "Tim David",
  "Virat Kohli",
  "Steve Smith",
  "MS Dhoni",
  "Rohit Sharma",
  "Surya Kumar Yadav",
  "Glen Maxwell"
];

const TeamDisplay = () => {
  useEffect(() => {
    const profileImagesContainer = document.querySelector(".profile-images");
    const profileImages = document.querySelectorAll(".profile-images .img");
    const nameElements = document.querySelectorAll(".profile-name .name");
    const nameHeadings = document.querySelectorAll(".profile-name .name h1");

    // Split text into individual letters
    nameHeadings.forEach((heading) => {
      const split = new SplitText(heading, { type: "chars" });
      split.chars.forEach((char) => {
        char.classList.add("letter");
      });
    });
    nameElements.forEach((el) => {
      const letters = el.querySelectorAll(".letter");
      gsap.set(letters, { y: "200%" });
    });


    const defaultLetters = nameElements[0].querySelectorAll(".letter");
    const hoverStates = new Array(profileImages.length).fill(false);

    // Show default on load
    gsap.fromTo(defaultLetters,
      { y: "200%" },
      {
        y: "0%",
        ease: "power3.out",
        duration: 1,
        stagger: {
          each: 0.03,
          from: "center"
        }
      });

    // Image hover behavior (only on wide screens)
    if (window.innerWidth >= 900) {
      profileImages.forEach((img, index) => {
        const correspondingName = nameElements[index + 1]; // skip default
        const letters = correspondingName.querySelectorAll(".letter");

        img.addEventListener("mouseenter", () => {
          hoverStates[index] = true;

          gsap.killTweensOf(defaultLetters);
          gsap.to(defaultLetters, {
            y: "200%",
            ease: "power3.inOut",
            duration: 0.5,
            stagger: {
              each: 0.03,
              from: "center"
            }
          });

          gsap.killTweensOf(letters);
          gsap.to(letters, {
            y: "0%",
            ease: "power3.out",
            duration: 1,
            stagger: {
              each: 0.03,
              from: "center"
            }
          });

          gsap.to(img, {
            width: 140,
            height: 140,
            ease: "power3.out",
            duration: 0.5
          });
        });

        img.addEventListener("mouseleave", () => {
          hoverStates[index] = false;

          gsap.killTweensOf(letters);
          gsap.to(letters, {
            y: "200%",
            ease: "power3.inOut",
            duration: 1,
            stagger: {
              each: 0.03,
              from: "center"
            }
          });

          gsap.to(img, {
            width: 100,
            height: 100,
            ease: "power3.out",
            duration: 0.5
          });

          
          setTimeout(() => {
            if (!hoverStates.includes(true)) {
              gsap.killTweensOf(defaultLetters);
              gsap.to(defaultLetters, {
                y: "0%",
                ease: "power3.out",
                duration: 0.6,
                stagger: {
                  each: 0.03,
                  from: "center"
                }
              });
            }
          }, 100); 
        });
      });
    }
  }, []);


  return (
    <section className='border-t-2 relative w-[100vw] h-[100svh] flex flex-col justify-center items-center gap-[2.5rem] overflow-x-hidden'>
      {/* Profile Images */}
      <div className="profile-images w-max flex justify-center items-center gap-4 flex-wrap">
        {Array.from({ length: 9 }).map((_, i) => (
          <img
            className="img object-cover relative rounded-xl transition-all"
            src={image}
            alt={`profile-${i}`}
            key={i}
          />
        ))}
      </div>

      {/* Names */}
      <div className="profile-name w-full h-[10rem] overflow-hidden relative">
        {names.map((name, index) => (
          <div className={`name ${index === 0 ? "default" : ""}`} key={index}>
            <h1 className='absolute w-full text-center uppercase text-[5rem] font-extrabold select-none tracking-tighter leading-none text-red-900'>
              {name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamDisplay;
