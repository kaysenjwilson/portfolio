"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const HeroSection = () => {
  const openResume = () => {
    window.open("/images/Kaysen-Resume.pdf", "_blank");
  };
  const handleHireMeClick = () => {
    scroll.scrollTo(window.innerHeight * 3, {
      smooth: true,
      duration: 1000,
    });
  };
  return (
    <section className="lg:py-16">
      <div className="grid  grid-cols-1 lg:grid-cols-12">
        <motion.div
          intial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kaysen",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Web Developer",
                1000,
                "An UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            Hi there! I'm Kaysen, a passionate web developer and UI/UX designer
            with expertise in technologies like Node.js, React, and Next.js. I
            specialize in creating interactive and user-friendly experiences
            that combine form and function. Let's collaborate to bring your
            digital ideas to life!
          </p>
          <div>
            <button
              onClick={handleHireMeClick}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire me
            </button>
            <button
              onClick={openResume}
              className="px-1 py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image
              src="/images/hero-image2.png"
              alt="hero image"
              className="absolute"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
