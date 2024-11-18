import React from "react";
import { Link } from "react-router-dom";
import CmnButton from "../../../components/CmnButton";
import HeartIcon from "../../../components/HeartIcon";

const Home = () => {
  return (
    <>
      {/* hero */}
      <section
        className="relative 2xl:bg-heroImg 2xl:h-[550px] 2xl:w-full bg-no-repeat bg-cover font-workSans sm:bg-mobileHeroImg sm:bg-no-repeat sm:bg-cover sm:h-[250px] sm:w-full
      "
      >
        <div className="2xl:block 2xl:bg-gradient-to-t 2xl:from-white sm:bg-gradient-to-t sm:from-slate-200 ... ">
          <div className="container mx-auto 2xl:pt-[12rem] sm:pt-[5rem] sm:pb-[3rem] 2xl:pb-[12rem] ">
            <div className="sm:px-2 sm:text-xs 2xl:text-base">
              <div>
                <div className="2xl:pb-3">
                  <h3 className="font-bold 2xl:text-md uppercase tracking-widest text-secColor ">
                    caring for life
                  </h3>
                  <h1 className="font-yesevaOne 2xl:text-7xl 2xl:w-[56rem] sm:text-2xl ">
                    Leading the Way <br />
                    in Medical Excellence
                  </h1>
                </div>
                <div>
                  <CmnButton to="/service">our service</CmnButton>
                </div>
              </div>
              <div className="">
                <div className="absolute 2xl:bottom-[-4rem] sm:bottom-[-12rem] ">
                  <div className="2xl:flex 2xl:items-center gap-5 sm:block ">
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
                    <div className="bg-secColor 2xl:w-[28rem] 2xl:h-[6.25rem] flex justify-evenly text-white items-center rounded-md font-workSans sm:w-[19rem] sm:h-[4rem] sm:mb-3">
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
        </div>
      </section>
      {/* welcome to meddical */}
      <section className="container mx-auto font-workSans mt-[6rem] sm:p-2">
        <div className="flex justify-center py-20">
          <div className="2xl:text-center w-[40rem] ">
            <h3 className="font-bold text-lg text-secColor tracking-widest mt-14 ">
              Welcome to Meddical
            </h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor py-4  ">
              A Great Place to Receive Care
            </h2>
            <p className="pb-4 text-md 2xl:w-full sm:w-[18rem] ">
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
            className="w-full mb-6 sm:hidden 2xl:block "
            src="./images/W_ImgBoundry.svg"
            alt=""
          />
          <img
            className="2xl:hidden sm:block sm:mb-5"
            src="./mobileImages/homeImages/homeSectionImage.jpg"
            alt=""
          />
        </div>
      </section>

      {/* ourService */}
      <section>
        <div className="flex justify-center">
          <div className="text-center py-5">
            <h3 className="font-workSans text-xl font-bold uppercase text-secColor ">
              Care you can believe in
            </h3>
            <h2 className="font-yesevaOne text-3xl text-mainColor ">
              Our Services
            </h2>
          </div>
        </div>
      </section>
      {/*service discribtion */}
      <section className="container mx-auto font-workSans flex justify-between my-24 sm:px-2">
        <div className=" text-center gap-2">
          <div className="border p-1 2xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/bandageIcon.svg"
              alt="free checkup image"
            />
            <h3>free checkup</h3>
          </div>
          <div className="border p-1 2xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/heartVector.svg"
              alt="cardiogram image"
            />
            <h3>cardiogram</h3>
          </div>
          <div className="border  p-12xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/dnaTesting.svg"
              alt="dnatesting image"
            />
            <h3>dna testing</h3>
          </div>
          <div className="border  p-12xl:w-[10rem] 2xl:h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/bloodBank.svg"
              alt="blood bank image"
            />
            <h3>blood bank</h3>
          </div>
          <div className="border p-1 bg-mainColor text-white py-2 capitalize ">
            <h3>view all</h3>
          </div>
        </div>
        <div className="2xl:w-[35rem] 2xl:text-base sm:text-sm sm:pl-4">
          <div>
            <h2 className="2xl:text-3xl sm:text-lg ">
              A passion for putting patients first.
            </h2>
            <div className="2xl:flex justify-between py-4 ">
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
            <div className=" py-8 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque. Convallis felis vitae tortor augue. Velit
                nascetur proin massa in.
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:block sm:hidden">
          <div>
            <img
              className="mb-4 w-[20rem] "
              src="./images/serviceImg-1.jpg"
              alt="service image 1"
            />
            <img
              className="w-[20rem] "
              src="./images/serviceImg-2.jpg"
              alt="service image 2"
            />
          </div>
        </div>
      </section>

      {/* specialty */}
      <section className="container mx-auto font-workSans p-2 ">
        <div>
          <div className="text-center my-20">
            <h3 className="text-xl uppercase text-secColor font-semibold ">
              Always Caring
            </h3>
            <h2 className="font-yesevaOne text-3xl py-6 ">Our Specialties</h2>
          </div>
          <div>
            <div className="flex flex-wrap 2xl:justify-between 2xl:px-[10rem] sm:gap-6">
              <HeartIcon>Neurology</HeartIcon>
              <HeartIcon>Oncology</HeartIcon>
              <HeartIcon>Ophthalmology</HeartIcon>
              <HeartIcon>Otorhinolaryngology</HeartIcon>
              <HeartIcon>Cardiovascular </HeartIcon>
              <HeartIcon>Pulmonology</HeartIcon>
              <HeartIcon>Renal Medicine</HeartIcon>
              <HeartIcon>Gastroenterology</HeartIcon>
              <HeartIcon>Urology</HeartIcon>
              <HeartIcon>Dermatology</HeartIcon>
              <HeartIcon>Gynaecology</HeartIcon>
              <HeartIcon>Bones</HeartIcon>
            </div>
          </div>
        </div>
      </section>

      {/*doctors */}
      <section className="font-workSans 2xl:text-base sm:text-sm">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
          <div className="flex justify-center 2xl:gap-8 sm:gap-1">
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
        </div>
      </section>
    </>
  );
};

export default Home;
