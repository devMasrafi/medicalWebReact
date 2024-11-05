import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-heroImg h-screen bg-no-repeat bg-contain font-workSans">
        <div>
          <div className="container mx-auto pt-[20rem]">
            <div>
              <div>
                <h3 className="font-bold text-md uppercase tracking-widest text-secColor ">
                  caring for life
                </h3>
                <h1 className="font-yesevaOne text-7xl w-[56rem] ">
                  Leading the Way <br />
                  in Medical Excellence
                </h1>
              </div>
              <button className="capitalize font-workSans font-medium bg-AscColor rounded-full my-8 py-3 px-6 ">
                <Link to="/service">our service</Link>
              </button>
            </div>
            <div>
              <div class="absolute bottom-[-3rem]">
                <div className="flex items-center gap-5 ">
                  <div className="bg-mainColor w-[28rem] h-[6.25rem] flex justify-evenly text-white items-center rounded-md font-workSans ">
                    <h3>Book an appoinment</h3>
                    <img
                      className="h-[3rem] w-[3rem] "
                      src="./images/39.-Calendar.svg"
                      alt="calender image"
                    />
                  </div>
                  <div className="bg-AscColor w-[28rem] h-[6.25rem] flex justify-evenly p-3 text-white items-center rounded-md font-workSans ">
                    <h3>Book an appoinment</h3>
                    <img
                      className="h-[3rem] w-[3rem] "
                      src="./images/Team.png"
                      alt="calender image"
                    />
                  </div>
                  <div className="bg-secColor w-[28rem] h-[6.25rem] flex justify-evenly p-3 text-white items-center rounded-md font-workSans ">
                    <h3>Book an appoinment</h3>
                    <img
                      className="h-[3rem] w-[3rem] "
                      src="./images/15.-Cash.svg"
                      alt="calender image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* welcome to meddical */}
      <section className="container mx-auto font-workSans">
        <div className="flex justify-center py-12">
          <div className="text-center w-[40rem] ">
            <h3 className="font-bold text-lg text-secColor tracking-widest ">
              Welcome to Meddical
            </h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor py-4  ">
              A Great Place to Receive Care
            </h2>
            <p className="pb-4 text-md ">
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
      <section className="container mx-auto">
      <div>
        <img
         className="w-full mb-6 "
         src="./images/W_ImgBoundry.svg" alt="" />
      </div>
      </section>

      {/* ourService */}
      <section>
        <div className="flex justify-center">
          <div className="text-center py-5">
            <h3 className="font-workSans text-xl font-bold uppercase text-secColor ">Care you can believe in</h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor ">Our Services</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
