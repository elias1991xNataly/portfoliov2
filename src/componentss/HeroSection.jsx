"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justfify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              Hello, I´m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Elías",
                1000,
                "Web Developer",
                1000,
                "Learning Blockchain",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6  lg:text-xl">
            A Junior Full Stack Developer who loves solving problems with
            programming...
          </p>
          <div className="gap-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/elias-alfonso-soto-2a3765177"
            >
              <button className="px-6 py-3 text-white mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500  via-purple-500 to-pink-500">
                Hire Me
              </button>
            </Link>
            <button
              onClick={() => {
                window.open("/EliasCV.pdf", "_blank");
              }}
              className="px-1 text-white py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full py-2 md:px-auto px-3">
                Download CV
              </span>
            </button>
            <button
              onClick={() => {
                window.open(
                  "/Carta_de_presentación_Elías_Alfonso.pdf",
                  "_blank"
                );
              }}
              className="px-1 sm:mx-3 text-white py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full py-2 md:px-auto px-3">
                Cover Letter
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/Avatar.jpg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
