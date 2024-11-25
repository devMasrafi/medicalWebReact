import React from "react";
import { motion } from "framer-motion";
import NewsComponent from "../../../components/NewsComponent";

const ServicePage = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = (direction) => ({
    hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  });

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <main className="sm:text-sm md:text-base">
      {/* Hero Section */}
      <motion.section
        className="relative bg-ourServiceBg bg-no-repeat bg-cover h-[350px]"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-white/40">
          <div className="bg-ourServiceBgOverlay h-[350px] bg-cover opacity-80 bg-no-repeat">
            <div className="container mx-auto pt-[12rem] sm:px-2">
              <div className="font-workSans shadow-md">
                <a href="/" className="hover:text-AscColor transition-colors">
                  Home
                </a>
                <span> / </span>
                <span>Service</span>
              </div>
              <h2 className="font-yesevaOne capitalize text-6xl text-mainColor">
                About us
              </h2>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Description */}
      <motion.section
        className="container mx-auto font-workSans 2xl:flex justify-evenly my-24 md:block sm:px-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Service Items */}
        <motion.div
          className="md:w-[28rem] md:mx-auto md:mb-6"
          variants={slideIn("left")}
        >
          <div className="text-center gap-2 sm:gap-5 sm:flex sm:flex-wrap 2xl:block sm:w-[18rem] md:w-full sm:mx-auto sm:mb-4">
            {[
              { img: "./images/bandageIcon.svg", text: "free checkup" },
              { img: "./images/heartVector.svg", text: "cardiogram" },
              { img: "./images/dnaTesting.svg", text: "dna testing" },
              { img: "./images/bloodBank.svg", text: "blood bank" },
            ].map((service, index) => (
              <motion.div
                className="border rounded-md md:w-[13rem] md:h-[7rem] md:mb-3 flex flex-col items-center capitalize font-medium py-2 sm:w-[8rem]"
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  className="w-[4rem] h-[4rem]"
                  src={service.img}
                  alt={service.text}
                />
                <h3>{service.text}</h3>
              </motion.div>
            ))}
          </div>
          <div className="bg-mainColor text-white py-2 capitalize text-center rounded-md 2xl:w-[13rem] sm:mb-4">
            <h3>view all</h3>
          </div>
        </motion.div>

        {/* Description and Image */}
        <motion.div
          className="md:w-[38rem]"
          variants={slideIn("right")}
        >
          <div className="md:mx-auto">
            <img
              className="md:w-full md:h-[450px] border border-mainColor rounded sm:w-[18rem] sm:mx-auto"
              src="./images/serviceImg-1.jpg"
              alt="service image"
            />
          </div>
          <div className="sm:px-2">
            <div className="py-3">
              <h2 className="md:text-3xl font-yesevaOne sm:text-lg">
                A passion for putting patients first.
              </h2>
              <div className="md:flex justify-between py-5">
                <ul className="list-disc list-inside">
                  <li>A Passion for Healing</li>
                  <li>All our best</li>
                  <li>A Legacy of Excellence</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>5-Star Care</li>
                  <li>Believe in Us</li>
                  <li>Always Caring</li>
                </ul>
              </div>
              <div className="py-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare.
                </p>
                <p className="py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="container mx-auto md:px-0 sm:px-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <h3 className="font-workSans font-semibold uppercase text-secColor md:text-2xl">
            Better information, Better health
          </h3>
          <h2 className="font-yesevaOne text-mainColor md:text-4xl sm:text-xl my-3">
            News
          </h2>
        </div>
        
        {/* news */}
        <NewsComponent/>
      </motion.section>
    </main>
  );
};

export default ServicePage;
