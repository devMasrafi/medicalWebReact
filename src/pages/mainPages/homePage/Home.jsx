import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CmnButton from "../../../components/CmnButton";
import HeartIcon from "../../../components/HeartIcon";

import { motion, useInView } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className=" 2xl:bg-heroImg 2xl:h-[550px] 2xl:w-full bg-no-repeat 2xl:bg-cover font-workSans sm:bg-mobileHeroImg sm:bg-no-repeat sm:bg-cover sm:h-[250px] sm:w-full md:bg-heroImg md:h-[550px] md:w-full md:bg-cover md:bg-no-repeat
      "
      >
        <div className="2xl:block md:block md:h-full  2xl:bg-gradient-to-t 2xl:from-white sm:h-full sm:bg-gradient-to-t sm:from-white ... ">
          <div className="container mx-auto 2xl:pt-[12rem] sm:pt-[5rem] sm:pb-[3rem] 2xl:pb-[12rem] ">
            <div className="sm:px-2 sm:text-xs 2xl:text-base">
              <div>
                <div className="2xl:pb-3 md:pb-4 sm:pb-7">
                  <h3 className="font-bold 2xl:text-md md:text-lg uppercase tracking-widest text-secColor ">
                    caring for life
                  </h3>
                  <h1 className="font-yesevaOne 2xl:text-7xl 2xl:w-[56rem] md:text-5xl sm:text-2xl ">
                    Leading the Way <br />
                    in Medical Excellence
                  </h1>
                </div>
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <CmnButton to="/service">our service</CmnButton>
                </motion.div>
              </div>
              <motion.div className="relative">
                <motion.div
                  initial={{ y: 300 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute 2xl:bottom-[-20rem] md:bottom-[-12rem] sm:bottom-[-18rem] "
                >
                  <div className="2xl:flex 2xl:items-center md:flex md:flex-wrap md:justify-center md:items-center 2xl:gap-5 md:gap-2 sm:block  ">
                    <div className="bg-mainColor 2xl:w-[28rem] 2xl:h-[6.25rem] flex justify-evenly text-white items-center rounded-md font-workSans sm:w-[19rem] sm:h-[4rem] sm:mb-3">
                      <h3>Book an appoinment</h3>
                      <img
                        className="2xl:h-[3rem] 2xl:w-[3rem] "
                        src="./images/39.-Calendar.svg"
                        alt="calender image"
                      />
                    </div>
                    <div className="bg-AscColor 2xl:w-[28rem] 2xl:h-[6.25rem] flex justify-evenly text-white items-center rounded-md font-workSans sm:w-[19rem] sm:h-[4rem] sm:mb-3">
                      <h3>Book an appoinment</h3>
                      <img
                        className="h-[3rem] w-[3rem] "
                        src="./images/Team.png"
                        alt="calender image"
                      />
                    </div>
                    <div className="bg-secColor 2xl:w-[28rem] 2xl:h-[6.25rem] flex justify-evenly text-white items-center rounded-md font-workSans sm:w-[19rem] sm:h-[4rem] sm:mb-3 ">
                      <h3>Book an appoinment</h3>
                      <img
                        className="h-[3rem] w-[3rem] "
                        src="./images/15.-Cash.svg"
                        alt="calender image"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* welcome to meddical */}
      <section className="container mx-auto font-workSans mt-[12rem] sm:p-2">
        <div className="flex justify-center py-20">
          <div className="2xl:text-center md:text-center w-[40rem] ">
            <h3 className="font-bold text-lg text-secColor tracking-widest mt-14 ">
              Welcome to Meddical
            </h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor py-4  ">
              A Great Place to Receive Care
            </h2>
            <p className="pb-4 text-md 2xl:w-full md:w-full sm:w-[18rem] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
            <Link
              className="py-6 flex items-center justify-center gap-2"
              to="/about"
            >
              Learn More
              <img src="./images/L-R arrowIcon.svg" alt="arrow sign" />
            </Link>
          </div>
        </div>
      </section>
      {/* image boundry */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 1 }}
        className="container mx-auto mt-[5rem] "
      >
        <div>
          <img
            className="w-full mb-6 sm:hidden 2xl:block md:block  "
            src="./images/W_ImgBoundry.svg"
            alt=""
          />
          <img
            className="2xl:hidden md:hidden sm:block sm:mb-5"
            src="./mobileImages/homeImages/homeSectionImage.jpg"
            alt=""
          />
        </div>
      </motion.section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        {/* Section Header */}
        <div className="flex justify-center my-[8rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-center py-5"
          >
            <h3 className="font-workSans text-xl font-bold uppercase text-secColor">
              Care you can believe in
            </h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor">
              Our Services
            </h2>
          </motion.div>
        </div>

        {/* Services Description */}
        <div className="container mx-auto font-workSans flex justify-between my-[8rem] sm:px-2">
          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center gap-2"
          >
            <div className=" text-center gap-2">
              <div className="border hover:cursor-pointer hover:scale-110 hover:bg-mainColor transition-all hover:rounded-md p-1 2xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2">
                <img
                  className="w-[4rem] h-[4rem] "
                  src="./images/bandageIcon.svg"
                  alt="free checkup image"
                />
                <h3>free checkup</h3>
              </div>
              <div className="border hover:cursor-pointer hover:scale-110 hover:bg-mainColor transition-all hover:rounded-md p-1 2xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
                <img
                  className="w-[4rem] h-[4rem] "
                  src="./images/heartVector.svg"
                  alt="cardiogram image"
                />
                <h3>cardiogram</h3>
              </div>
              <div className="border hover:cursor-pointer hover:scale-110 hover:bg-mainColor transition-all hover:rounded-md p-12xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
                <img
                  className="w-[4rem] h-[4rem] "
                  src="./images/dnaTesting.svg"
                  alt="dnatesting image"
                />
                <h3>dna testing</h3>
              </div>
              <div className="border hover:cursor-pointer hover:scale-110 hover:bg-mainColor transition-all hover:rounded-md p-12xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
                <img
                  className="w-[4rem] h-[4rem] "
                  src="./images/bloodBank.svg"
                  alt="blood bank image"
                />
                <h3>blood bank</h3>
              </div>
              <div className="border p-1 bg-mainColor text-white py-2 capitalize cursor-pointer ">
                <motion.h3 whileHover={{ scale: 1.4 }}>view all</motion.h3>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="2xl:w-[35rem] 2xl:text-base sm:text-sm sm:pl-4"
          >
            <h2 className="2xl:text-3xl sm:text-lg">
              A passion for putting patients first.
            </h2>
            <div className="2xl:flex justify-between py-4">
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in.
            </p>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="sm:hidden md:hidden xl:block 2xl:block"
          >
            <img
              className="mb-4 md:w-[20rem]"
              src="./images/serviceImg-1.jpg"
              alt="service 1"
            />
            <img
              className="w-[20rem]"
              src="./images/serviceImg-2.jpg"
              alt="service 2"
            />
          </motion.div>
        </div>
      </motion.section>

      {/*doctors */}
      <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="font-workSans 2xl:text-base sm:text-sm"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Our Doctors
        </motion.h2>

        {/* Doctors Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center 2xl:gap-8 sm:gap-4"
        >
          {/* Doctor Cards */}
          <div className="border rounded-md ">
              <div className="text-center">
                <img src="./images/doctorimage-1.jpg" alt="" />
                <div className="py-4">
                  <h3 className="capitalize ">doctor name</h3>
                  <h2 className="uppercase font-medium text-secColor  ">
                    neurology
                  </h2>
                </div>
                <h4 className="bg-mainColor w-full py-2 text-white uppercase 2xl:text-base sm:text-xs">
                  view profile
                </h4>
              </div>
            </div>
            <div className="rounded-md">
              <div className="text-center">
                <img src="./images/doctorimage-2.png" alt="" />
                <div className="py-4">
                  <h3 className="capitalize ">doctor name</h3>
                  <h2 className="uppercase font-medium text-secColor  ">
                    neurology
                  </h2>
                </div>
                <h4 className="bg-mainColor w-full py-2 text-white uppercase 2xl:text-base sm:text-xs">
                  view profile
                </h4>
              </div>
            </div>
            <div className="rounded-md">
              <div className="text-center">
                <img src="./images/doctorimage-3.jpg" alt="" />
                <div className="py-4">
                  <h3 className="capitalize ">doctor name</h3>
                  <h2 className="uppercase font-medium text-secColor  ">
                    neurology
                  </h2>
                </div>
                <h4 className="bg-mainColor w-full py-2 text-white uppercase 2xl:text-base sm:text-xs">
                  view profile
                </h4>
              </div>
            </div>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
};

export default Home;
