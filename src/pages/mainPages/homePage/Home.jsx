import React from "react";
import { Link } from "react-router-dom";
import CmnButton from "../../../components/CmnButton";
import HeartIcon from "../../../components/HeartIcon";

const Home = () => {
  return (
    <>
      <section className="bg-heroImg h-screen bg-no-repeat bg-contain font-workSans">
        <div>
          <div className="container mx-auto pt-[20rem]">
            <div>
              <div className="pb-3">
                <h3 className="font-bold text-md uppercase tracking-widest text-secColor ">
                  caring for life
                </h3>
                <h1 className="font-yesevaOne text-7xl w-[56rem] ">
                  Leading the Way <br />
                  in Medical Excellence
                </h1>
              </div>

              <div>
                <CmnButton to="/service">our service</CmnButton>
              </div>
            </div>
            <div>
              <div className="absolute bottom-[-3rem]">
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
            src="./images/W_ImgBoundry.svg"
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
      {/* service discribtion */}
      <section className="container mx-auto font-workSans  flex justify-between my-24">
        <div className="border rounded-md text-center">
          <div className="w-[10rem] h-[7rem] flex flex-col items-center capitalize font-medium py-2">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/bandageIcon.svg"
              alt="free checkup image"
            />
            <h3>free checkup</h3>
          </div>
          <div className="w-[10rem] h-[7rem] flex flex-col items-center capitalize font-medium py-2">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/heartIcon.svg"
              alt="cardiogram image"
            />
            <h3>cardiogram</h3>
          </div>
          <div className="w-[10rem] h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/dnaTesting.svg"
              alt="dnatesting image"
            />
            <h3>dna testing</h3>
          </div>
          <div className="w-[10rem] h-[7rem] flex flex-col items-center capitalize font-medium py-2 ">
            <img
              className="w-[4rem] h-[4rem] "
              src="./images/bloodBank.svg"
              alt="blood bank image"
            />
            <h3>blood bank</h3>
          </div>
          <div className="bg-mainColor text-white py-2 capitalize ">
            <h3>view all</h3>
          </div>
        </div>
        <div className="w-[35rem] ">
          <div>
            <h2 className="text-3xl ">A passion for putting patients first.</h2>
            <div className="flex justify-between py-5 ">
              <ul className="list-disc list-inside">
                <li>A Passion for Healing</li>
                <li>All our best</li>
                <li>A Legacy of Excellence</li>
              </ul>
              <ul className="list-disc">
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
        <div>
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
      <section className="container mx-auto font-workSans ">
        <div>
          <div className="text-center my-20">
            <h3 className="text-xl uppercase text-secColor font-semibold ">
              Always Caring
            </h3>
            <h2 className="font-yesevaOne text-3xl py-6 ">Our Specialties</h2>
          </div>
          <div className="flex flex-wrap justify-between px-[10rem] ">
            <HeartIcon>Neurology</HeartIcon>
            <HeartIcon>Oncology</HeartIcon>
            <HeartIcon>Otorhinolaryngology</HeartIcon>
            <HeartIcon>Ophthalmology</HeartIcon>
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
      </section>

      {/* doctors */}
      <section className="font-workSans">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
          <div className="flex justify-center gap-8">
            <div className="border rounded-md ">
              <div className="text-center">
                <img src="./images/doctorimage-1.jpg" alt="" />
                <div className="py-4">
                  <h3 className="capitalize ">doctor name</h3>
                  <h2 className="uppercase font-medium text-secColor  ">
                    neurology
                  </h2>
                </div>
                <h4 className="bg-mainColor w-full py-2 text-white uppercase">
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
              <h4 className="bg-mainColor w-full py-2 text-white uppercase">
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
              <h4 className="bg-mainColor w-full py-2 text-white uppercase">
                view profile
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}

      <footer className="bg-mainColor text-white p-6">
        <div className="container mx-auto">
          <div 
            className=" flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-400 py-5 ">
            <div className="mb-4 md:mb-0">
              <img src="./images/MeddicalAsc.svg" alt="" />
              <p className="text-sm mt-2">
                Leading the Way in Medical Excellence, Trusted Care.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-20">
              <div>
                <h3 className="text-lg font-semibold mb-2">Important Links</h3>
                <ul className="py-2">
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      Appointment
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      Doctors
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="py-2">Call: (237) 681-812-255</p>
                <p className="py-2">Email: fildineesoe@gmail.com</p>
                <p className="py-2">Address: 0123 Some place</p>
                <p className="py-2">Some country</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-300 p-2 rounded-l-md outline-none text-black"
                />
                <button className="bg-blue-500 hover:bg-mainColor text-white px-4 py-2 rounded-r-md">
                  <img src="./images/sendMail.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* copywright */}
          <div className="mt-4 md:mt-0 py-6">
            <p>&copy; 2021 Hospital's name. All Rights Reserved by PNTEC-LTD</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
