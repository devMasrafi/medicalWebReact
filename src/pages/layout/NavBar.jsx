import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toogleNavOpen, setToogleNavOpen] = useState(false);

  const onClickHandlerOpen = () => {
    setModalOpen(true);
  };
  const onToogleNavClick = () => {
    setToogleNavOpen(!toogleNavOpen);
  };

  const onClickHandelerClose = () => {
    setModalOpen(false);
  };

  const onSubmitHandler = () => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <section className=" bg-mainColor py-2 sm:px-2 ">
      <div className="container mx-auto flex justify-between text-white  ">
        <div className="2xl:block md:block sm:hidden">
          <ul className="flex items-center capitalize gap-5 font-workSans text-lg font-semibold py-3">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/service">service</Link>
            </li>
            {/* <li>
              <Link to="/doctors">doctor</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li> */}
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        {/* button for appoinment */}
        <div>
          <button
            onClick={onClickHandlerOpen}
            className={`capitalize font-workSans font-medium bg-secColor rounded-full py-3 px-6 sm:text-sm 2xl:text-base ${
              !toogleNavOpen ? "block" : "hidden"
            }`}
          >
            Appointment
          </button>
          {modalOpen && (
            <div className="fixed inset-0 z-50 top-0 items-center justify-center bg-gray-900 bg-opacity-75 ">
              <div className="2xl:w-[480px] 2xl:absolute 2xl:top-[10rem] 2xl:left-[45rem] ">
                <div className="bg-mainColor rounded-lg shadow-md p-6 sm:mx-1 sm:my-4 ">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">
                      Appointment Request
                    </h2>
                    <button
                      onClick={onClickHandelerClose}
                      className=" bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold uppercase text-2xl rounded-2xl px-3 font-workSans"
                    >
                      x
                    </button>
                  </div>
                  <div>
                    <div>
                      <form onSubmit={onSubmitHandler}>
                        {/* name and mail */}
                        <div className="md:flex justify-between gap-2">
                          <div className="mb-4 sm:flex sm:flex-col md:block">
                            <label className="capitalize " htmlFor="name">
                              Name:
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="text-mainColor rounded-md  border-gray-300 p-2 2xl:w-full md:w-[18rem] "
                            />
                          </div>
                          <div className="mb-4 sm:flex sm:flex-col md:block">
                            <label className="capitalize " htmlFor="email">
                              Email:
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="text-mainColor rounded-md  border-gray-300 p-2 2xl:w-full md:w-[18rem] "
                            />
                          </div>
                        </div>
                        {/* date time dpt. */}
                        <div className="flex items-center gap-4 sm: flex-wrap">
                          <div className="flex flex-col">
                            <label className="capitalize " htmlFor="appDate">
                              select date
                            </label>
                            <input
                              type="date"
                              name="appDate"
                              className="rounded-md py-2 text-mainColor"
                            />
                          </div>
                          {/* time selection */}
                          <div className="flex flex-col">
                            <label className="capitalize " htmlFor="appTime">
                              select time
                            </label>
                            <input
                              type="time"
                              name="appTime"
                              className="rounded-md py-2 text-mainColor"
                            />
                          </div>
                          {/* dpt. selection */}
                          <div className="flex flex-col text-mainColor outline-none">
                            <label htmlFor="appTime">select time</label>
                            <select
                              className="py-2 rounded-md"
                              name="select Dpt."
                            >
                              <option value="">Select Department</option>
                              <option value="cardiology">Cardiology</option>
                              <option value="neurology">Neurology</option>
                              <option value="pediatrics">Pediatrics</option>
                            </select>
                          </div>
                        </div>
                        {/* message */}
                        <div className="my-4">
                          <label htmlFor="message">phone:</label>
                          <input
                            name="phone"
                            
                            className="rounded-md  border-gray-300 p-2 w-full mt-1"
                          />
                        </div>
                        <div className="my-4">
                          <label htmlFor="message">Message:</label>
                          <textarea
                            id="message"
                            className="rounded-md  border-gray-300 p-2 w-full h-24"
                          />
                        </div>
                        {/* btn */}
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* mobile nav */}
        <div className="sm:block lg:hidden md:hidden xl:hidden 2xl:hidden ">
          <div className="">
            <button className="" onClick={onToogleNavClick}>
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>
          {/* mobile navigation */}
          <motion.section
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: toogleNavOpen ? 1 : 0,
              x: toogleNavOpen ? 0 : -100,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:w-screen sm:h-screen absolute bg-mainColor/90 top-0 left-0 flex px-3 items-center z-50"
          >
            {toogleNavOpen && (
              <ul className="capitalize gap-5 font-workSans text-3xl font-semibold ">
                <li className="pb-5 underline underline-offset-[1rem] decoration-AscColor  ">
                  <Link onClick={onToogleNavClick} to="/">
                    home
                  </Link>
                </li>
                <li className="pb-5 underline underline-offset-[1rem] decoration-AscColor  ">
                  <Link onClick={onToogleNavClick} to="/about">
                    about us
                  </Link>
                </li>
                <li className="pb-5 underline underline-offset-[1rem] decoration-AscColor  ">
                  <Link onClick={onToogleNavClick} to="/service">
                    service
                  </Link>
                </li>
                <li className="pb-5 underline underline-offset-[1rem] decoration-AscColor  ">
                  <Link onClick={onToogleNavClick} to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            )}
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
