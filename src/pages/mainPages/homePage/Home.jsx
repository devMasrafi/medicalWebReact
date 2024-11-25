import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CmnButton from "../../../components/CmnButton";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="2xl:bg-heroImg 2xl:h-[550px] 2xl:w-full bg-no-repeat 2xl:bg-cover font-workSans sm:bg-mobileHeroImg sm:bg-no-repeat sm:bg-cover sm:h-[250px] sm:w-full md:bg-heroImg md:h-[550px] md:w-full md:bg-cover md:bg-no-repeat"
      >
        <div className="2xl:block md:block md:h-full 2xl:bg-gradient-to-t 2xl:from-white sm:h-full sm:bg-gradient-to-t sm:from-white">
          <div className="container mx-auto 2xl:pt-[12rem] sm:pt-[5rem] sm:pb-[3rem] 2xl:pb-[12rem]">
            <div className="sm:px-2 sm:text-xs 2xl:text-base">
              <div>
                <div className="2xl:pb-3 md:pb-4 sm:pb-7">
                  <motion.h3
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-bold 2xl:text-md md:text-lg uppercase tracking-widest text-secColor"
                  >
                    caring for life
                  </motion.h3>
                  <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="font-yesevaOne 2xl:text-7xl 2xl:w-[56rem] md:text-5xl sm:text-2xl"
                  >
                    Leading the Way <br />
                    in Medical Excellence
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.4 }}
                >
                  <CmnButton to="/service">our service</CmnButton>
                </motion.div>
              </div>
              <motion.div className="relative">
                <motion.div
                  initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="absolute 2xl:bottom-[-20rem] md:bottom-[-12rem] sm:bottom-[-18rem]"
                >
                  <div className="2xl:flex 2xl:items-center md:flex md:flex-wrap md:justify-center md:items-center 2xl:gap-5 md:gap-2 sm:block">
                    {/* Cards */}
                    {[
                      {
                        bg: "bg-mainColor",
                        text: "Book an appointment",
                        img: "./images/39.-Calendar.svg",
                      },
                      {
                        bg: "bg-AscColor",
                        text: "Book an appointment",
                        img: "./images/Team.png",
                      },
                      {
                        bg: "bg-secColor",
                        text: "Book an appointment",
                        img: "./images/15.-Cash.svg",
                      },
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.2 + index * 0.2,
                          duration: 1,
                        }}
                        className={`${card.bg} 2xl:w-[28rem] 2xl:h-[6.25rem] flex justify-evenly text-white items-center rounded-md font-workSans sm:w-[19rem] sm:h-[4rem] sm:mb-3`}
                      >
                        <h3>{card.text}</h3>
                        <img
                          className="2xl:h-[3rem] 2xl:w-[3rem]"
                          src={card.img}
                          alt="Card icon"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto font-workSans mt-[12rem] sm:p-2"
      >
        <div className="flex justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="2xl:text-center md:text-center w-[40rem]"
          >
            <h3 className="font-bold text-lg text-secColor tracking-widest mt-14">
              Welcome to Meddical
            </h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor py-4">
              A Great Place to Receive Care
            </h2>
            <p className="pb-4 text-md 2xl:w-full md:w-full sm:w-[18rem]">
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
          </motion.div>
        </div>
      </motion.section>

      <section
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
      </section>

      {/* Doctors Section */}
      <motion.section
        ref={ref}
        initial={{opacity: 0, y: 50}}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{delay: 0.4, duration: 1}}
        className="sm:px-2 lg:px-0 container mx-auto font-workSans py-10 lg:mt-[22rem] lg:mb-[16rem] "
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl font-bold text-center mb-8 capitalize"
        >
          <h3 className="font-bold text-lg text-secColor tracking-widest mt-14">our pride</h3>
          <h2 className="sm:pt-1 lg:pt-4" >Our Doctors</h2>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:flex justify-center md:gap-8 sm:flex- sm:gap-y-[3rem] "
        >
          {[
            { img: "./images/doctorimage-1.jpg", name: "Doctor Name", dept: "Neurology" },
            { img: "./images/doctorimage-2.png", name: "Doctor Name", dept: "Neurology" },
            { img: "./images/doctorimage-3.jpg", name: "Doctor Name", dept: "Neurology" },
          ].map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 1 }}
              className="border rounded-md text-center"
            >
              <img src={doctor.img} alt="Doctor" />
              <div className="py-4">
                <h3 className="capitalize">{doctor.name}</h3>
                <h2 className="uppercase font-medium text-secColor">{doctor.dept}</h2>
              </div>
              <h4 className="bg-mainColor w-full py-2 text-white uppercase 2xl:text-base sm:text-xs cursor-pointer">
                View Profile
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
