import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="bg-mainColor py-2 sm:px-2 ">
      <div className="container mx-auto flex justify-between text-white  ">
        <div className="2xl:block xl:block md:block lg:block sm:hidden">
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
            className={`capitalize font-workSans font-medium bg-secColor rounded-full py-3 px-6 sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base ${
              !toogleNavOpen ? "block" : "hidden"
            }`}
          >
            Appointment
          </button>
          {modalOpen && (
            <div className="fixed inset-0 z-50 lg:flex xl:flex md:flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-75 sm: ">
              <div className="w-[480px] ">
                <div className="bg-mainColor rounded-lg shadow-md p-6 ">
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
                        <div className="flex justify-between gap-2">
                          <div className="mb-4">
                            <label className="capitalize " htmlFor="name">
                              Name:
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="text-mainColor rounded-md  border-gray-300 p-2 w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="capitalize " htmlFor="email">
                              Email:
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="text-mainColor rounded-md  border-gray-300 p-2 w-full"
                            />
                          </div>
                        </div>
                        {/* date */}
                        <div className="flex items-center gap-4 ">
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
                        <div className="my-4">
                          <label htmlFor="message">Message:</label>
                          <textarea
                            id="message"
                            className="rounded-md  border-gray-300 p-2 w-full h-24"
                          />
                        </div>
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
          <div>
            {toogleNavOpen && (
              <section className="sm:w-screen sm:h-screen ">
                <div>
                  <ul className="capitalize gap-5 font-workSans text-lg font-semibold py-3">
                    <li>
                      <Link onClick={onToogleNavClick} to="/">
                        home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onToogleNavClick} to="/about">
                        about us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onToogleNavClick} to="/service">
                        service
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/doctors">doctor</Link>
                    </li>
                    <li>
                      <Link to="/news">news</Link>
                    </li> */}
                    <li>
                      <Link onClick={onToogleNavClick} to="/contact">
                        contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
