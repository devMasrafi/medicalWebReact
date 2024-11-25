import React, { useRef } from "react";
import { motion } from "framer-motion";
import DoctorCard from "../../../components/DoctorCard";
import ContactCards from "../../../components/ContactCards";

const About = () => {
  const ref = useRef()

  return (
    <main className="font-workSans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-aboutHeroImg bg-no-repeat bg-cover h-[350px]"
      >
        <div className="absolute inset-0 bg-white/50">
          <div className="container mx-auto pt-[12rem] sm:px-2 md:px-3">
            <div className="font-workSans shadow-md">
              <a href="/" className="hover:text-AscColor transition-colors">
                Home
              </a>
              <span> / </span>
              <span>About Us</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-yesevaOne capitalize text-6xl text-mainColor"
            >
              About us
            </motion.h2>
          </div>
        </div>
      </motion.section>

      {/* About Welcome Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto mt-[4rem]"
      >
        <div className="sm:p-2 sm:text-sm 2xl:text-base">
          <div className="flex justify-evenly">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                className="sm:hidden 2xl:block"
                src="./images/aboutWelcomeImg.png"
                alt="about welcome image"
              />
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="md:text-xl uppercase text-secColor font-workSans font-medium">
                  Welcome to Hospital name
                </h3>
                <h2 className="font-yesevaOne md:text-3xl sm:text-xl sm:w-[12rem] capitalize text-mainColor">
                  Best Care for Your Good Health
                </h2>
                <div className="2xl:flex py-5 gap-12">
                  <ul className="list-disc list-inside marker:text-blue-600">
                    <li>A Passion for Healing</li>
                    <li>All our best</li>
                    <li>A Legacy of Excellence</li>
                  </ul>
                  <ul className="list-disc list-inside marker:text-blue-600">
                    <li>5-Star Care</li>
                    <li>Believe in Us</li>
                    <li>Always Caring</li>
                  </ul>
                </div>
                <div className="py-8 md:w-[564px]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque tortor ornare ornare. Convallis
                    felis vitae tortor augue. Velit nascetur proin massa in.
                  </p>
                  <p className="py-6 sm:hidden md:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Convallis felis vitae tortor augue. Velit nascetur proin
                    massa in.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Us Messages Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-aboutMessageBg bg-cover h-[440px] my-14 text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70">
          <div className="text-center flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="md:w-[554px] flex flex-col items-center mt-[5rem]"
            >
              <img
                className="w-[4rem]"
                src="./images/quotionVector.svg"
                alt=""
              />
              <p className="border-b-2 border-b-gray-400 pb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur.
              </p>
              <h3 className="capitalize text-xl font-semibold pt-4">
                John Doe
              </h3>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Doctors Section */}
      <div className="py-[5rem] px-2 ">
        <DoctorCard />
      </div>
      <motion.div 
        initial={{opacity: 0}}
        animate={{ opacity: 1 ,x: 0.5 }}
        transition={{ duration: 0.3, delay: 1, ease: "linear" }}
      className="container mx-auto my-[3rem] px-2 ">
        <ContactCards className="md:w-[230px] md:h-[230px] bg-mainColor text-white flex justify-between rounded-md sm:w-full sm:h-[6rem] items-center" />
      </motion.div>
    </main>
  );
};

export default About;
