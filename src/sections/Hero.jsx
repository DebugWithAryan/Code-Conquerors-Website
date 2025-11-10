import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import videoBg from '../assets/video/blueFlames.mp4';

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const Hero = () => {

  const heroRef = useRef(null);

  useGSAP(() => {

    // pin hero section
    ScrollTrigger.create({
      trigger: heroRef.current,        
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1
    });

    // Animate h1
    SplitText.create("h1", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          delay: 0.2,
          stagger: 0.1,
        });
      }
    });

    // Animate h2
    SplitText.create("h2", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          delay: 0.4,
        });
      }
    });

    // Animate button
    gsap.from(".gradient-btn", {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.3, 
    });

  }, { scope: heroRef });

  return (
    <>
      <div ref={heroRef} className='relative overflow-hidden z-0'>

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay for better text readability (optional) */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        {/* Text container */}
        <div className="main-container h-screen flex flex-col lg:justify-center items-start lg:py-12 max-lg:pt-40 relative z-[2]">
          <h1 className="hero-title text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">Welcome to</h1>
          <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">Code <br/> <span className='text-stroke'> Conquerors </span></h2>
          <GradientButton text="Join Us" link="mailto:codeconquerors@gmail.com" className="gradient-btn" />
        </div>
        
      </div>
    </>
  )
}

export default Hero