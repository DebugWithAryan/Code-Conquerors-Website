import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div ref={aboutRef} className='h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10'>
        <div
          className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center text-center font-heading text-black text-xl md:text-1xl xl:text-[25px] 2xl:text-[30px] leading-snug'
          style={{ wordBreak: 'keep-all', hyphens: 'none' }}
        >
          Code Conquerors is a vibrant coding community where passionate developers come together to learn, build, and grow. We focus on collaborative learning, hands-on projects, and innovative thinking to turn ideas into reality. Whether you're just beginning your coding journey or are an experienced developer looking to level up, we foster an environment that encourages creativity, teamwork, and continuous growth across technology domains like AI/ML, Web and App Development, UI/UX Design, Blockchain, Data Science, and DSA/Competitive Programming.
        </div>
      </div>

    </>
  )
}

export default About